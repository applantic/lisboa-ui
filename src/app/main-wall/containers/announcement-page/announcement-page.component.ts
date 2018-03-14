import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MyAnnouncementService} from '../../services/my-announcement.service';
import {DeliveryEnum, MyAnnouncement} from '../../model/my-announcement';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OfferService} from './offer.service';

@Component({
  selector: 'pt-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrls: ['./announcement-page.component.scss']
})
export class AnnouncementPageComponent implements OnInit {
  public announcement: MyAnnouncement;
  public deliveryOptions = DeliveryEnum;

  public makeAnOfferFlag = false;
  public form: FormGroup;

  constructor(private route: ActivatedRoute,
              private myAnnouncementService: MyAnnouncementService,
              private offerService: OfferService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.makeAnOfferFlag = this.route.snapshot.paramMap.get('makeAnOffer') === 'true';

    const id = this.route.snapshot.paramMap.get('id');
    this.myAnnouncementService.getAnnouncementDetails(id)
      .do((announcement) => console.log('announcement: ', announcement))
      .subscribe((announcement) => this.announcement = announcement);

    this.initForm();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      quantity: ['', [Validators.required]],
      price: [''],
      zipCode: [''],
      city: [''],
    });
  }

  clickedMakeAnOffer() {
    this.makeAnOfferFlag = !this.makeAnOfferFlag;
  }

  submitOffer() {
    this.offerService.addOffer(this.form.value)
      .subscribe(offer => console.log(offer));
  }
}
