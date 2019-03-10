import { Component, OnInit, Input } from '@angular/core';
import { AdHocDocumentService } from '../ad-hoc-document.service';
import { Adhocdocument } from '../interfaces/adhocdocument';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/core/message.service';
import { DomainManagerService } from 'src/app/domains/services/domain.service';
import { filter, first } from 'rxjs/operators';

@Component({
  selector: 'app-ad-hoc-document-list',
  templateUrl: './ad-hoc-document-list.component.html',
  styleUrls: ['./ad-hoc-document-list.component.scss']
})
export class AdHocDocumentListComponent implements OnInit {

  domainName: string;

  documents: Adhocdocument[];

  constructor(private adHocService: AdHocDocumentService,
              private route: ActivatedRoute,
              private messageService: MessageService,
              private domainService: DomainManagerService) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params) => {
      const id = +params.get('domainId');

      this.setDomainName(id);

      this.adHocService.getDocuments(+id).subscribe((data) => {
        this.documents = data;
      });
    });
  }

  private setDomainName(id: number): void {
    if (this.messageService.serviceData) {
      this.domainName = this.messageService.serviceData;
    } else {
      this.domainService.getDomainById(id).subscribe((data) => {
        this.domainName = data.domainName;
        });
      }
    }
}


