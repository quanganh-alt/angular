import { Component, OnInit, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CpCardComponent } from '../cp-card/cp-card.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
@NgModule({
  imports:[
    CommonModule
  ],
  declarations:[
    ContentProjectionComponent,
    CpCardComponent
  ],
  exports: [ContentProjectionComponent]
})
export class ContentProjectionComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
