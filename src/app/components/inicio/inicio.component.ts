import { Component, OnInit } from '@angular/core';
import { ReqresService } from 'src/app/services/reqres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  users: any[] = [];

  config: any = {
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2
  };

  loading: boolean;

  constructor(
    private reqResService: ReqresService,
    private router: Router
  ) {
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsersData(page?: number) {
    this.loading = true;
    this.reqResService.getUsers(page)
      .subscribe((res: any) => {
        this.users = res.data;
        if (page) {
          this.config.page = res.page;
          this.config.per_page = res.per_page;
          this.config.total = res.total;
          this.config.total_pages = res.total_pages;
        }
        this.loading = false;
      }, (err) => {
        console.log(err);
        this.loading = false;
      });
  }

  getUsers() {
    this.getUsersData();
  }

  detalleUsuario(userId: number) {
    this.router.navigate(['usuario', userId]);
  }

  setPage(page: number) {
    this.getUsersData(page);
  }
}
