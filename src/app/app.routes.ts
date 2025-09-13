import { Routes } from '@angular/router';
import { WrapperComponent } from '../layout/wrapper/wrapper.component';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
