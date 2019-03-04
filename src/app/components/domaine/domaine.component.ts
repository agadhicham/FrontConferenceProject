import { Component, OnInit } from '@angular/core';
import { DomaineService } from 'src/app/services/domaine.service';
import { Router } from '@angular/router';
import { DomaineModule } from 'src/app/modules/domaine/domaine.module';

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.css']
})
export class DomaineComponent implements OnInit {

  domaine: any;
  domaines: Array<DomaineModule>;
  constructor(private adomaineService: DomaineService, private router: Router) { }

  ngOnInit() {
  }

}
