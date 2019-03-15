import { Component, OnInit, Input } from '@angular/core';
import { DomainModel } from '../interfaces/domain-model';
import { AdhocDocumentModel } from '../interfaces/adhoc-document-model';
import { AdHocService } from '../services/ad-hoc.service';
import { DomainService } from '../services/domain.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adhoc-request',
  templateUrl: './adhoc-request.component.html',
  styleUrls: ['./adhoc-request.component.scss']
})
export class AdhocRequestComponent implements OnInit {

  private domain: DomainModel;
  private adHocDocument: AdhocDocumentModel;

  private currentDomain: number;
  private currentDocument: number;
  private breakpoint: number;

  constructor(private adhocService: AdHocService,
              private domainService: DomainService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params => {
      this.currentDomain = +params.get('domainid') || 1;
      this.currentDocument = +params.get('documentid');
      console.log(this.currentDocument, this.currentDomain);
      this.onRouteChange();
    }));

    this.adhocService.getDocumentById(this.currentDocument).subscribe((data) => {
      this.adHocDocument = data;
    });

  }

  onRouteChange() {
    if (this.adhocService.CurrentDomain) {
      this.domain = this.adhocService.CurrentDomain;
    } else {
      this.domainService.getDomainById(this.currentDomain).subscribe((data) => {
        this.domain = data;
      });
    }

  }

}
