import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
//import { VendorComponent } from './vendor/vendor/vendor.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { BoolDisplayPipe } from './pipes/bool-display.pipe';
import { SortUserPipe } from './pipes/sort-user.pipe';
import { SortProductPipe } from './pipes/sort-product.pipe';
import { SortPurchaserequestPipe } from './pipes/sort-purchaserequest.pipe';
import { SortPrliPipe } from './pipes/sort-prli.pipe';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

import { PurchaserequestListComponent } from './purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestDetailComponent } from './purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestCreateComponent } from './purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaserequestEditComponent } from './purchaserequest/purchaserequest-edit/purchaserequest-edit.component';

import { PrliListComponent } from './prli/prli-list/prli-list.component';
import { PrliDetailComponent } from './prli/prli-detail/prli-detail.component';
import { PrliCreateComponent } from './prli/prli-create/prli-create.component';
import { PrliEditComponent } from './prli/prli-edit/prli-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    //VendorComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    BoolDisplayPipe,
    SortUserPipe,
    SortProductPipe,
    SortPurchaserequestPipe,
    SortPrliPipe,
    ProductListComponent,
    ProductEditComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    
    PurchaserequestListComponent,
    PurchaserequestDetailComponent,
    PurchaserequestCreateComponent,
    PurchaserequestEditComponent,
    PrliListComponent,
    PrliDetailComponent,
    PrliCreateComponent,
    PrliEditComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
