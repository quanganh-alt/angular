import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: number;
  num2: number;
  operator: string = "+";
  result: number;
  constructor() { }

  ngOnInit() {
  }
  updateNum1(num1) {
    this.num1 = Number(num1);
  }
  updateNum2(num2) {
    this.num2 = Number(num2);
  }
  updateOperator(operator){
    this.operator = operator;
  }
  calculate() {
    console.log(this.num1 + " " + this.operator + " " + this.num2)
    switch (this.operator) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num2 == 0 ? NaN :this.num1 / this.num2;
        break;
    }
  }

}
