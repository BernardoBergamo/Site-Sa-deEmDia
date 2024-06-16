import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  public index: number = 0;
  public length: number = 3;
  public articlesCount: number = 0;
  public articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.GetArticles();
  }

  public async GetArticles() {
    this.articleService.GetCount().then(async (count: number) => {
      if (count && count > 0) {
        this.articlesCount = count;

        this.articleService.GetAll(this.index, this.length).then(async (response: Article[]) => {
          if (response && response.length > 0) {
            this.articles = [...this.articles, ...response];
            this.index += this.length;
          }
        }).catch((err) => { });
      }
    }).catch((err) => { });
  }
}
