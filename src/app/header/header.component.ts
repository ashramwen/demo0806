import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser';

@Component({
  selector: '.header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle: string = 'The Will Will Web!';
  pageTitleLink: string = 'http://blog.miniasp.com/';
  // pageSubTitle = '記載著 <strong>Will</strong> 在網路世界的學習心得與技術分享';
  num = 1;

  @Input() pageSubTitle: string;

  constructor(private sanitizer: DomSanitizationService) {
    // this.pageSubTitle = sanitizer.bypassSecurityTrustHtml('記載著 <strong>Will</strong> 在網路世界的學習心得與技術分享');
  }

  ngOnInit() {
  }

  plus(event: MouseEvent, input: HTMLInputElement) {
    event.altKey && this.num++;
  }

}
