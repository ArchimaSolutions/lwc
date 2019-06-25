import { LightningElement, wire } from 'lwc';
import getUserInfo from '@salesforce/apex/UserDetails.getUserInfo';
import Id from '@salesforce/user/Id';

export default class Screen1 extends LightningElement {
    @wire(getUserInfo,{userId: Id})
    userData;

}