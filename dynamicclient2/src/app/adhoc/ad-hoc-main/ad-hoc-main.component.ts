import { Component, OnInit, ViewChild } from '@angular/core';
import { DomainService } from '../services/domain.service';
import { DomainModel } from '../interfaces/domain-model';
import { AdHocListComponent } from '../ad-hoc-list/ad-hoc-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { routerNgProbeToken } from '@angular/router/src/router_module';


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

  @ViewChild(AdHocListComponent) adhocComponent: AdHocListComponent;

  constructor(private domainService: DomainService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params => {
      this.currentDomain = +params.get('id');
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

  isScreenSmall(): boolean {
    return false; // this.mobileQuery.matches;
  }
}
