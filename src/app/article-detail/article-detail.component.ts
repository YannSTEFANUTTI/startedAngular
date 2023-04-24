import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {

  articleID!: number;
myArticle!: Article;
  
  articleList: Article[] = [
    new Article(1, "Article 1"),
    new Article(2, "Article 2"),
    new Article(3, "Article 3"),
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get("id")) {
        this.articleID = Number(params.get("id") as string);
        this.myArticle = this.articleList.find(article => article.id === this.articleID) as Article;
      }
    })
  }

}
