import { Component, OnInit, ViewChild } from '@angular/core';
import { DomainService } from '../services/domain.service';
import { DomainModel } from '../interfaces/domain-model';
import { AdHocListComponent } from '../ad-hoc-list/ad-hoc-list.component';
import { ActivatedRoute } from '@angular/router';
import { AdHocService } from '../services/ad-hoc.service';


@Component({
  selector: 'app-ad-hoc-main',
  templateUrl: './ad-hoc-main.component.html',
  styleUrls: ['./ad-hoc-main.component.scss']
})
export class AdHocMainComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  domains: DomainModel[] = [];

  private selectedDomain: DomainModel;

  public get SelectedDomain(): DomainModel {
    return this.selectedDomain;
  }

  public set SelectedDomain(value: DomainModel) {
    this.selectedDomain = value;
    this.adhocService.CurrentDomain = value;
  }

  currentDomain = 1;
  currentDocument = 0;
  showSideNav = true;

  @ViewChild(AdHocListComponent) adhocComponent: AdHocListComponent;

  constructor(private domainService: DomainService,
              private adhocService: AdHocService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.domainService.getDomains().subscribe((data) => {
      this.domains = data;
      this.SelectedDomain = data[0];
    });

    this.route.paramMap.subscribe((params => {
      this.currentDomain = +params.get('domainid') || 1;
      this.currentDocument = +params.get('documentid');
      this.onRouteChange();
    }));
  }

  onRouteChange() {
    this.SelectedDomain = this.domains.find(x => x.domainId === this.currentDomain);
    this.loadAdHocList();
  }

  loadAdHocList(): void {
    this.adhocComponent.domain = this.domains.find(x => x.domainId === this.currentDomain);
    this.adhocComponent.loadAdHocDocuments(this.currentDomain);
  }

  isScreenSmall(): void {
    this.showSideNav = this.currentDocument === 0; // this.mobileQuery.matches;
  }
}
