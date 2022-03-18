import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import getAge from 'src/common/utils/getAge';
import { GenderEnum } from './interfaces/gender.enum';
import { Prospect } from './interfaces/prospect.interface';

@Controller('api/v1/prospect')
export class ProspectController {
  @Post('csv')
  @UseInterceptors(FileInterceptor('file'))
  async csvUpload(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Prospect[]> {
    const data = await Buffer.from(file.buffer)
      .toString()
      .split('\r\n')
      .filter((item) => item.trim() !== '')
      .map((item) => item.replace('\r', ''));

    data.shift();
    const splited = await data.map((elm) => elm.split(','));

    const minorList = splited.map((elm) => {
      const [, firstName, lastName, mail, gender, , date] = elm;
      const name = `${firstName} ${lastName}`;
      const [day, month, year] = date.split('/');
      const birthdate = `${year}-${month}-${day}`;
      const age = getAge(birthdate);

      if (age < 18) {
        return {
          name,
          mail,
          gender: GenderEnum[gender] || '',
          birthdate,
          age,
        };
      }
    });

    return minorList.filter((it) => it);
  }
}
