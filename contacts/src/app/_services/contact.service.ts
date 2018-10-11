import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Contact } from '../_models/contact';
import { Contacts } from '../../example-data';

@Injectable()
export class ContactService {

    contacts: Contact[];

    constructor() {
        this.contacts = Contacts;
    }

    getAllContacts(): Observable<Contact[]> {
        return of(this.contacts).pipe(delay(1000));
    }

    deleteContact(_contact: Contact): Observable<Contact[]> {
        this.contacts = this.contacts.filter(contact => contact !== _contact);
        return of(this.contacts).pipe(delay(1000));
    }

    addContact(_contact: Contact): Observable<Contact> {
        this.contacts.push(_contact);
        return of(_contact).pipe(delay(1000));
    }

}