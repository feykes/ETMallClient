import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CostomToastrService, ToastrmessageType, ToastrPosition } from './services/ui/costom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETMallClient';
  constructor(private toastrService: CostomToastrService){
    toastrService.message("Hoşgeldin","Feyza",{
      messageType:ToastrmessageType.Success,
      position:ToastrPosition.TopRight
    });
  }
}