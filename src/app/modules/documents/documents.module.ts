import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { DocumentsRoutingModule } from './documents-routing.module';
import { ShowComponent } from './show/show.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    ShowComponent,
    AddDocumentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    DocumentsRoutingModule,
    FormsModule,
  ],
  exports: [
    ShowComponent,
    AddDocumentComponent
  ]
})
export class DocumentsModule { }



