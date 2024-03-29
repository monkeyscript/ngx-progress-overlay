import { Component, OnInit } from '@angular/core';
import { NgxProgressOverlayService } from '../../projects/ngx-progress-overlay/src/lib/ngx-progress-overlay.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngx-progress-overlay-ws';

  code : {
    installation : string,
    usage : any
  } = {
    installation : '',
    usage : ''
  };

  constructor(
    private progressService : NgxProgressOverlayService
  ){}

  ngOnInit() {

    this.code = {
      installation : 'npm i ngx-progress-overlay',
      usage : {
        step1 : `import { NgxProgressOverlayModule } from 'ngx-progress-overlay';

@NgModule({
    imports: [
        NgxProgressOverlayModule
    ]
})
        
export class AppModule { }`,
        step2 : `import { NgxProgressOverlayService } from 'ngx-progress-overlay';

class AppComponent implements OnInit {
          
    constructor(private progressOverlay: NgxProgressOverlayService) { }
        
    ngOnInit() {
    
        // Shows progress bar (Params : overlay text, progress bar color, progress value color, overlay text color, donut width)
        this.progressOverlay.show('text','#c2185b','white','lightslategray',1,'rgba(0,0,0,0.8)');
    
        // Set progress value
        this.progressOverlay.setProgress(50);
    
        // Hides progress bar
        this.progressOverlay.hide();
    
    }
    
}`,
        step3 : `<ngx-progress-overlay></ngx-progress-overlay>`
      } 
  }

  }

  test(){
    this.progressService.show('Sit back & relax!','#c2185b','white','lightslategray',1,'rgba(0,0,0,0.8)');
    setTimeout(()=>{ this.progressService.setProgress(10) }, 1000);
    setTimeout(()=>{ this.progressService.setProgress(20) }, 2000);
    setTimeout(()=>{ this.progressService.setProgress(30) }, 3000);
    setTimeout(()=>{ this.progressService.setProgress(40) }, 4000);
    setTimeout(()=>{ this.progressService.setProgress(50) }, 5000);
    setTimeout(()=>{ this.progressService.setProgress(60) }, 6000);
    setTimeout(()=>{ this.progressService.setProgress(70) }, 7000);
    setTimeout(()=>{ this.progressService.setProgress(80) }, 8000);
    setTimeout(()=>{ this.progressService.setProgress(90) }, 9000);
    setTimeout(()=>{ this.progressService.setProgress(100) }, 10000);
    setTimeout(()=>{ this.progressService.hide() }, 11000);
  }
}
