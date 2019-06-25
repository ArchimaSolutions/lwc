import { LightningElement } from 'lwc';

import Id from '@salesforce/user/Id';
import Name from '@salesforce/user/Name';

export default class Screen1 extends LightningElement {
    userId = Id;
    userName = Name;
}