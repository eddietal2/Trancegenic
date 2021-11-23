import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/landing/landing.module').then(m => m.LandingPageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../pages/products/products-routing.module').then(m => m.ProductsPageRoutingModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('../pages/blog/blog.module').then(m => m.BlogPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile-routing.module').then(m => m.ProfilePageRoutingModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../pages/cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
