import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-carousel',
  templateUrl: './org-carousel.component.html',
  styleUrls: ['./org-carousel.component.css']
})
export class OrgCarouselComponent implements OnInit {
removeUp: boolean;

constructor() {
  this.removeUp = false;
}

  cards = [
    {
      title: 'Food Preparation for Covid 19 Relief',
      date: "4/19/2020",
      time: '2:00 PM - 10:00 PM',
      location: "Annie's Meal Mitchen, 1077 Spring Street, Atlanta, GA",
      description: 'We need volunteers to aid in preparing food for people affected by COVID 19. Masks and gloves will be provided to all volunteers. We will be making many meals that are able to stayfresh for a while and reheated. We will also be baking bread. Even if you have no cooking experience come down and lend us a hand!',
      img: '../../assets/kitchen.jpg'
    },
    {
      title: 'Storm Debris Cleanup',
      date: "4/16/2020",
      time: '8:00 AM - 8:00 PM',
      location: "Cartersville, GA",
      description: 'Various areas surrounding cartersville have been impacted by the recent storm that has rolled through our area and we need volunteers to help us clean up the damage. We will put togetherteams that will visit the surrounding areas in order to help clean up the damage. After signing upyou will be sent more details about the team you will be a part of and the area you will be helping in.',
      img: '../../assets/cleanup.jpeg'
    },
    {
      title: 'City Cleanup',
      date: "4/28/2020",
      time: '8:00 AM - 6:00 PM',
      location: "1401 Peachtree St NE​​Atlanta, GA 30309",
      description: 'Volunteers are needed to help an effort to clean up the litter around the areas of midtown! Wewill be based in a canopy in front of the address. Come by anytime and help us clean up thestreets of our beautiful city!',
      buttonText: 'I can help!',
      img: '../../assets/litter.jpeg'
    },
    {
      title: 'Testing Assistance',
      date: "5/4/2020",
      time: '7:00 AM - 10:00 PM',
      location: "Georgia Tech Student Center",
      description: 'Drive through testing is available at the Georgia Tech campus and they are seeking volunteersthat are willing to help in moving materials and helping with traffic flow. Shifts are broken up into3 hour blocks. Volunteers that arrive at 7 are expected to help with setup and volunteers thatstay late will help take down and move the material after the day is done. Food will be providedfor all volunteers..',
      img: '../../assets/gt.jpeg'
    }
  ];
  slides: any = [[]];

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }

  remove(title) {
    alert("Job '" + title + "' has been removed");
  }

  showHideRemove() {
    this.removeUp = !this.removeUp;
  }

}
