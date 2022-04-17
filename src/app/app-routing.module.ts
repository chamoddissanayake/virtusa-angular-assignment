import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'devices',
    loadChildren: () => import('./pages/devices/devices.module').then(x => x.DevicesModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then(x => x.OrdersModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then(x => x.ServicesModule)
  },
  {
    path: 'returns',
    loadChildren: () => import('./pages/returns/returns.module').then(x => x.ReturnsModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then(x => x.ContactsModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then(x => x.MessagesModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(x => x.ProfileModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./pages/email/email.module').then(x => x.EmailModule)
  },
  {
    path: '**',
    redirectTo: '/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
