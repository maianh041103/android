import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const result = [{
      "id": 10,
      "title": "Title10",
      "genre": "Genre10",
      "year": 2022
    }, {
      "id": 11,
      "title": "Title11",
      "genre": "Genre11",
      "year": 2023
    }]
    return JSON.stringify(result);
  }
}
