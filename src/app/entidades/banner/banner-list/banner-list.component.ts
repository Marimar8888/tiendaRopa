import { Component, Input } from '@angular/core';
import { Banner } from '../model/banner.model';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.scss']
})
export class BannerListComponent  {

  @Input() imagenesBanner!: Banner[];



}
