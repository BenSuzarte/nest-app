import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MailEntity } from './mail.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MailService {
  constructor(
    @InjectRepository(MailEntity)
    private readonly mailRepository: Repository<MailEntity>
  ) {}

  async save(): Promise<MailEntity> {

    

    return null
  }
}
