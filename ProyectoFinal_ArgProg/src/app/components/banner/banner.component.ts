import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/servicios/banner.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  banner: Banner[] = [];

  constructor(
    private bannerserv: BannerService,
    private tokenServ: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarBanner();

    if (this.tokenServ.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarBanner(): void {
    this.bannerserv.lista().subscribe((data) => {
      this.banner = data;
    });
  }
}
