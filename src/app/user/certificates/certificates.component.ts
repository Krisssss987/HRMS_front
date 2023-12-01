import { Component, ElementRef ,ViewChild} from '@angular/core';


@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {

  @ViewChild('content', {static: false}) el!: ElementRef;
  title = 'Angular CLI 11 & jsPDF';

}






