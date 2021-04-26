import { Container, ImageContainer, OverlappingText } from './ImageTextOverlap.styled';

type ImageTextOverlapProps = {
  url: string;
  imgDesc: string;
  text: string;
};

const ImageTextOverlap = ({ url, imgDesc, text }: ImageTextOverlapProps) => {
  return (
    <Container>
      <ImageContainer src={url} alt={imgDesc} />
      <OverlappingText>{text}</OverlappingText>
    </Container>
  );
};

export default ImageTextOverlap;
