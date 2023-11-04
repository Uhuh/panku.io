import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { ImageLinks } from './cat.interface';

@Injectable()
export class CatService {
  private readonly bucketUrl = 'https://my-cat-photo.s3.us-east-2.amazonaws.com/';
  private readonly http = inject(HttpClient);
  private readonly parser = new DOMParser();

  get cat() {
    return this.http.get(this.bucketUrl + '?list-type=2&prefix=cat/', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      responseType: 'text',
    }).pipe(
      map(d => this.handleXMLToLinks(this.parser.parseFromString(d, 'text/xml'))),
      catchError(() => of({
        count: 0,
        links: []
      }))
    );
  }

  get unagi() {
    return this.http.get(this.bucketUrl + '?list-type=2&prefix=unagi/', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      responseType: 'text',
    }).pipe(
      map(d => this.handleXMLToLinks(this.parser.parseFromString(d, 'text/xml'))),
      catchError(() => of({
        count: 0,
        links: []
      }))
    );
  }

  private handleXMLToLinks(data: Document): ImageLinks {
    const { children } = data;
    const contents = Array.from(children[0].children);
    console.log(contents)

    const count = contents.find(c => c.localName === 'KeyCount')?.textContent ?? '0';
    const images = contents.filter(c => c.localName === 'Contents');

    // Removes the first thing returned by S3 which is the buckets name.
    images.shift();

    return {
      links: images.map(i => this.bucketUrl + i.childNodes[0].textContent ?? ''),
      count: parseInt(count),
    };
  }
}
