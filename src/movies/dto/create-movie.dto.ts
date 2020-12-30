import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional() // 아래 데이터는 필수가 아님
  @IsString({ each: true })
  readonly genres: string[];
}
