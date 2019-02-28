import { Component, OnInit } from '@angular/core';
import { ArticleModule } from 'src/app/modules/article/article.module';
import { FileUploader, Headers, FileUploaderOptions } from 'ng2-file-upload/ng2-file-upload';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { AccountService } from 'src/app/services/account.service';
import { DomaineService } from 'src/app/services/domaine.service';
import { DomaineModule } from 'src/app/modules/domaine/domaine.module';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article = new ArticleModule(0, '', '',new DomaineModule(0,''));
  articles: Array<ArticleModule>;
  domaines: Array<DomaineModule>;
  allArticles: Array<ArticleModule>;
  uploader = new FileUploader({ url: '', itemAlias: '' });
  uri: string = 'http://localhost:8080/';
  constructor(private articleService: ArticleService, private accountservice: AccountService, private domaineService: DomaineService, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params.id){
      this.articleService.getOne(params.id).subscribe(data => {
        this.article = data;
        this.setArtile();
      }, error => console.log(error));
    }
    });
    
    this.getAllArticles();
    this.getAllDomaines();
  }
  create() {
    if(this.article.id){
      this.uploader.uploadAll();
    }
    this.articleService.create(this.article).subscribe(data => {
        console.log(data)
    }, error => console.log(error));
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
  getAllDomaines() {
    this.domaineService.getAll()
      .subscribe(data => {
          this.domaines = data,
          console.log(data)
      }, error => console.log(error));
  }
  
  setArtile() {
    console.log(this.article);
    this.uploader = new FileUploader({ url: this.uri + this.article.id + '/uploadFile', itemAlias: 'file'});
    var uploaderOptions: FileUploaderOptions = {};
    uploaderOptions.headers = [{ name: 'authorization', value : this.accountservice.getToken() } ]
    this.uploader.setOptions(uploaderOptions);
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };
  }

}
