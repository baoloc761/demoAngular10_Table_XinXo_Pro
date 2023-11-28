import { Component, Inject, OnInit, forwardRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'app/housing.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  housingLocation: any = {};
  id: number = 0;

  constructor(
    @Inject(forwardRef(() => HousingService)) private housingService: HousingService, @Inject(forwardRef(() => ActivatedRoute)) private _Activatedroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = +(this._Activatedroute.snapshot.paramMap.get('id') || '0');
    this.housingLocation = this.housingService.getHousingLocationById(this.id);
  }
}
