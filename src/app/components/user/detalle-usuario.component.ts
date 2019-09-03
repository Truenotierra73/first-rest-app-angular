import { Component, OnInit } from '@angular/core';
import { ReqresService } from 'src/app/services/reqres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit {
  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private reqResService: ReqresService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.reqResService.getUser(params['userId'])
        .subscribe((res: any) => this.user = res.data);
    });
  }

  ngOnInit() {
  }
}
