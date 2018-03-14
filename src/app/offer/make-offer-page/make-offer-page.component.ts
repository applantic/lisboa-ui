import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OfferService} from '../offer.service';
import {DeliveryEnum, MyAnnouncement} from '../../announcmenet/announcement.model';

@Component({
  selector: 'pt-make-offer-page',
  templateUrl: './make-offer-page.component.html',
  styleUrls: ['./make-offer-page.component.scss']
})
export class MakeOfferPageComponent implements OnInit {
  public announcement: MyAnnouncement;
  public deliveryOptions = DeliveryEnum;

  public makeAnOfferFlag = false;
  public form: FormGroup;

  constructor(private route: ActivatedRoute,
              private offerService: OfferService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.makeAnOfferFlag = this.route.snapshot.paramMap.get('makeAnOffer') === 'true';

    const id = this.route.snapshot.paramMap.get('id');
    this.offerService.getAnnouncementDetails(id)
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
    this.offerService.addOffer({...this.form.value, announcementId: this.announcement.id})
      .subscribe(offer => console.log(offer));
  }
}
