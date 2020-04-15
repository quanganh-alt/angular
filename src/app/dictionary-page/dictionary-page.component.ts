import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IWord, DictionaryService } from './../dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  listWord: IWord[] = [];
  constructor(
    private dictionaryService: DictionaryService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.listWord = this.dictionaryService.getAll();
  }
}
