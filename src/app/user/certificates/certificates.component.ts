import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string; // Changed from 'name' to 'Employee Name'
  status: string; // Changed from 'status' to 'Status'
  startDate: string; // Changed from 'startDate' to 'Start Date'
  endDate: string; // Changed from 'endDate' to 'End Date'
  action: string; // No change for 'Action'


  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', status: 'Active', startDate: '01/10/2023', endDate: '01/11/2023', action: 'Edit' },
  { name: 'Helium', status: 'Inactive', startDate: '15/09/2023', endDate: '15/10/2023', action: 'Delete' },
  { name: 'Lithium', status: 'Active', startDate: '01/08/2023', endDate: '01/09/2023', action: 'Edit' },
  { name: 'Beryllium', status: 'Inactive', startDate: '10/07/2023', endDate: '10/08/2023', action: 'Delete' },
  { name: 'Boron', status: 'Active', startDate: '05/06/2023', endDate: '05/07/2023', action: 'Edit' },
  { name: 'Carbon', status: 'Active', startDate: '20/05/2023', endDate: '20/06/2023', action: 'Delete' },
  { name: 'Nitrogen', status: 'Inactive', startDate: '18/04/2023', endDate: '18/05/2023', action: 'Edit' },
  { name: 'Oxygen', status: 'Active', startDate: '12/03/2023', endDate: '12/04/2023', action: 'Delete' },
  { name: 'Fluorine', status: 'Active', startDate: '28/02/2023', endDate: '28/03/2023', action: 'Edit' },
  { name: 'Neon', status: 'Inactive', startDate: '15/02/2023', endDate: '15/03/2023', action: 'Delete' }
];


@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  displayedColumns: string[] = ['name', 'status', 'startDate', 'endDate', 'action'];
  dataSource = ELEMENT_DATA;


  // Function to handle the download of the ID Card
  downloadIDCard() {
    // Implement the logic to download the ID Card here
    // You can use a library like FileSaver.js or any method to trigger a file download.
    // For example:
    // const idCardUrl = 'URL_TO_ID_CARD';
    // window.open(idCardUrl, '_blank');
  }
  // Function to handle the download of the Offer Letter
  downloadOfferLetter() {
    // Implement the logic to download the Offer Letter here
  }

  // Function to handle the download of the Term Sheet
  downloadTermSheet() {
    // Implement the logic to download the Term Sheet here
  }

  // Function to handle the download of the Certification
  downloadCertification() {
    // Implement the logic to download the Certification here
  }

  // Function to handle the download of the Application Letter
  downloadApplicationLetter() {
    // Implement the logic to download the Application Letter here
  }

}
