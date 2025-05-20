import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [ReactiveFormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {


Form:FormGroup;

constructor(private fb: FormBuilder){
  this.Form = this.fb.group({
  num1 : this.fb.control(0),
  num2 : this.fb.control(0)
});
}



  resultado:number = 0
  Calcular(){
  let num1 =this.Form.get('num1')?.value;
  let num2 =this.Form.get('num2')?.value;
  this.resultado = num1 + num2;
}
}
