import { Component, Inject, forwardRef } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['./home.component.css'],
})

export class HomeComponent {
  housingLocationList: any[] = [];
  keyword = '';

  constructor(@Inject(forwardRef(() => HousingService)) private housingService: HousingService) {
    this.Search();
  }

  Search() {
    this.housingLocationList = this.housingService.getAllHousingLocations(this.keyword)
  }

}
