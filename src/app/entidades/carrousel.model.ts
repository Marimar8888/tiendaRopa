export class Carousel {
  private _id: number;
  private _image: string;

  constructor(id: number, image: string) {
      this._id = id;
      this._image = image;
  }
  get id(): number {
      return this._id;
  }

  get image(): string {
      return this._image;
  }

  set id(id: number) {
      this._id = id;
  }

  set image(image: string) {
      this._image = image;
  }



}
