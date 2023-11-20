import { Component, ElementRef ,ViewChild} from '@angular/core';
import { jsPDF } from "jspdf";


@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {

  @ViewChild('content', {static: false}) el!: ElementRef;
  title = 'Angular CLI 11 & jsPDF';

  makePDF(){

    let pdf = new jsPDF('p', 'pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
        pdf.save("demo.pdf");
      }
    })
    
  }

}






