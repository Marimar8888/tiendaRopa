
export class ArticuloTienda  {

  private _id: number;
  private _image: string;
  private _titulo: string;
  private _precio: number;
  private _rebaja: number;


  constructor(id: number, titulo:string, image: string, precio: number, rebaja: number) {
      this._id = id;
      this._image = image;
      this._titulo = titulo;
      this._precio = precio;
      this._rebaja = rebaja;
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
  public getRebaja(): number{
    return this._rebaja;
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

  public setRebaja(rebaja: number){
    this._rebaja = rebaja;
  }


}
