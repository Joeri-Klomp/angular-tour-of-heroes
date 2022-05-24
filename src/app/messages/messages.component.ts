import { Component, OnInit } from '@angular/core';
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {
    //messageService must be public because we will bind to it in the template
  }

  ngOnInit(): void {
  }

}
