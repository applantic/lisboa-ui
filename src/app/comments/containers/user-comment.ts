export enum SentimentType {
  POSITIVE, NEGATIVE, NEUTRAL
}

export class UserComment {
  constructor(public content: string,
              public sentiment: SentimentType,
              public createDateTime: Date,
              public from: string,
  ) {}
}
