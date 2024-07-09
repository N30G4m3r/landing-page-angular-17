import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    console.log('A')
  }

  enviar(event: Event) {
    event.preventDefault();
    console.log('Enviado');
    console.log(event);
    console.log(this.contactForm.value);
  }

  hasErrors(field: string, typeError: string) {
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }

}
