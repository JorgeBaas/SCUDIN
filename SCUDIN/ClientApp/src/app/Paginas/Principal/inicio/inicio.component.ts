import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UsuarioState } from 'src/app/reducers/Usuarios';

@Component({
  selector: 'app-root',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  UsuarioLogueado : Observable<any>
  constructor(private store : Store<UsuarioState>) {
    this.UsuarioLogueado = store.select('usuarioLogueado')
   }

  ngOnInit(): void {
  }

}
