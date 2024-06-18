import { Route } from "@angular/router";
import { Page404Component } from "../authentication/page404/page404.component";
import { MarcaComponent } from "./marca/marca.component";
import { ItemComponent } from "./item/item.component";
import { ModeloComponent } from "./modelo/modelo.component";

export const INVENTARIO_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MarcaComponent,
  },
  {
    path: 'marca',
    component: MarcaComponent,
  },
  {
    path: 'item',
    component: ItemComponent,
  },
  {
    path: 'modelo',
    component: ModeloComponent,
  },
  { path: "**", component: Page404Component },
];

