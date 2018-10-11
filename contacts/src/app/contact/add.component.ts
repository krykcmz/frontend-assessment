import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../_services/contact.service';
import { Contact } from '../_models/contact';

@Component({
    selector: 'app-add-contact',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddContactComponent implements OnInit {

    contact: Contact = new Contact();

    contactForm: FormGroup;
    submitted = false;

    constructor(private router: Router, private formBuilder: FormBuilder, private contactService: ContactService) { }

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required]
        });
    }

    get f() { return this.contactForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.contactForm.invalid) {
            return;
        }
        this.contact = this.contactForm.value
        this.contactService.addContact(this.contact)
            .subscribe(contact => {
                this.router.navigate(['list']);
          });
    }

    cancel() {
        this.router.navigate(['list']);
    }
}