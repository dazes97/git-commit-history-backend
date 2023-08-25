import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { ApiTags } from '@nestjs/swagger';
import { QueryCommitDto } from './dto/commits.dto';
import { TransformInterceptor } from 'src/interceptors';
@UseInterceptors(TransformInterceptor)
@Controller('commits')
export class CommitsController {
  constructor(private commitsService: CommitsService) {}
  @ApiTags('commits')
  @Get()
  async getCommits(@Query() queryCommit: QueryCommitDto) {
    const response = await this.commitsService.getCommits(queryCommit);
    return response;
  }
}
