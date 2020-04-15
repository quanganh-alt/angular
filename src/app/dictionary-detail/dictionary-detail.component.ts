import { Component, OnInit } from '@angular/core';
import { IWord, DictionaryService } from './../dictionary.service'
import { Routes, RouterModule, Router, ActivatedRoute,ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord;
  sub: Subscription;
  constructor(private activatedRoute: ActivatedRoute,
    private dictionaryService: DictionaryService) { }
  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get('key');
      const meaning = this.dictionaryService.search(key);
      this.word = { key: key, meaning: meaning };
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
