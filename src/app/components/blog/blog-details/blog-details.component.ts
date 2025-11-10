import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { blogData } from '../../../shared/data/data/blog/blog';

@Component({
  selector: 'app-blog-details',
  standalone:true,
   imports:[FormsModule,CommonModule],
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})

export class BlogDetailsComponent {
  
  public blogData = blogData;

}
