import { Controller, Get, Query } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private commitsService: CommitsService) {}
  @Get()
  async getCommits(
    @Query('repository') repository: string,
    @Query('branch') branch: string,
  ) {
    const response = await this.commitsService.getCommits(repository, branch);
    const parsedDatad = this.commitsService.parseCommitData(response);
    return parsedDatad;
  }
}
