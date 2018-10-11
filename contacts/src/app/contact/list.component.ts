import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ContactService } from '../_services/contact.service';
import { Contact } from '../_models/contact';

@Component({
    selector: 'app-list-contact',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListContactComponent implements OnInit {

    contacts: Contact[];

    constructor(private router: Router, private contactService: ContactService) { }

    ngOnInit() {
        this.contactService.getAllContacts()
            .subscribe(contacts => this.contacts = contacts);
    }

    deleteContact(_contact: Contact) {
        this.contactService.deleteContact(_contact)
            .subscribe(contacts => this.contacts = contacts);
    }

    addContact(): void {
        this.router.navigate(['add']);
    };
}