import {
  Action,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface UsuarioState {
  UsuarioLogueado : boolean
}

export const inicialUsuarioState = {
 UsuarioLogueado : false
}


export function UsuarioLogueado(state : UsuarioState = inicialUsuarioState, action: Action){
  console.log(action)
}
