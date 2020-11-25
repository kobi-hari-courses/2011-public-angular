import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitlePresenterComponent } from './title-presenter/title-presenter.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TitlePresenterComponent], 
    exports: [TitlePresenterComponent]
})
export class SharedModule {}