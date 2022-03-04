import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';



const firebaseConfig = {
  apiKey: "AIzaSyCDg5soqQupBmSb0FcvoN0ejTt3Nc9I0WI",
  authDomain: "oshop-52887.firebaseapp.com",
  projectId: "oshop-52887",
  storageBucket: "oshop-52887.appspot.com",
  messagingSenderId: "402828395146",
  appId: "1:402828395146:web:5ed2ab1e2f0acf0b5c2373",
  measurementId: "G-QGQ018ZEML"
};

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      
      {path: 'login', component: LoginComponent},
      {path: 'check-out', component: CheckOutComponent, canActivate:[AuthGuard]},
      {path: 'order-success', component: OrderSuccessComponent, canActivate:[AuthGuard]},
      {path: 'my-orders', component: MyOrdersComponent, canActivate:[AuthGuard]},
      
      {path: 'admin/products', component: AdminProductsComponent, canActivate:[AuthGuard]},
      {path: 'admin/orders', component: AdminOrdersComponent, canActivate:[AuthGuard]},

    ])

  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
