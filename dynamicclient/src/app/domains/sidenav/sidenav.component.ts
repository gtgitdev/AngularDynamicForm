import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

const SmallWidthBreakpoint = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;
  @ViewChild('sidenav') sideNav;

  opened = true;

  private mobileQueryListener: () => void;

  isDarkTheme = false;
  direction = 'ltr';

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private router: Router) {
    this.mobileQuery = media.matchMedia(`(max-width: ${SmallWidthBreakpoint}px)`);
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sideNav.close();
      }
    });

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  isScreenSmall(): boolean {
    return this.mobileQuery.matches;
  }

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDirection(){
    this.direction = this.direction === 'ltr' ? 'rtl' : 'ltr';
  }
}
