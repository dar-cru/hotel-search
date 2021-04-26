import styled from 'styled-components';

type ImageTextOverlapProps = {
  url: string;
  imgDesc: string;
  text: string;
};

const Container = styled.div`
  position: relative;
  width: 242px;
  height: 150px;
  margin: 5px 10px 5px 0;
`;

const ImageContainer = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const OverlappingText = styled.p`
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

const ImageTextOverlap = ({ url, imgDesc, text }: ImageTextOverlapProps) => {
  return (
    <Container>
      <ImageContainer src={url} alt={imgDesc} />
      <OverlappingText>{text}</OverlappingText>
    </Container>
  );
};

export default ImageTextOverlap;
