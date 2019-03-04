import { Component, OnInit } from '@angular/core';
import { DomainManagerService } from '../services/domain-manager.service';
import { DomainDocument } from '../models/domain-document';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private domainManagerService: DomainManagerService) { }

  domains: DomainDocument[];

  ngOnInit() {
    this.domainManagerService.getDomains().subscribe((data) => {
      this.domains = data;
    });

  }

}
