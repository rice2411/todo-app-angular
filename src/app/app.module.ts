import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FilterComponent } from './filter/filter.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { TodoComponent } from './todo/todo.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    TodoComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTypographyModule,
    NzGridModule,
    NzInputModule,
    NzSelectModule,
    NzRadioModule,
    NzIconModule,
    NzTagModule,
    NzDividerModule,
    NzCheckboxModule,
    NzButtonModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
