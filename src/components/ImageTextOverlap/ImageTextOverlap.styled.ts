import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 242px;
  height: 150px;
  margin: 5px 10px 5px 0;
`;

export const ImageContainer = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const OverlappingText = styled.p`
  position: absolute;
  background-color: white;
  padding: 6px;
  top: 12px;
  left: 0;
  box-sizing: border-box;
  color: red;
  margin: 0;
  font-size: 0.9em;
  font-weight: 500;
`;
