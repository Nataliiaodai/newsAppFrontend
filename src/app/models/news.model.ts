export class News {
  id?: number | string;
  title: string;
  content: string;

  constructor(title: string = '', content: string = '', id?: number | string) {
    this.title = title;
    this.content = content;
    this.id = id;
  }
}
