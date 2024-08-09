import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { Cars, Customizations, Maintenance, Managements, Repairs } from '../../../helpers/data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-car-works',
  standalone: true,
  imports: [CommonModule, NgSelectModule, FormsModule, TranslateModule],
  templateUrl: './car-works.component.html',
  styleUrl: './car-works.component.scss'
})
export class CarWorksComponent {
  public cars: any[] = Cars;
  public maintenance: any[] = Maintenance;
  public maintenanceIds: string[] = [];
  public repairs: any[] = Repairs;
  public repairsIds: string[] = [];
  public managements: any[] = Managements;
  public managementsIds: string[] = [];
  public customizations: any[] = Customizations;
  public customizationsIds: string[] = [];

  public addedWorks: string[] = [];

  public setAddedWorks() {
    var _newWorks: string[] = [];
    const _maintenance = [...this.maintenance];
    const _repairs = [...this.repairs];
    const _managements = [...this.managements];
    const _customizations = [...this.customizations];
    var _maintenanceNames = this._getMaintenanceNames(_maintenance, this.maintenanceIds);
    var _repairsNames = this._getMaintenanceNames(_repairs, this.repairsIds);
    var _managementsNames = this._getMaintenanceNames(_managements, this.managementsIds);
    var _customizationsNames = this._getMaintenanceNames(_customizations, this.customizationsIds);
    this.addedWorks = [...new Set(_newWorks.concat(_maintenanceNames, _repairsNames, _managementsNames, _customizationsNames).sort((a, b) => a.localeCompare(b)))];
  }

  private _getMaintenanceNames(list: any[], ids: string[]): string[] {
    return list.filter(item => ids.includes(item.id)).map(item => item.name);
  }

  public addWorks() {
    if(this.maintenanceIds.length > 0 || this.repairsIds.length > 0 || this.managementsIds.length > 0 || this.customizationsIds.length > 0) {
      console.log(this.addedWorks);
    }
  }
}
