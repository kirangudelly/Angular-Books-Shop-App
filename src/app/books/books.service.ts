import { Injectable } from '@angular/core';

export class BooksService {

  constructor() { }

  getBooks() {
    return [
      { 
        name : 'Clean Code',
        author : 'Robert C Mortin',
        image :'https://m.media-amazon.com/images/I/81KpjloJJZL._AC_UL480_FMwebp_QL65_.jpg',
        price: 700
      },
      { 
        name:  'The Pragmatic Programmer',
        author: 'David Thomas', 
        image:  'https://m.media-amazon.com/images/I/51yaxPX4BFL._AC_UY327_FMwebp_QL65_.jpg',
        price: 800
      },
      {
        name: 'Artificial Intelligence: A Modern Approach, 4e',
        author: ' Russell/Norvig',
        image: 'https://m.media-amazon.com/images/I/61-6TTTBZeL._AC_UY327_FMwebp_QL65_.jpg',
        price: 799
      },
      {
        name: 'Computer Networking, 8e',
        author: 'Kurose',
        image: 'https://m.media-amazon.com/images/I/51vT3X2tdtL._AC_UY327_FMwebp_QL65_.jpg',
        price: 847
      }
    ];
  }
}
