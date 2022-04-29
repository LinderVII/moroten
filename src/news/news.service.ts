import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { News } from '../models/news.model';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News)
    private newsModel: typeof News,
  ) {}

  async create(title: string, content: string, author: string): Promise<News> {
    return this.newsModel.create({
      title,
      content,
      author,
    });
  }

  async findAll(): Promise<News[]> {
    return this.newsModel.findAll();
  }

  async findOne(id: number): Promise<News> {
    return this.newsModel.findOne({ where: { id } });
  }
}
