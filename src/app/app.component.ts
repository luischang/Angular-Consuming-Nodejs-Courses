import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Desarrollo de Ambiente web";
  fullName: String = "Luis Chang";
  curso: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    //this.myMethod();
    const url = "https://dpanotas202201.luischang.repl.co/v1/student/getAll";
    this.http.get<any>(url).subscribe((data) => {
      this.curso = data;
    });
  }

  myMethod() {
    console.log("Este es mi nuevo método para " + this.fullName);
  }
}
