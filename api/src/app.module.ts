import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProspectModule } from './prospect/prospect.module';

@Module({
  imports: [ProspectModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
