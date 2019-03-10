import { Component, OnInit } from '@angular/core';
import { DomainManagerService } from '../services/domain.service';
import { DomainDocument } from '../models/domain-document';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/message.service';

const SmallWidthBreakpoint = 720;

@Component({
  selector: 'app-main-content',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {

  constructor(private domainManagerService: DomainManagerService,
              private router: Router,
              private messageService: MessageService) { }

  domains: DomainDocument[];
  selectedDomain: DomainDocument;

  ngOnInit() {
    this.domainManagerService.getDomains().subscribe((data) => {
      this.domains = data;
      this.selectedDomain = data[0];
    });

  }
  routToDocument(domain: DomainDocument) {
    this.messageService.serviceData = domain.domainName;
    this.router.navigate(['documents', domain.domainId]);
  }

  isScreenSmall(): boolean {
    return false; // this.mobileQuery.matches;
  }

  loadAdHocList(domain: DomainDocument): void {
    this.selectedDomain = domain;
  }
}
