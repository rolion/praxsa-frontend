import { Route } from "@angular/router";
import { Page404Component } from "../authentication/page404/page404.component";
import { VehiculosComponent } from "./vehiculos/vehiculos.component";
import { MainComponent } from "./main/main.component";

export const INVENTARIO_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'vehiculo',
    component: VehiculosComponent,
  },
  { path: "**", component: Page404Component },
];

