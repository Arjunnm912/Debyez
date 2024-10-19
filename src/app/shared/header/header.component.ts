import { Component, ElementRef, HostListener, OnInit, ViewChild, asNativeElements } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navmenu')mobilenavbar :ElementRef | undefined;

  ngOnInit(): void {


  }


  showMobileSidemenu(){
    this.mobilenavbar?.nativeElement.classList.toggle("show-navbar")
  }
}
