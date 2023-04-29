export class Articulo {
  private _idArt: number;
  private _titulo: string;
  private _image: string;
  private _precio: number;
  private _tallaXs: boolean;
  private _tallaS: boolean;
  private _tallaM: boolean;
  private _tallaL: boolean;
  private _tallaXl: boolean;
  private _tallaXxl: boolean;

  constructor(idArt: number, titulo: string, image: string, precio: number, tallaXs: boolean, tallaS: boolean, tallaM: boolean, tallaL: boolean, tallaXl: boolean, tallaXxl: boolean) {
      this._idArt = idArt;
      this._titulo = titulo;
      this._image = image;
      this._precio = precio;
      this._tallaXs = tallaXs;
      this._tallaS = tallaS;
      this._tallaM = tallaM;
      this._tallaL = tallaL;
      this._tallaXl = tallaXl;
      this._tallaXxl = tallaXxl;
  }

  get idArt(): number{
    return this._idArt;
  }
  get titulo(): string{
    return this._titulo;
  }
  get imagen(): string{
    return this._image;
  }
  get precio(): number{
    return this._precio;
  }
  get tallaXs(): boolean{
    return this._tallaXs;
  }
  get tallaS(): boolean{
    return this._tallaS;
  }
  get tallaM(): boolean{
    return this._tallaM;
  }
  get tallaL(): boolean{
    return this._tallaL;
  }
  get tallaXl(): boolean{
    return this._tallaXl;
  }
  get tallaXxl(): boolean{
    return this._tallaXxl;
  }
  set idArt(idArt: number){
    this._idArt = idArt;
  }
  set titulo(titulo: string){
    this._titulo = titulo;
  }
  set image(image: string){
    this._image = image;
  }
  set precio(precio: number){
    this._precio = precio;
  }
  set tallaXs(tallaXs: boolean){
    this._tallaXs = tallaXs;
  }
  set tallaS(tallaS: boolean){
    this._tallaS = tallaS;
  }
  set tallaM(tallaM: boolean){
    this._tallaM = tallaM;
  }
  set tallaL(tallaL: boolean){
    this._tallaL = tallaL;
  }
  set tallaXl(tallaXl: boolean){
    this._tallaXl = tallaXl;
  }
  set tallaXxl(tallaXxl: boolean){
    this._tallaXxl = tallaXxl;
  }

}
