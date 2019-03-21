import { Component, OnInit } from "@angular/core";
import { data1 } from "./datatype";
import { Observable } from "rxjs";
import { HttpserveService } from "../httpserve.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-testhttp",
  templateUrl: "./testhttp.component.html",
  styleUrls: ["./testhttp.component.scss"]
})
export class TesthttpComponent implements OnInit {
  courses$: Observable<any>;
  dataes: Array<data1> = [];
  newdata: data1;

  constructor(
    private testservice: HttpserveService,
    private http1: HttpClient
  ) {}

  ngOnInit() {}

  add1(name: string, time: string): void {
    this.newdata = undefined;
    name = name.trim();
    time = time.trim();
    if (!name) {
      return;
    }

    // The server will generate the id for this new hero
    const newdata: data1 = { name, time } as data1;
    this.testservice.adddata(newdata).subscribe(newdata1 => this.dataes.push(newdata1));
  }
}
