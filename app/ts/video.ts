export class video{
  id:number;
  title: string;
  videoCode:string;
  dese:string;

  constructor(id:number, title:string, videoCode:string, dese:string){
    this.id = id;
    this.title = title;
    this.videoCode = videoCode;
    this.dese = dese;
  }
}
