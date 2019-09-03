import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {
  mensajeForm: FormGroup;
  enviado = false;
  correcto = false;

  constructor(private formBuilder: FormBuilder) {
    this.mensajeForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    this.enviado = true;

    if (this.mensajeForm.invalid) {
      return;
    }

    this.correcto = true;
  }
}
