import {Page} from 'ionic/ionic';
import {DataService} from '../service/data';

@Page({
  templateUrl: 'app/filter-schedules/filter-schedules.html'
})
export class FilterSchedules {
  constructor(dataService:DataService) {
    this.dataService = dataService;
  }

  onInit() {
    this.categories = this.dataService.getCategories();
    if (this.categories) {
      // On Init reset the filters back to the last thing the user had
      this.categories.map(category => {
        category.filterToApply = category.showFilter;
      });
    }
  }

  resetFilters() {
    this.categories.map(category => {
      category.filterToApply = true;
    });
  }

  applyFilters() {
    this.categories.map(category => {
      category.showFilter = category.filterToApply;
    });

    this.dataService.updateCategories(this.categories);
    this.close();
  }
}
