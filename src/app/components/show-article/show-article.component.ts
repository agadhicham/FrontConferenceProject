import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { AccountService } from 'src/app/services/account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleModule } from 'src/app/modules/article/article.module';
import { DomaineModule } from 'src/app/modules/domaine/domaine.module';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {


  article=new ArticleModule(0,'','', new DomaineModule(0,''));

  constructor(private articleService: ArticleService, private accountservice: AccountService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleService.getOne(params.id).subscribe(data => {
        this.article = data;
      }, error => console.log(error));
    });
  }

  navigateTo(path) {
    this.router.navigate([path]);
  }

}
