import { Component, OnInit, Input } from '@angular/core';
import { DomainDocument } from '../models/domain-document';


@Component({
  selector: 'app-domain-detail',
  templateUrl: './domain-detail.component.html',
  styleUrls: ['./domain-detail.component.scss']
})
export class DomainDetailComponent implements OnInit {

  @Input() domain: DomainDocument;

  constructor() { }

  ngOnInit() {
    console.log(this.domain);
  }

}
