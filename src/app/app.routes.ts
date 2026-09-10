import { Routes } from '@angular/router';
import { TodoApp } from './todo-app/todo-app';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: Home },
  { path: 'todo-app', component: TodoApp },
];
