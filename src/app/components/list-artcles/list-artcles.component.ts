import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { ArticleModule } from 'src/app/modules/article/article.module';

@Component({
  selector: 'app-list-artcles',
  templateUrl: './list-artcles.component.html',
  styleUrls: ['./list-artcles.component.css']
})
export class ListArtclesComponent implements OnInit {

  articles: Array<ArticleModule>;
  allArticles: Array<ArticleModule>;

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.getAllArticles();
  }

  navigateTo(path) {
    this.router.navigate([path]);
  }


  getAllArticles() {
    this.articleService.getAll()
      .subscribe(data => {
        this.allArticles = data,
          this.articles = data,
          console.log(data)
      }, error => console.log(error));
  }
  search(title) {
    this.articles = this.allArticles.filter(item => (this.filterByTitle(item, title) || this.filterByDomaine(item, title)));
  }

  filterByTitle(item, title){
    return item.title.toLowerCase().includes(title.toLowerCase());
  }
  filterByDomaine(item, domaineName){
    return item.domaine.name.toLowerCase().includes(domaineName.toLowerCase());
  }

  show(article){
    this.navigateTo('articles/show/'+article.id);
  }

  edit(article){
      this.navigateTo('articles/edit/'+article.id);
  }

}
