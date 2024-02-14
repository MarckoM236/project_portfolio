import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CurriculumService } from '../../services/curriculum.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/page/main/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  Subscription:Subscription;
  lang!:String;

  constructor(private _curriculum:CurriculumService, private translate:TranslateService, private language:LanguageService) {
    this.Subscription = this.language.data$.subscribe(lang => {
      this.lang = lang;
    });
  }

  public downloadPDF(): void {
    const DATA = document.getElementById('body-cv');
    const doc = new jsPDF('p','pt','letter');
    const options = {
      background: 'white',
      scale: 1.1
    };

    if (DATA !== null) {
      html2canvas(DATA, options).then((canvas) => {
        
        //generate image of content.
        const img = canvas.toDataURL('image/PNG');
  
        // Add image Canvas to PDF
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = doc.internal.pageSize.getHeight();
        doc.addImage(img, 'PNG',0, 0, pdfWidth, pdfHeight);
        return doc;
      }).then((docResult) => {
        docResult.save('MiCV.pdf');
      });

    } else {
        console.error('The item was not found.');
    }
    
  }

  downloadFile(){
   // const url = window.URL.createObjectURL(this._curriculum.getPdfFile());
   const url = this.lang == 'es' ? this._curriculum.getPdfFile().es :this._curriculum.getPdfFile().en;
    
    const a = document.createElement('a');
    a.href = url;

    a.download = 'MiCV.pdf';
    
    a.click();
    
    //window.URL.revokeObjectURL(url);
  }

}
