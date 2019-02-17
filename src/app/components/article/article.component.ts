import { Component, OnInit } from '@angular/core';
import { ArticleModule } from 'src/app/models/article/article.module';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  
  article = new ArticleModule(0,'','');
  articles : Array<ArticleModule>;
  allArticles: Array<ArticleModule>;
  uploader= new FileUploader({url:'',itemAlias:''});
  uri: string = 'http://localhost:8080/';
  constructor(private articleService: ArticleService,private router: Router) { }

  ngOnInit() {
  this.article.resume = 'hahahaha'
  this.article.title='hihihihi'
  this.getAllArticles();
  }
  create(title, resume){
    this.article = new ArticleModule(0,title, resume);
    this.articleService.create(this.article);
    console.log(this.articleService.getOne(1))
  }

  navigateTo(path){
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
  searchByTilte(title){
    this.articles = this.allArticles.filter(item => item.title.includes(title));
  } 
  setArtile(article) {
    this.article = article;
    console.log(this.article);
    this.uploader =new FileUploader({ url: this.uri + article.id+'/uploadFile', itemAlias: 'file' });
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };
  }

}
