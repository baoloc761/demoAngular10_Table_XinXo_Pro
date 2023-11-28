import { Component, Input, Inject, forwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { HousingLocation } from 'app/housinglocation';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styles: ['./housing-location.component.css'],
})

export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

  constructor( @Inject(forwardRef(() => Router)) private router: Router) {

  }

  goToLocation(loc: HousingLocation) {
    this.router.navigateByUrl(`/details/${loc.id}`);
  }
}
