import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OfferService} from './offer.service';
import {DELIVERY_CIRCLE_TITLE_CONFIG, DeliveryEnum} from '../../dictionary/delivery.model';
import {Offer, PublicAnnouncementDetail} from './offer.model';
import {CircleIconTitleItem} from '../../shared/components/circle-icon-title/circle-icon-title.component';

@Component({
  selector: 'pt-make-offer-page',
  templateUrl: './make-offer-page.component.html',
  styleUrls: ['./make-offer-page.component.scss']
})
export class MakeOfferPageComponent implements OnInit {
  public announcement: PublicAnnouncementDetail;

  public deliveryOptions = DeliveryEnum;

  public circleShapeTitleConfig: CircleIconTitleItem[] = DELIVERY_CIRCLE_TITLE_CONFIG;

  public makeAnOfferFlag = false;
  public form: FormGroup;
  public offerNotEditable = false;

  constructor(private route: ActivatedRoute,
              private offerService: OfferService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.makeAnOfferFlag = this.route.snapshot.paramMap.get('makeAnOffer') === 'true';

    const id = this.route.snapshot.paramMap.get('id');
    this.offerService.getAnnouncementDetails(id)
      .do(announcement => this.announcement = announcement)
      .switchMap(announcement => this.offerService.findMyOffer(announcement.id))
      .subscribe(offer => {
        if (offer != null) {
          this.offerNotEditable = true;
        }
        this.initForm(offer);
      });
  }

  private initForm(offer: Offer) {
    this.form = this.formBuilder.group({
      quantity: [offer != null ? offer.quantity : '', [Validators.required]],
      price: [offer != null ? offer.price : ''],
      zipCode: [offer != null ? offer.zipCode : ''],
      city: [offer != null ? offer.city : ''],
    });
  }

  submitOffer() {
    this.offerNotEditable = true;
    this.offerService.makeOffer({...this.form.value, announcementId: this.announcement.id})
      .subscribe(offer => {
        console.log(offer);
      });
  }
}
