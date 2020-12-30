import { PartialType } from '@nestjs/mapped-types';
// import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

// 필수하진 않음
// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];
// }

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
