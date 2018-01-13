import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, Router, RouterLink } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatButtonToggleModule, 
     MatIconModule, MatStepperModule, MatGridListModule, MatInputModule, MatSelectModule, MatMenuModule, MatChipsModule, 
     MatCheckboxModule, 
     MatTableModule, MatPaginatorModule, MatPaginatorIntl,
     MatTooltipModule, MatDialogModule, 
     MatSnackBarModule } from '@angular/material';


import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonService } from './services/common.service';
import { HomeComponent } from './components/home-page/home/home.component';
import { ItemsComponent } from './components/items-page/items/items.component';
import { CartComponent } from './components/cart-page/cart/cart.component';
import { DataService } from './services/data.service';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'items/:gender/:type',
        component: ItemsComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ItemsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserAnimationsModule,
    MatButtonModule, MatButtonToggleModule, 
    MatIconModule, MatStepperModule, MatGridListModule, MatInputModule, MatSelectModule, MatMenuModule, MatChipsModule, 
    MatCheckboxModule, 
    MatTableModule, MatPaginatorModule, 
    MatTooltipModule, MatDialogModule, 
    MatSnackBarModule
  ],
  providers: [CommonService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
