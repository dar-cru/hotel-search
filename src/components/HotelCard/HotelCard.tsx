import { CancellationType, Offer, Property } from '../../types';
import ImageTextOverlap from '../ImageTextOverlap';
import Rating from '../Rating';
import {
  Divider,
  HeadingText,
  GreyInfoText,
  CurrencyText,
  SavingsText,
  TitleHeaderContainer,
  FlexContainer,
  RoomOfferText,
  CancellationTypeText
} from './HotelCard.styled';

type HotelCardProps = {
  property: Property;
  offer: Offer;
};

const HotelCard = ({ property, offer }: HotelCardProps) => {
  const { title, address, previewImage, rating } = property;
  const { promotion, name: offerName, cancellationOption, displayPrice, savings } = offer;

  return (
    <FlexContainer data-testid="hotel-card-item" direction="row" style={{ paddingBottom: '5px' }}>
      <ImageTextOverlap url={previewImage.url} imgDesc={previewImage.caption} text={promotion.title} />

      <div style={{ width: '100%', padding: '0 10px' }}>
        <Divider />

        <TitleHeaderContainer>
          <HeadingText data-testid="hotel-name">{title}</HeadingText>
          <Rating {...rating} />
        </TitleHeaderContainer>

        <FlexContainer direction="row" style={{ minHeight: '116px' }}>
          <FlexContainer direction="column" style={{ maxHeight: '70px', paddingTop: '4px', width: '50%' }}>
            <GreyInfoText data-testid="hotel-address-text">{address?.join(', ')}</GreyInfoText>
            <RoomOfferText>{offerName}</RoomOfferText>
          </FlexContainer>

          <FlexContainer direction="column" style={{ alignItems: 'flex-end', paddingTop: '28px', width: '50%' }}>
            <GreyInfoText data-testid="hotel-night-total-text">
              1 night total ({displayPrice.currency?.toUpperCase()})
            </GreyInfoText>
            <CurrencyText data-testid="hotel-price-text">{Math.round(displayPrice.amount)}</CurrencyText>
            {savings && <SavingsText data-testid="hotel-savings-text">Save ${Math.round(savings.amount)}</SavingsText>}
          </FlexContainer>
        </FlexContainer>

        {cancellationOption?.cancellationType === CancellationType.FREE_CANCELLATION && (
          <CancellationTypeText data-testid="hotel-free-cancellation">Free Cancellation</CancellationTypeText>
        )}
      </div>
    </FlexContainer>
  );
};

export default HotelCard;
