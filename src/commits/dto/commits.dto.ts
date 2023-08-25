import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { Branches, Repositories } from 'src/utils';

export class QueryCommitDto {
  @ApiProperty({ enum: Repositories })
  @IsString()
  @IsEnum(Repositories)
  repository: string;
  @ApiProperty({ enum: Branches })
  @IsString()
  branch: string;
}
