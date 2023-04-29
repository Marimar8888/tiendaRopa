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

  public getIdArt(): number{
    return this._idArt;
  }
  public getTitulo(): string{
    return this._titulo;
  }
  public getImagen(): string{
    return this._image;
  }
  public getPrecio(): number{
    return this._precio;
  }
  public getTallaXs(): boolean{
    return this._tallaXs;
  }
  public getTallaS(): boolean{
    return this._tallaS;
  }
  public getTallaM(): boolean{
    return this._tallaM;
  }
  public getTallaL(): boolean{
    return this._tallaL;
  }
  public getTallaXl(): boolean{
    return this._tallaXl;
  }
  public getTallaXxl(): boolean{
    return this._tallaXxl;
  }
  public setIdArt(idArt: number){
    this._idArt = idArt;
  }
  public setTitulo(titulo: string){
    this._titulo = titulo;
  }
  public setImage(image: string){
    this._image = image;
  }
  public setPrecio(precio: number){
    this._precio = precio;
  }
  public setTallaXs(tallaXs: boolean){
    this._tallaXs = tallaXs;
  }
  public setTallaS(tallaS: boolean){
    this._tallaS = tallaS;
  }
  public setTallaM(tallaM: boolean){
    this._tallaM = tallaM;
  }
  public setTallaL(tallaL: boolean){
    this._tallaL = tallaL;
  }
  public setTallaXl(tallaXl: boolean){
    this._tallaXl = tallaXl;
  }
  public setTallaXxl(tallaXxl: boolean){
    this._tallaXxl = tallaXxl;
  }

}
