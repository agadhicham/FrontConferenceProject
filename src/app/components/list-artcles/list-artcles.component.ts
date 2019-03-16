import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { ArticleModule } from 'src/app/modules/article/article.module';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-list-artcles',
  templateUrl: './list-artcles.component.html',
  styleUrls: ['./list-artcles.component.css']
})
export class ListArtclesComponent implements OnInit {

  articles: Array<ArticleModule>;
  allArticles: Array<ArticleModule>;
  currentUser: string;
  currentUserRole: string="";

  constructor(private articleService: ArticleService, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.getAllArticles();
    this.currentUser = this.accountService.typeOfCurrentUser()
  }

  navigateTo(path) {
    if (this.currentUser == "ADMIN") {
      this.router.navigate([path]);
    } else if (this.currentUser != "ADMIN") {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/']);
    }
  }


  getAllArticles() {
    this.articleService.getAll()
      .subscribe(data => {
        this.allArticles = data,
          this.articles = data
      }, error => console.log(error)); 
  }
  search(title) {
    this.articles = this.allArticles.filter(item => (this.filterByTitle(item, title) || this.filterByDomaine(item, title)));
  }

  filterByTitle(item, title) {
    return item.title.toLowerCase().includes(title.toLowerCase());
  }
  filterByDomaine(item, domaineName) {
    return item.domaine.name.toLowerCase().includes(domaineName.toLowerCase());
  }

  show(article) {
    this.navigateTo('articles/show/' + article.id);
  }

  edit(article) {
    this.navigateTo('articles/edit/' + article.id);
  }

}
