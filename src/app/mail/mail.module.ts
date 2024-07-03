import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailEntity } from './mail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailEntity])],
  providers: [MailService]
})
export class MailModule {}
