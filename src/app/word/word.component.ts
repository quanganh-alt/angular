import { Component } from '@angular/core';

@Component({
    templateUrl: './word.component.html',
    selector:  'app-word',
    styleUrls: ['./word.component.css']
})

export class WordComponent {
    en: string = 'hello';
    vn: string = 'xin chao';
    imageUrl = "../../assets/RE1Mu3b.png";
    forgot = false;
    toggleForgot(){
        this.forgot = !this.forgot;
    }
}
