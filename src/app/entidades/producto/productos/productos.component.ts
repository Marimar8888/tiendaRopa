import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  title = 'My Store';

  products = [
    {
        id:1,
        title: 'Camiseta',
        price: 30000,
        category: '...',
        description: 'Camiseta con el logo de la empresa, en algodón ...',
        image: 'https://via.placeholder.com/150'
    },
    {
        id:1,
        title: 'Llavero',
        price: 10000,
        category: '',
        description: 'Llavero del logo de la empresa ...',
        image: 'https://via.placeholder.com/150'
    },
    {
      id:1,
      title: 'Llavero',
      price: 10000,
      category: '',
      description: 'Llavero del logo de la empresa ...',
      image: 'https://via.placeholder.com/150'
    },
    {
      id:1,
      title: 'Llavero',
      price: 10000,
      category: '',
      description: 'Llavero del logo de la empresa ...',
      image: 'https://via.placeholder.com/150'
    },
    {
      id:1,
      title: 'Llavero',
      price: 10000,
      category: '',
      description: 'Llavero del logo de la empresa ...',
      image: 'https://via.placeholder.com/150'
    },
    {
      id:1,
      title: 'Llavero',
      price: 10000,
      category: '',
      description: 'Llavero del logo de la empresa ...',
      image: 'https://via.placeholder.com/150'
    },
    {
      id:1,
      title: 'Llavero',
      price: 10000,
      category: '',
      description: 'Llavero del logo de la empresa ...',
      image: 'https://via.placeholder.com/150'
    },
    {
      id:1,
      title: 'Llavero',
      price: 10000,
      category: '',
      description: 'Llavero del logo de la empresa ...',
      image: 'https://via.placeholder.com/150'
    }

    ];
}
