import { Test, TestingModule } from '@nestjs/testing';
import { MailService } from './mail.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MailEntity } from './mail.entity';
import { Repository } from 'typeorm';

describe('MailService', () => {
  let mailService: MailService;
  let mailRepository: Repository<MailEntity>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MailService,
        {
          provide: getRepositoryToken(MailEntity),
          useValue: {}
        }
      ],
    }).compile();

    mailService = module.get<MailService>(MailService);
    mailRepository = module.get<Repository<MailEntity>>(getRepositoryToken(MailEntity))
  });

  it('should be defined', () => {
    expect(mailService).toBeDefined();
    expect(mailRepository).toBeDefined();
  });

  describe('save', () => {
    it('should save a new mail with success', async () => {
      //Arrange

      //Act

      //Assert
    })
  });

});
