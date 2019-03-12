import { Component, OnInit, ViewChild } from '@angular/core';
import { DomainService } from '../services/domain.service';
import { DomainModel } from '../interfaces/domain-model';
import { AdHocListComponent } from '../ad-hoc-list/ad-hoc-list.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ad-hoc-main',
  templateUrl: './ad-hoc-main.component.html',
  styleUrls: ['./ad-hoc-main.component.scss']
})
export class AdHocMainComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  domains: DomainModel[] = [];
  selectedDomain: DomainModel;

  currentDomain = 1;
  currentDocument = 0;
  showSideNav = true;

  @ViewChild(AdHocListComponent) adhocComponent: AdHocListComponent;

  constructor(private domainService: DomainService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params => {
      this.currentDomain = +params.get('domainid');
      this.currentDocument = +params.get('documentid');
      console.log('domain', this.currentDomain, 'document', this.currentDocument);
      this.loadAdHocList();
    }));

    this.domainService.getDomains().subscribe((data) => {
      this.domains = data;
      this.selectedDomain = data[0];
    });
  }

  loadAdHocList(): void {
    this.adhocComponent.domain = this.domains.find(x => x.id === this.currentDomain);
    this.adhocComponent.loadAdHocDocuments(this.currentDomain);
  }

  isScreenSmall(): void {
    this.showSideNav = this.currentDocument === 0 ; // this.mobileQuery.matches;
  }
}
