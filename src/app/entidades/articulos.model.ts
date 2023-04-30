
export class Articulos  {
  private _id: number;
  private _image: string;
  private _titulo: string;
  private _precio: number;

  constructor(id: number, titulo:string, image: string, precio: number) {
      this._id = id;
      this._image = image;
      this._titulo = titulo;
      this._precio = precio;
  }

  public getId(): number{
    return this._id;
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

  public setIdArt(id: number){
    this._id = id;
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
