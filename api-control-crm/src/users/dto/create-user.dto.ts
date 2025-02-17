// prettier-ignore
import { IsString, IsEmail, MinLength, Matches, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @Transform(({ value }) =>
    value.replace(/\D/g, '').replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3'),
  )
  @Matches(/^\(\d{2}\) \d{5}-\d{4}$/, {
    message: 'O número foi salvo no formato (XX) XXXXX-XXXX',
  })
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  password: string;
}
