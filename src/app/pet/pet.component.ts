import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  name: string = "tien truong";
  url: string = "../../assets/pet/images.jpeg";
  constructor() { }

  ngOnInit() {
  }

}
