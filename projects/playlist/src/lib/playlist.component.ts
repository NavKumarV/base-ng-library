import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-playlist',
  templateUrl: 'playlist.component.html',
  styleUrls: ['playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  notificationData = {
    "identifier": "c2d72c04-3010-45d7-bc13-29a3105dca26",
    "data": {
      "actionData": {
        "actionType": "contentURL",
        "contentURL": "https://staging.ntp.net.in/resources/play/content/do_212669767503060992174",
        "description": "Notfication description",
        "openPlayer": true,
        "title": "InApp Notification 4",
        "appIcon": ""
      },
      type: 1
    },
    "id": "c2d72c04-3010-45d7-bc13-29a3105dca26",
    "category": "Notification",
    "priority": 1,
    "userId": "555caa55-8dc8-4d8f-a8c5-159ade057f90",
    "createdOn": 1605589382634,
    "status": "unread",
    "isRead": false
  }

  constructor() { }

  ngOnInit() {
  }

}
