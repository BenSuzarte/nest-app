import { IsEmail, IsISO8601, IsNotEmpty } from 'class-validator';

export class SaveMailDto {

  @IsNotEmpty()
  @IsEmail()
  destinationAddress: string;

  @IsNotEmpty()
  destinationName: string;

  @IsNotEmpty()
  @IsISO8601()
  dueDate: string;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  body: string;

}