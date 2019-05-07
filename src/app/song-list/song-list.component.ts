import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Canzoni } from './song-list.module';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
   data: Object;
   loading: boolean;
   o :Observable<Object>;
   Mu : Observable<Canzoni[]>;
   MuData : Canzoni[];

   constructor(public http: HttpClient) {}
   makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get('https://my-json-server.typicode.com/malizia-g/hotel/songlist');
     this.o.subscribe(this.getData);
   }
   getData = (d : Object) =>
   {
     this.data = new Object(d);
     this.loading = false;
   }

makeTypedRequest() : void
 {
   //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
   this.Mu = this.http.get<Canzoni[]>('https://my-json-server.typicode.com/malizia-g/hotel/songlist');
   this.Mu.subscribe(data => {this.MuData = data; console.log(this.MuData)});
 }


ngOnInit(){
  this.makeTypedRequest();
  }
}
