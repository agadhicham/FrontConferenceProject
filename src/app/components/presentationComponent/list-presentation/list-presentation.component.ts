import { Component, OnInit } from '@angular/core';
import { PresentationModule } from 'src/app/modules/presentation/presentation.module';
import { PresentationService } from 'src/app/services/presentation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-presentation',
  templateUrl: './list-presentation.component.html',
  styleUrls: ['./list-presentation.component.css']
})
export class ListPresentationComponent implements OnInit {
  presentation: Array<PresentationModule>;
  allPresentations: Array<PresentationModule>;
  constructor(private presentationServie: PresentationService, private router: Router) { }

  ngOnInit() {
    this.getAllPresentations();
  }
  getAllPresentations() {
    this.presentationServie.getAll()
      .subscribe(data => {
        this.allPresentations = data,
          this.presentation = data,
          console.log(data)
      }, error => console.log(error));
  }

}
