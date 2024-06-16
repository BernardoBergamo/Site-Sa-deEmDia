import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.articleService.GetAll().then(async (response: Article[]) => {
      if (response && response.length > 0) {
        this.articles = response;
      }
    }).catch((err) => {

    });
  }
}
