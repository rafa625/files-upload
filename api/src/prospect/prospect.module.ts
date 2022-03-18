import { Module } from '@nestjs/common';
import { ProspectController } from './prospect.controller';

@Module({
  controllers: [ProspectController],
})
export class ProspectModule {}
