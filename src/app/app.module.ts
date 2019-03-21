import { BrowserModule } from '@angular/platform-browser';//浏览器应用模块
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CMenuComponent } from './c-menu/c-menu.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { ArticleComponent } from './article/article.component';
import { TesthttpComponent } from './testhttp/testhttp.component';

import { MessageService }       from './message.service';
import { HttpErrorHandler }     from './http-error-handler.service';

import { MessagesComponent } from './messages/messages.component';
@NgModule({
  declarations: [
    AppComponent,//根组件，通常作为顶层组件
    CMenuComponent,
    UserItemComponent,
    UserListComponent,
    ArticleComponent,
    TesthttpComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpErrorHandler,MessageService,],
  bootstrap: [AppComponent]//设定哪个组件为顶层组件
})
export class AppModule { }
