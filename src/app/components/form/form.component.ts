import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registerForm: FormGroup;
  user = {
    secret: '',
    userData: {
      email: '',
      fullName: '',
      sex: '',
      username: '',
    },
    hobbies: []
  };
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(null, [
          Validators.required,
          Validators.email]),
        'fullName': new FormControl(null, Validators.required),
        'sex': new FormControl('Male'),
        'username': new FormControl(null, Validators.required),
      }),
      'secret': new FormControl('car'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    this.submitted = true;

    const userData = this.user.userData;
    const registerForm = this.registerForm.value;

    this.user.secret = registerForm.secret;
    this.user.hobbies = registerForm.hobbies;
    userData.email = registerForm.userData.email;
    userData.fullName = registerForm.userData.fullName;
    userData.sex = registerForm.userData.sex;
    userData.username = registerForm.userData.username;

    this.onReset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.registerForm.get('hobbies')).push(control);
  }

  getHobbies() {
    return (<FormArray>this.registerForm.get('hobbies')).controls;
  }

  onReset() {
    this.registerForm.reset();
    this.registerForm.patchValue({
      userData: {
        sex: 'Male'
      },
      secret: 'car'
    });
    const x = (this.registerForm.get('hobbies') as FormArray);
    x.controls = [];
  }

}
