import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { PurchaserequestListComponent } from './purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestDetailComponent } from './purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestCreateComponent } from './purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaserequestEditComponent } from './purchaserequest/purchaserequest-edit/purchaserequest-edit.component';

import { PrliListComponent } from './prli/prli-list/prli-list.component';
import { PrliDetailComponent } from './prli/prli-detail/prli-detail.component';
import { PrliCreateComponent } from './prli/prli-create/prli-create.component';
import { PrliEditComponent } from './prli/prli-edit/prli-edit.component';

import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path : '', redirectTo: '/home', pathMatch: 'full'},

  { path: 'users/list', component: UserListComponent},
  { path: 'users/detail/:id', component: UserDetailComponent},
  { path: 'users/create', component: UserCreateComponent},
  { path: 'users/edit/:id', component: UserEditComponent},

  //{ path : '', redirectTo: '/vendors/list', pathMatch: 'full'},
  { path: 'vendors/list', component: VendorListComponent},
  { path: 'vendors/detail/:id', component: VendorDetailComponent},
  { path: 'vendors/create', component: VendorCreateComponent},
  { path: 'vendors/edit/:id', component: VendorEditComponent},

  { path: 'products/list', component: ProductListComponent},
  { path: 'products/detail/:id', component: ProductDetailComponent},
  { path: 'products/create', component: ProductCreateComponent},
  { path: 'products/edit/:id', component: ProductEditComponent},

  { path: 'purchaserequests/list', component: ProductListComponent},
  { path: 'purchaserequests/detail/:id', component: ProductDetailComponent},
  { path: 'purchaserequests/create', component: ProductCreateComponent},
  { path: 'purchaserequests/edit/:id', component: ProductEditComponent},

  { path: 'prli/list', component: PrliListComponent},
  { path: 'prli/detail/:id', component: PrliDetailComponent},
  { path: 'prli/create', component: PrliCreateComponent},
  { path: 'prli/edit/:id', component: PrliEditComponent},

  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
