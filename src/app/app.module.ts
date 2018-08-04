import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { GrowlModule } from 'primeng/growl';

import { StorageServiceModule } from 'ngx-webstorage-service';


import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        HttpModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        MessageModule,
        MessagesModule,
        GrowlModule,
        StorageServiceModule 
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
