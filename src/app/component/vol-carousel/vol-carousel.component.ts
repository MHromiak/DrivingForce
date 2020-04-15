import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vol-carousel',
  templateUrl: './vol-carousel.component.html',
  styleUrls: ['./vol-carousel.component.css']
})
export class VolCarouselComponent implements OnInit {
  reportUp: boolean;

  private jobs: Observable<any>;

  constructor(private db: AngularFirestore) {
    this.reportUp = true;
  }


  
  
  cards = [
    {
      title: 'Food Delivery for COVID 19 relief',
      date: "4/20/2020",
      time: '11:00 AM - 6:00 PM',
      location: "Annie's Meal Mitchen, 1077 Spring Street, Atlanta, GA",
      description: 'We need volunteers to aid us in delivering food to families affected by COVID 19. A valid driver’s license is required, as is a personal vehicle. Deliveries are all drop offs and contact withfamilies will be limited. All gas will be covered so track your miles',
      img: '../../assets/meals.jpeg'
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
      title: 'Mask Sewing for Covid 19 Relif',
      date: "4/25/2020",
      time: '2:00 PM - 10:00 PM',
      location: "Stay at Home",
      description: 'We will be holding an online class for sewing Masks to send to hospitals and to people whocannot afford them. Sewing Machine is recommended, but not required. All masks that arecreated will be picked up the next day by our staff and distributed.',
      img: '../../assets/mask.jpg'
    },
    
  ];
  slides: any = [[]];

  // get all the jobs in the db as an observable
  getAllJobs() {
    // add where volunteers is not empty
    this.jobs = this.db.collection('/Jobs').valueChanges();
  }



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

  accept() {
    
  }

  report(title) {
    alert("Job '" + title + "' has been reported");
    
  }

  unassign(title) {
    alert("You have been unassigned from '" + title + "'");
  }

  showHideReport() {
    this.reportUp = !this.reportUp;
  }

}
