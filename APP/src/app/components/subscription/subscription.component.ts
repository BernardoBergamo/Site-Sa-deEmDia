import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  public subscriptionDone: boolean = false;

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public async Suscribe() {
    this.subscriptionDone = true;
  }
}
