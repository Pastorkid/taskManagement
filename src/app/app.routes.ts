import { Routes } from '@angular/router';
import { TodoApp } from './todo-app/todo-app';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Products } from './products/products';
import { ProductDetails } from './product-details/product-details';
import { Dashboard } from './dashboard/dashboard';
import { DashboardHome } from './dashboard/dashboard-home/dashboard-home';
import { Profile } from './dashboard/profile/profile';
import { Settings } from './dashboard/settings/settings';
import { RxjsPromiseExamples } from './rxjs-promise-examples/rxjs-promise-examples';
import { Subject } from './subject/subject';
import { Signal } from './signal/signal';

export const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'products', component: Products },
  { path: 'product-details/:id', component: ProductDetails },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        redirectTo: 'dashboardhome',
        pathMatch: 'full',
      },
      {
        path: 'dashboardhome',
        component: DashboardHome,
      },
      {
        path: 'profile',
        component: Profile,
      },
      {
        path: 'settings',
        component: Settings,
      },
    ],
  },
  { path: 'rxjs-promise', component: RxjsPromiseExamples },
  { path: 'subject', component: Subject },
  { path: 'signal', component: Signal },
];
