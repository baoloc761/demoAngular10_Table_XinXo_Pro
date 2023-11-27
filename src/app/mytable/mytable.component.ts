import { Component, Input } from "@angular/core";

@Component({
  selector: "my-table",
  templateUrl: "./mytable.component.html",
  styleUrls: ["./mytable.component.css"],
})
export class MyTableComponent {
  @Input() title = "";
  @Input() thList = [];
  @Input() body = [];
}
