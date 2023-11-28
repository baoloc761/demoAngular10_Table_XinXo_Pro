import { Component, Input } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "my-table",
  templateUrl: "./mytable.component.html",
  styles: ["./mytable.component.css"],
})
export class MyTableComponent {
  @Input() title = "Danh sach mat hang q4";
  @Input() thList = [
    { value: "San luong", css: "col-1" },
    { value: "Ten mat hang", css: "col-2" },
    { value: "Khau hao", css: "col-3" },
    { value: "Status", css: "col-4" },
    { value: "%", css: "col-5" },
  ];

  @Input() body = [
    {
      css: "tr-1",
      sort: 0,
      tdList: [
        { value: 125575000.899, css: "col-1", isAccounting: true },
        { value: "abc", css: "col-2" },
        { value: 0.1, css: "col-3" },
        { value: 1, css: "col-4 ch", type: "bool" },
        { value: 75, css: "col-5", isProgressBar: true },
      ],
    },
    {
      css: "tr-2",
      sort: 3,
      tdList: [
        { value: 75950.175, css: "col-1", isAccounting: true },
        { value: "xyz", css: "col-2" },
        { value: 0.17, css: "col-3" },
        { value: 0, css: "col-4 hh", type: "bool" },
        { value: 11, css: "col-5", isProgressBar: true },
      ],
    },
    {
      css: "tr-3",
      sort: 2,
      tdList: [
        { value: 215000.7, css: "col-1", isAccounting: true },
        { value: "hh", css: "col-2" },
        { value: 0.17, css: "col-3" },
        { value: 1, css: "col-4 ch", type: "bool" },
        { value: 92, css: "col-5", isProgressBar: true },
      ],
    },
  ];

  sortedBody = this.sortBy(this.body, "sort", "desc");

  sortBy(list: any[], prop: string, direction: string) {
    return _.sortBy(list, [prop], [direction]);
  }
}
