import styled from 'styled-components';

export const FlexContainer = styled.div<{ direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  position: relative;
  box-sizing: border-box;
`;

export const Divider = styled.hr`
  margin: 0;
  background-color: #cbcaca;
  border: 0;
  height: 1px;
`;

export const TitleHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  padding-top: 20px;
`;

export const HeadingText = styled.h2`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  padding-right: 8px;
`;

export const GreyInfoText = styled.p`
  color: #999999;
  margin: 0;
  font-size: 0.8rem;
`;

export const RoomOfferText = styled.p`
  position: absolute;
  bottom: 18px;
  text-decoration: underline;
  color: #e40000;
  font-size: 0.8rem;
  margin: 0;
`;

export const CurrencyText = styled.p`
  font-size: 2rem;
  color: #3f3f3f;
  font-weight: 200;
  padding: 4px 0;
  margin: 0;

  :before {
    content: '$';
    font-size: 1.15rem;
    vertical-align: 60%;
    padding-right: 2px;
  }
`;

export const SavingsText = styled.p`
  font-size: 1rem;
  color: #e40000;
  margin: 0;

  :after {
    content: '~';
    font-size: 0.8rem;
    vertical-align: 25%;
    padding-left: 1px;
  }
`;

export const CancellationTypeText = styled.p`
  position: absolute;
  margin: 0;
  bottom: 8px;
  color: #35a509;
  font-size: 0.8rem;
`;
