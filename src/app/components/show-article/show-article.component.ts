import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { AccountService } from 'src/app/services/account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleModule } from 'src/app/modules/article/article.module';
import { DomaineModule } from 'src/app/modules/domaine/domaine.module';
import { ReviewService } from 'src/app/services/review.service';
import { ReviewModule } from 'src/app/modules/review/review.module';
import { UserModule } from 'src/app/modules/user/user.module';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {
  review =new ReviewModule(0,0,'',null,null);
  hovered = 0;
  readonly = false;

  isShowReviews = false;
  article = new ArticleModule(0, '', '', new DomaineModule(0, ''));
  reviews: Array<ReviewModule>;

  constructor(private articleService: ArticleService, private reviewService: ReviewService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleService.getOne(params.id).subscribe(data => {
        this.article = data;
      }, error => console.log(error));
      this.reviewService.getAll(params.id).subscribe(data => {
        this.reviews = data;
      }, error => console.log(error));
    });
  }

  navigateTo(path) {
    this.router.navigate([path]);
  }
  showReviews() {
    this.isShowReviews = true;
  }
  makeReview() {
    this.review.article = this.article;
    this.review.reviewer=new UserModule(0,'','','');
    this.reviewService.review(this.review).subscribe(data => {
      this.reviews.push(data);
      this.review =new ReviewModule(0,0,'',null,null);
    }, error => console.error(error)
    );
  }

}
