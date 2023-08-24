import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { Urls } from 'src/config';
import { Errors } from 'src/utils';
import { ICommit } from 'src/interfaces';

@Injectable()
export class CommitsService {
  constructor(
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}
  /**
   * Retrieves commits from a specific repository.
   * @param repository The name of the repository.
   * @returns A list of commits.
   * @throws {NotFoundException} If no repository is found
   * @throws {ConflictException} If no commits are found on a specified repository.
   * @throws {InternalServerErrorException} If an internal error occurs.
   */
  async getCommits(repository: string, branch: string): Promise<ICommit[]> {
    const baseUrl = this.configService.get('github.baseUrl');
    const token = this.configService.get('github.token');
    const finalUrl = `${repository}${Urls.COMMITS}?sha=${branch}`;
    const response = await firstValueFrom(
      this.httpService.get(finalUrl, {
        baseURL: baseUrl,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
    )
      .then(({ data }) => data)
      .catch((error: AxiosError) => {
        switch (error.response.status) {
          case 409:
            throw new ConflictException(Errors.REPOSITORY_EMPTY_COMMITS);
          case 404:
            throw new NotFoundException(Errors.REPOSITORY_NOT_FOUND);
          default:
            throw new InternalServerErrorException(Errors.GENERAL_ERROR);
        }
      });
    return response;
  }
  parseCommitData(commitData: ICommit[]) {
    return commitData.map((data) => {
      return {
        nodeId: data.node_id,
        commit: {
          author: data.commit.author,
          commiter: data.commit.committer,
          message: data.commit.message,
          url: data.html_url,
        },
      };
    });
  }
}
