import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {}
    showSpinner(spinnerNameType:SpinnerType){
      this.spinner.show(spinnerNameType);

    }

    hideSpinner(spinnerNameType:SpinnerType){
      this.spinner.hide(spinnerNameType);
    }
}


export enum SpinnerType{
  Pacman="s1",
  BallSpinClockwiseFadeRotating="s2",
  BallFusion="s3"
}
