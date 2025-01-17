import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private index: number = 0;
  private length: number = 3;
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
