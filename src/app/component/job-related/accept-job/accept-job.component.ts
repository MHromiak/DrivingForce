import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accept-job',
  templateUrl: './accept-job.component.html',
  styleUrls: ['./accept-job.component.css']
})
export class AcceptJobComponent implements OnInit {
  reportUp: boolean;
  constructor(private router: Router) {
    this.reportUp = true;
  }

  cards = [
    {
      title: 'Social Distancing Enforcement',
      date: "4/5/2020",
      time: '6:00 AM - 6:00 PM',
      location: "Lenox Park",
      description: 'We need volunteers to help us enforce the social distance guidelines provided by thegovernment. We will ensure that people are maintaining the 2 meter distance required by theguidelines in order to promote safety in our society. Batons, Aviators and Whistles will beprovided to all volunteers.',
      img: '../../assets/park.jpg'
    },
    {
      title: 'Testing Assistance',
      date: "5/4/2020",
      time: '7:00 AM - 10:00 PM',
      location: "Georgia Tech Student Center",
      description: 'Drive through testing is available at the Georgia Tech campus and they are seeking volunteersthat are willing to help in moving materials and helping with traffic flow. Shifts are broken up into3 hour blocks. Volunteers that arrive at 7 are expected to help with setup and volunteers thatstay late will help take down and move the material after the day is done. Food will be providedfor all volunteers..',
      img: '../../assets/gt.jpeg'
    },
    {
      title: 'Yard Work for the Elderly',
      date: "5/2/2020",
      time: '8:00 AM - 2:00 PM',
      location: "First Baptist Church of Buckhead",
      description: 'Many elderly people are not able to tend to their lawn care needs during this time of crisis andwe are looking for volunteers to aid them. We will use lawnmowers and various other lawn caremachinery to cut grass, trim hedges, pull weeds, and various other activities. Food and Waterwill be provided, but it is recommended to bring your own water bottle for the work. We will meetearly in the Church parking lot and split into teams that will visit houses in the area.',
      img: '../../assets/church.jpeg'
    },
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
      img: '../../assets/cleanup.jpg'
    },
    {
      title: 'City Cleanup',
      date: "4/28/2020",
      time: '8:00 AM - 6:00 PM',
      location: "1401 Peachtree St NE​​Atlanta, GA 30309",
      description: 'Volunteers are needed to help an effort to clean up the litter around the areas of midtown! Wewill be based in a canopy in front of the address. Come by anytime and help us clean up thestreets of our beautiful city!',
      buttonText: 'I can help!',
      img: '../../assets/litter.jpg'
    },
    {
      title: 'Online Auction Fundraiser for COVID Relief',
      date: "4/24/2020",
      time: '10:00 AM - 6:00 PM',
      location: "Your Safe Space Storage Facility 1098 Rouge Street Atlanta GA",
      description: 'We need volunteers that will aid in the delivery of auctioned off materials to buyers! All proceedswill go towards COVID 19 relief. A vehicle and driver\'s license are required. All gas will becompensated so be sure to track your mileage!',
      buttonText: 'I can help!',
      img: '../../assets/bid.png'
    },
    {
      title: 'Mask Sewing for Covid 19 Relif',
      date: "4/25/2020",
      time: '2:00 PM - 10:00 PM',
      location: "Stay at Home",
      description: 'We will be holding an online class for sewing Masks to send to hospitals and to people whocannot afford them. Sewing Machine is recommended, but not required. All masks that arecreated will be picked up the next day by our staff and distributed.',
      img: '../../assets/mask.jpg'
    },
    { title: 'Help me, Georgia Tech won\'t let go',
      date: "Now",
      time: "always",
      location: "everywhere",
      description: "I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE I CAN'T GRADUATE",
      img: '../../assets/help.jpg'
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

  acceptJob() {
    alert("Job accepted! An e-mail will be sent to your account address to confirm");
    this.router.navigate(["/volunteer"]);
  }

  showHideReport() {
    this.reportUp = !this.reportUp;
  }

  report(title) {
    alert("Job '" + title + "' has been reported");
    
  }
}
