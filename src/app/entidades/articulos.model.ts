export class Articulos{
  private _idArt: number;
  private _image: string;


  constructor(idArt: number, image: string) {
      this._idArt = idArt;
      this._image = image;

  }

  get idArt(): number{
    return this._idArt;
  }

  get imagen(): string{
    return this._image;
  }

  set idArt(idArt: number){
    this._idArt = idArt;
  }

  set image(image: string){
    this._image = image;
  }


}
