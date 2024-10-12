import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  companyLogo=[
    "data:image/png;base64,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",
    "data:image/png;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAs-4OCh7qSe_gKUVxt3QFs9JS2h0VBs9qpg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYs8owJQokYqXTWRIL4QF7FaeEIgkF6nXGQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7RSkCR0dDTa2lQe0RbFSjcFH7E-zDUHFNA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwGYmjhovX0tjJeU6ssEfBPdQQvGuw1N64Q&s"
  ]

  temp = [
    { logo: 'fa-solid fa-people-group', description: 'MemberShip Organisation', content:'our embership management software provides' },
     { logo: 'fa-solid fa-buildings', description: 'Natinal Association', content:'our embership management software provides' },
      { logo: 'fa-solid fa-group-arrows-rotate', description: 'MemberShip Organisation', content:'our embership management software provides' },
];
  ngOnInit(): void {
  }

}
