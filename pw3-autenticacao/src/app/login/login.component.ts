import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Usuario:string='sa';
  Senha:string='123456';
  Form:FormGroup;

  constructor(private fb: FormBuilder) {
    this.Form = this.fb.group({
      Usuario : this.fb.control(''),
      Senha : this.fb.control('')
  });
}
click:boolean=false;
autenticado:boolean=false;
login(){
  let User=this.Form.get('Usuario')?.value;
  let Password=this.Form.get('Senha')?.value;
  if (User==this.Usuario && Password==this.Senha){
    this.autenticado=true;
  }else{
    this.click=true;
  }


}

}
