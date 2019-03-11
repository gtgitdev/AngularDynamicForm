import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DomainModel } from '../interfaces/domain-model';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { AdHocService } from '../services/ad-hoc.service';
import { AdhocDocumentModel } from '../interfaces/adhoc-document-model';
import { ActivatedRoute } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';

@Component({
  selector: 'app-ad-hoc-list',
  templateUrl: './ad-hoc-list.component.html',
  styleUrls: ['./ad-hoc-list.component.scss']
})
export class AdHocListComponent implements OnInit {

  @Input() domain: DomainModel;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private currentDomain = 0;

  displayedColumns: string[] = ['request', 'documentName', 'documentDescription'];
  dataSource = new MatTableDataSource<AdhocDocumentModel>();

  constructor(private adhocService: AdHocService,
              private route: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params) => {
      this.currentDomain = +params.get('id');
    });

    this.loadAdHocDocuments(this.currentDomain);
  }

  loadAdHocDocuments(id: number) {
    this.adhocService.getDocumentsByDomainId(id).subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });

  }

  request(element) {
    this.dialog.open(PageNotFoundComponent);
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
