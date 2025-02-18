import { IsString, IsEmail, Matches, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';

export enum CustomerType {
  INDIVIDUAL = 'INDIVIDUAL',
  BUSINESS = 'BUSINESS',
}

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value.replace(/\D/g, '').replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3'),
  )
  @Matches(/^\(\d{2}\) \d{5}-\d{4}$/, {
    message: 'O telefone deve estar no formato (XX) XXXXX-XXXX',
  })
  phone?: string;

  @IsEmail()
  email: string;

  @IsString()
  address: string;

  @IsEnum(CustomerType, { message: 'O tipo de cliente deve ser INDIVIDUAL ou BUSINESS' })
  type_of_customer: CustomerType;

  @IsString()
  @Matches(/^\d{11}|\d{14}$/, {
    message: 'O documento deve conter 11 (CPF) ou 14 (CNPJ) dígitos numéricos',
  })
  document: string;
}
