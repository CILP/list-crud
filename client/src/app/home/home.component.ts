import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { List } from '../list/list.model';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lists: List[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.lists = this.route.snapshot.data['lists'];
  }

}
