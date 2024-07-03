import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from './app/mail/mail.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: "localhost",
    port: 5432,
    database: "mailschedule",
    username: "postgres",
    password: "123456789",
    synchronize: true,
    entities: [__dirname + "/**/*.entity{.js,.ts}"]
  }), MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
