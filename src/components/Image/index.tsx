import { ImageProps } from '../../types/props';
import { ImageRoot } from './image.style';

const Image = ({
  parent, label, link, width
}: ImageProps): JSX.Element => (
  <ImageRoot
    className={`${parent}__image`}
    width={width}
  >
    <img
      className="image__photo"
      alt={label}
      src={link}
    />
  </ImageRoot>
);

export default Image;
