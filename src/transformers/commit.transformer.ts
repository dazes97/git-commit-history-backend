import { Exclude, Expose, Transform, Type } from 'class-transformer';
@Exclude()
export class CommitAuthor {
  @Transform((data: any) => data.login)
  login: string;

  @Transform((data: any) => data.id)
  id: number;
}
@Exclude()
export class Commit {
  @Transform((data: any) => data.author)
  @Type(() => CommitAuthor)
  author: CommitAuthor;

  @Transform((data: any) => data.committer)
  @Type(() => CommitAuthor)
  committer: CommitAuthor;

  @Transform((data: any) => data.message)
  message: string;

  @Transform((data: any) => data.url)
  url: string;
}
@Exclude()
export class CommitData {
  @Transform((data: any) => data.node_id)
  @Expose()
  nodeId: string;

  @Type(() => Commit)
  @Expose()
  commit: Commit;

  @Transform((data: any) => data.html_url)
  @Expose()
  url: string;
}
