import { Component, OnInit } from '@angular/core';
import { DomainManagerService } from '../services/domain-manager.service';
import { DomainDocument } from '../models/domain-document';

@Component({
  selector: 'app-main-content',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.scss']
})
export class DomainListComponent implements OnInit {

  constructor(private domainManagerService: DomainManagerService) { }

  domains: DomainDocument[];

  ngOnInit() {
    this.domainManagerService.getDomains().subscribe((data) => {
      this.domains = data;
    });

  }

}
