import { Routes } from '@angular/router';
import { WrapperComponent } from '../layout/wrapper/wrapper.component';
import { HomeComponent } from '../pages/home/home.component';
import { ProjectComponent } from '../pages/project/project.component';
import { TasksComponent } from '../pages/tasks/tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'project/:id',
        component: ProjectComponent,
        children: [
          {
            path: 'tasks',
            component: TasksComponent,
          },
        ],
      },
    ],
  },
];
