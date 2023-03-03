export interface TProject {
  id: string;
  date: Date;
  tags: string[];
  description: string;
  title: string;
  body: string;
}

export interface TBlog extends TProject {
  linesCode: number;
}
