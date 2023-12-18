import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IContent } from 'src/app/model/content';
import { IMovie } from 'src/app/model/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  contentType = '';
  content?: Partial<IMovie | any> ;
  video: IContent | undefined;
  isLoading = true;
  constructor(
    private moviesService: MoviesService){
      // this.contentType = this.router.url.split('/')[1];
    }
  ngOnInit(): void {
    this.getMovie('787699');

  }
    getMovie(id: string) {
      this.isLoading = true;
  
      this.moviesService.getMovie(id).pipe(take(1)).subscribe(
        movie => {
          this.content = movie;
           
          this.isLoading = false
        }
      );
    }
}
