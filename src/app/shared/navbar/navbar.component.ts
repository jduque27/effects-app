import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  goUser(id: string) {
    if (!id) {
      return;
    } else {
      this.router.navigate(['/user', id]);
    }
  }
}
