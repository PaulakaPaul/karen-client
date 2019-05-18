import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';
import { MapModule } from './map/map.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { LivestreamModule } from './livestream/livestream.module';
import { MaterialModule } from '../material/material.module';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    MapModule,
    LivestreamModule,
    SubmissionsModule,
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class ShellModule {
  icons: string[] = [
    'account_circle.svg',
    'format_align_right.svg'
  ]
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.icons.forEach(i =>
      matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl(`/assets/${i}`))
    );
  }
}
