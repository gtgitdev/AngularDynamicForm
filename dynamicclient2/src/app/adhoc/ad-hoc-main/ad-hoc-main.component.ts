import { Component, OnInit } from '@angular/core';
import { DomainService } from '../services/domain.service';
import { DomainModel } from '../interfaces/domain-model';


@Component({
  selector: 'app-ad-hoc-main',
  templateUrl: './ad-hoc-main.component.html',
  styleUrls: ['./ad-hoc-main.component.scss']
})
export class AdHocMainComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  domains: DomainModel[];
  selectedDomain: DomainModel;

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.domainService.getDomains().subscribe((data) => {
      this.domains = data;
      this.selectedDomain = data[0];
    });
  }

  loadAdHocList(domain: DomainModel): void {
    this.selectedDomain = domain;
  }
  
  isScreenSmall(): boolean {
    return false; // this.mobileQuery.matches;
  }
}
