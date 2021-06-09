import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name : new FormControl(null, [Validators.minLength(3) , Validators.pattern('^[a-z]{3,10}$') , Validators.maxLength(10), Validators.required]),
    email : new FormControl(null, [Validators.email,Validators.required]),
    phone : new FormControl(null , [Validators.pattern('^0[(11)(12)(15)(10)][0-9]{9}$'), Validators.required]),
    message : new FormControl(null, [Validators.required])
  })

  submitContactForm(contactForm:any){
    console.log(contactForm)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
