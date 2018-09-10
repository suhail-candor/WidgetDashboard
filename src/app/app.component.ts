import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CompactType, GridsterConfig, GridsterItem, GridsterItemComponent, GridsterPush, GridType} from 'angular-gridster2';
import {Widget1Component} from './Widgets/widget1/widget1.component';
import {Widget2Component} from './Widgets/widget2/widget2.component';
import {Widget3Component} from './Widgets/widget3/widget3.component';
import {Widget4Component} from './Widgets/widget4/widget4.component';
import {Widget5Component} from './Widgets/widget5/widget5.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  itemToPush: GridsterItemComponent;

  component = [ Widget1Component, Widget2Component, Widget3Component, Widget4Component, Widget5Component]
  ngOnInit() {
    this.options = {
      gridType: GridType.VerticalFixed,
      compactType: CompactType.None,
      fixedColWidth: 250,
      fixedColHeight: 250,
      // setGridSize:  true,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      },
      margin: 10,
      minCols: 3,
      maxCols: 3,
      
      defaultItemCols: 5,
      maxItemCols: 3,
      minItemCols: 1,
    };
    console.log("component", this.component, typeof this.component)
    this.dashboard = [
      {cols: 1, rows: 1, y: 0, x: 0, initCallback: this.initItem.bind(this), label: this.component[0], hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 1, label: this.component[1], hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 2, label: this.component[2], hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 3, label: this.component[3], hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 4, label: this.component[4], hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 5},
      {cols: 1, rows: 1, y: 0, x: 6},
      {cols: 1, rows: 1, y: 0, x: 7},
      {cols: 1, rows: 1, y: 0, x: 8},
      {cols: 1, rows: 1, y: 0, x: 9},
      {cols: 1, rows: 1, y: 0, x: 10}
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }

  initItem(item: GridsterItem, itemComponent: GridsterItemComponent) {
    this.itemToPush = itemComponent;
  }

  pushItem() {
    const push = new GridsterPush(this.itemToPush); // init the service
    this.itemToPush.$item.rows += 4; // move/resize your item
    if (push.pushItems(push.fromNorth)) { // push items from a direction
      push.checkPushBack(); // check for items can restore to original position
      push.setPushedItems(); // save the items pushed
      this.itemToPush.setSize();
      this.itemToPush.checkItemChanges(this.itemToPush.$item, this.itemToPush.item);
    } else {
      this.itemToPush.$item.rows -= 4;
      push.restoreItems(); // restore to initial state the pushed items
    }
    push.destroy(); // destroy push instance
    // similar for GridsterPushResize and GridsterSwap
  }
}