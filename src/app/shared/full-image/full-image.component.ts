import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.scss']
})
export class FullImageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public image: string) {
  }

  ngOnInit() {
  }

}
