import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.css']
})
export class ImgSlideComponent implements OnInit {
  @ViewChild('tmpl',null) template: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
