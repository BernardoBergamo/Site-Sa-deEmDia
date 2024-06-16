import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  public id: string = '';
  public article: Article = new Article();

  constructor(
    private articleService: ArticleService,
    private activeRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];

    if(this.id){
      this.GetArticle();
    }
  }

  public async GetArticle() {
    this.articleService.GetById(this.id).then(async (response: Article) => {
      if (response) {
        this.article = response;
      }
    }).catch((err) => { });
  }
}
