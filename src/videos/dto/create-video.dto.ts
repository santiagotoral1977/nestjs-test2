//import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { IsNotEmpty, IsUrl, Length } from 'class-validator';

export class CreateVideoDto {
  //@ApiProperty()
  @IsNotEmpty()
  @Length(1, 15)
  title: string;

  //@ApiProperty()
  @IsNotEmpty()
  @Length(1, 250)
  description: string;

  //@ApiProperty()
  @IsUrl()
  src: string;
}
