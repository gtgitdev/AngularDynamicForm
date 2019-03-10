import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DomainModel } from '../interfaces/domain-model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AdHocService } from '../services/ad-hoc.service';
import { AdhocDocumentModel } from '../interfaces/adhoc-document-model';

@Component({
  selector: 'app-ad-hoc-list',
  templateUrl: './ad-hoc-list.component.html',
  styleUrls: ['./ad-hoc-list.component.scss']
})
export class AdHocListComponent implements OnInit {

  @Input() domain: DomainModel;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['documentName', 'documentDescription'];
  dataSource = new MatTableDataSource<AdhocDocumentModel>();

  constructor(private adhocService: AdHocService) { }

  ngOnInit() {
    this.adhocService.getDocumentsByDomainId(this.domain.domainId).subscribe((data) => {
      this.dataSource.data = data;

      this.dataSource.paginator = this.paginator;
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
