import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public formLogin! : FormGroup;
  constructor(){}//(ormGroup: FormGroup, private formControl: FormControl) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl('' , [Validators.maxLength(10), Validators.minLength(4), Validators.required]),
      password: new FormControl ('', Validators.required),
      numberPhone: new FormControl ('', [Validators.pattern('/^[a-zA-Z\s]*$/'), Validators.required]),
    });
  }

  onSubmit() {
    this.formLogin.markAsDirty();
    this.formLogin.markAllAsTouched();
    this.markAsDirty();
    console.log("Submit")
    console.log("Form Group",this.formLogin)
    console.log(this.formLogin.get("name")?.value);
    console.log(this.formLogin.get("email")?.value);
    console.log(this.formLogin.get("password")?.value);
    console.log(this.formLogin.get("numberPhone")?.value);
    

    if(this.formLogin.invalid){
      return;
    }
    //enviar datos al servidor
  }

  markAsDirty(){
    this.formLogin.get('name')?.markAsDirty();
    this.formLogin.get('email')?.markAsDirty();
    this.formLogin.get('password')?.markAsDirty();
    this.formLogin.get('numberPhone')?.markAsDirty();
    
  }

}
