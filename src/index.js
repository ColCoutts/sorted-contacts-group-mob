import contacts from '../data/contacts.js';
import makeContactRow from '../src/contacts-component.js';
import { loadContacts } from '../src/contacts-component.js';

// eslint-disable-next-line no-console

loadContacts(contacts);