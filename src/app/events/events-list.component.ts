import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { EventService } from "./shared/event.service";

@Component({
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr/>
            <div class = "row">
                <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
              </div>
            </div>
        </div>
    `
})
export class EventsListComponent implements OnInit {
  events: any[] = []; 

  constructor (private eventsService: EventService, private toastr:ToastrService) {
    
  }

  ngOnInit(){
    this.events = this.eventsService.getEvents();
  }

  handleThumbnailClick(eventName:string){
    this.toastr.success(eventName)
  }

  
}