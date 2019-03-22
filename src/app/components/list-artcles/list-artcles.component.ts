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

  articles: Array<ArticleModule> =[];
  allArticles: Array<ArticleModule>=[];
  currentUser: string = "";
  currentUserRole: string = "";

  constructor(private articleService: ArticleService, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    if (this.accountService.typeOfCurrentUser() == "ADMIN" || this.accountService.typeOfCurrentUser() == "AUTHOR" || this.accountService.typeOfCurrentUser() == "REVIEWER") {
      this.getAllArticles();
      this.currentUser = this.accountService.typeOfCurrentUser()
    }
    else {
      this.router.navigate(['/'])
    }
  }

  navigateTo(path) {
    this.router.navigate([path]);
  }


  getAllArticles() {
    this.articleService.getAll()
      .subscribe(data => {
        this.getImages(data)
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
  delete(article) {
    this.getAllArticles();
    this.articleService.remove(article.id).subscribe();
  }

  getImages(articlesData){
    articlesData.forEach(article=>{
      this.articleService.getImage(article.id).subscribe(data =>{
        article.image =data;
        console.log(data);
      } );
    })
    this.allArticles = articlesData;
    this.articles=articlesData;
  }
}
