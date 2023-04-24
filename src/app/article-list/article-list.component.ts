import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {

/* @Input() title!: string; */


  articleList: Article[] = [
    new Article(1, "Article 1"),
    new Article(2, "Article 2"),
    new Article(3, "Article 3"),
  ]

}
