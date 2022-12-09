import { Headline, Paragraph, Wrapper } from '../styled.components';
import { ReviewsRoot } from './reviews.style';
import dictionary from '../../data/dictionary';
import Image from '../Image';
import { ReviewType } from '../../types/common';

import girlImage from '../../assets/girl.png';

const reviews: ReviewType[] = [
  {
    avatar: girlImage,
    fullName: 'Alice Garcia',
    occupation: 'CEO - PixelPerfect',
    quote: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.”'
  },
  {
    avatar: girlImage,
    fullName: 'Mia Garcia',
    occupation: 'VP - Google',
    quote: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.”'
  }
];

const Review = ({
  avatar, fullName, occupation, quote
}: ReviewType): JSX.Element => (
  <div className="review__wrapper">
    <div className="review__person">
      <Image
        width={80}
        parent="review"
        label={fullName}
        link={avatar}
      />
      <div className="review__information">
        <Headline
          as="h3"
          className="review__fullName"
          variant="h6"
        >
          { fullName }
        </Headline>
        <Headline
          as="p"
          className="review__occupation"
          variant="h7-semibold"
        >
          { occupation }
        </Headline>
      </div>
    </div>
    <Paragraph
      variant="p2-regular"
      className="review__paragraph"
    >
      { quote }
    </Paragraph>
  </div>
);

const { reviews: { headline } } = dictionary;
const Reviews = (): JSX.Element => (
  <ReviewsRoot>
    <Wrapper className="reviews__wrapper">
      <Headline
        className="reviews__headline"
        variant="h2"
        underlined
      >
        { headline }
      </Headline>
      <div className="reviews__containers">
        {
          reviews.map(({
            fullName, avatar, occupation, quote
          }) => (
            <Review
              fullName={fullName}
              avatar={avatar}
              occupation={occupation}
              quote={quote}
            />
          ))
        }
      </div>
    </Wrapper>
  </ReviewsRoot>
);

export default Reviews;
