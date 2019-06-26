import { LightningElement, wire, track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
import getQuotes from '@salesforce/apex/demoTest.getQuotes';

import USER_ID from '@salesforce/user/Id';

import NAME_FIELD from '@salesforce/schema/User.Name';

const columns = [
    { label: 'Customer Name', fieldName: 'Customer_Name__c'},
    { label: 'Contact First Name', fieldName: 'TheFirst_Name__c'},
    { label: 'Contact Last Name', fieldName: 'TheLast_Name__c'},
    { label: 'Number of Employees', fieldName: 'Total_Number_of_Employees__c'}
];

export default class Screen1 extends NavigationMixin(LightningElement) {
    @track name;
    @track error;
    @track columns = columns;
    @track theQuotes;

    @wire(getQuotes) theQuotes;
    @wire(getRecord,{
        recordId: USER_ID,
        fields: [NAME_FIELD]
    }) wireuser({
        error,
        data
    }) {
        if(error) {
            this.error = error;
        } else if (data) {
            this.name = data.fields.Name.value;
        }
    }
    handleScreenNav() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                pageName: 'page2',
            },
        });    
    }
    handleRowClick(event) {
        const selectedRow = event.detail.selectedRows;
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                pageName: 'page2'
            },
            state: {
                recordId: selectedRow[0].Id
            }
        })
    }
}