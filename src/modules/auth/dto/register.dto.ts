// src/modules/auth/dto/register.dto.ts
import { IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString({ message: 'Username must be a string' })
  username: string;

  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}
