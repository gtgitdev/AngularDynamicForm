import { Component, OnInit } from '@angular/core';
import { DomainManagerService } from '../services/domain-manager.service';
import { DomainDocument } from '../models/domain-document';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/message.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.scss']
})
export class DomainListComponent implements OnInit {

  constructor(private domainManagerService: DomainManagerService, 
              private router: Router,
              private messageService: MessageService) { }

  domains: DomainDocument[];

  ngOnInit() {
    this.domainManagerService.getDomains().subscribe((data) => {
      this.domains = data;
    });

  }
  routToDocument(domain: DomainDocument) {
    this.messageService.serviceData = domain.domainName;
    this.router.navigate(['documents', domain.domainId]);
  }

}
