export class Carousel {
  private _id: number;
  private _image: string;
  private _titulo: string;

  constructor(id: number, image: string, titulo: string) {
      this._id = id;
      this._image = image;
      this._titulo = titulo
  }
  get id(): number {
      return this._id;
  }

  get image(): string {
      return this._image;
  }

  get titulo(): string{
      return this._titulo;
  }

  set id(id: number) {
      this._id = id;
  }

  set image(image: string) {
      this._image = image;
  }

  set titulo(titulo: string){
      this._titulo = titulo;
  }

}
