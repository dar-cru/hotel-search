export enum PromotionType {
  CAMPAIGN = 'CAMPAIGN',
  MEMBER = 'MEMBER'
}

export enum CancellationType {
  NOT_REFUNDABLE = 'NOT_REFUNDABLE',
  FREE_CANCELLATION = 'FREE_CANCELLATION'
}

export type Offer = {
  promotion: {
    title: string;
    type: PromotionType;
  };
  name: string;
  displayPrice: {
    amount: number;
    currency: string;
  };
  savings?: {
    amount: number;
    currency: string;
  };
  cancellationOption: {
    cancellationType: CancellationType;
  };
};
