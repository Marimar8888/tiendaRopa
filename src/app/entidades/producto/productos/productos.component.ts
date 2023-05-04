import { Component, Input, OnInit } from '@angular/core';
import { ArticuloTienda } from '../../articulo/model/articuloTienda.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{
  @Input() articulosList!: ArticuloTienda [];

  constructor(

  ){}

  ngOnInit(): void {

  }


  products = [
    {
        id:1,
        title: 'Abrigo',
        price: 30000,
        category: '...',
        description: 'Abrigo',
        image: 'https://via.placeholder.com/150'
    },
    {
        id:1,
        title: 'Chaqueta',
        price: 10000,
        category: '',
        description: 'Chaqueta',
        image: 'https://via.placeholder.com/150'
    },
    {
      id:1,
      title: 'Pantalones',
      price: 10000,
      category: '',
      description: 'Pantalones',
      image: 'https://via.placeholder.com/150'
    },
    {
      id:1,
      title: 'Sport',
      price: 10000,
      category: '',
      description: 'Sport del logo de la empresa ...',
      image: 'https://via.placeholder.com/150'
    },
    {
      id:1,
      title: 'Corbatas',
      price: 10000,
      category: '',
      description: 'Corbatas',
      image: 'https://via.placeholder.com/150'
    },
    {
      id:1,
      title: 'Abrigo',
      price: 30000,
      category: '...',
      description: 'Abrigo',
      image: 'https://via.placeholder.com/150'
  },
  {
      id:1,
      title: 'Chaqueta',
      price: 10000,
      category: '',
      description: 'Chaqueta',
      image: 'https://via.placeholder.com/150'
  },
  {
    id:1,
    title: 'Pantalones',
    price: 10000,
    category: '',
    description: 'Pantalones',
    image: 'https://via.placeholder.com/150'
  }


    ];
}
