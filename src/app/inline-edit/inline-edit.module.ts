import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

import { InlineEditComponent } from './component/inline-edit.component';
@NgModule({
    declarations: [
        InlineEditComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        InlineEditComponent
    ],
    providers: [

    ]
})
export class InlineEditModule { }