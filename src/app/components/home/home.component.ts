import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContentItem {
  image: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentItemIndex: number = 0; // Track the index of the current item
  contentItems: ContentItem[] = [
    { image: '/assets/images/background-header5.jpg', description: 'Description of property 1' },
    { image: '/assets/images/background-header3.jpg', description: 'Description of property 2' },
    // Add more items as needed
  ];

  get currentItem(): ContentItem {
    return this.contentItems[this.currentItemIndex]; // Get the current item based on its index
  }

  swapContent() {
    this.currentItemIndex = (this.currentItemIndex + 1) % this.contentItems.length; // Cycle through items
  }

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }