import { IArticulos } from "../articulo/articulo.interface";

export class Articulos {
  private _idArt: number;
  private _image: string;
  private _titulo: string;
  private _precio: number;

  constructor(idArt: number, titulo:string, image: string, precio: number) {
      this._idArt = idArt;
      this._image = image;
      this._titulo = titulo;
      this._precio = precio;

  }

  public getIdArt(): number{
    return this._idArt;
  }

  public getImage(): string{
    return this._image;
  }
  public getTitulo(): string{
    return this._titulo;
  }

  public getPrecio(): number{
    return this._precio;
  }

  public setIdArt(idArt: number){
    this._idArt = idArt;
  }

  public setImage(image: string){
    this._image = image;
  }
  public setTitulo(titulo: string){
    this._titulo = titulo;
  }

  public setPrecio(precio: number){
    this._precio = precio;
  }


}
