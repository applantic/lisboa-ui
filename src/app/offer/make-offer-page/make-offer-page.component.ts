import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OfferService} from './offer.service';
import {DeliveryEnum, MyAnnouncement} from '../../announcemenet/announcement.model';

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
  public isOfferSaved = false;

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
      quantity: [{
        value: '',
        disabled: this.isOfferSaved,
      }, [Validators.required]],
      price: [{
        value: '',
        disabled: this.isOfferSaved,
      }],
      zipCode: [{
        value: '',
        disabled: this.isOfferSaved,
      }],
      city: [{
        value: '',
        disabled: this.isOfferSaved,
      }],
    });
  }

  clickedMakeAnOffer() {
    this.makeAnOfferFlag = !this.makeAnOfferFlag;
  }

  submitOffer() {
    this.offerService.makeOffer({...this.form.value, announcementId: this.announcement.id})
      .subscribe(offer => this.isOfferSaved = true);
  }
}
