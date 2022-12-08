import { Headline, Wrapper } from '../styled.components';
import { OverviewRoot } from './overview.style';
import dictionary from '../../data/dictionary';
import { overviews } from '../../data/variables';

const { overview } = dictionary;

const Overview = (): JSX.Element => (
  <OverviewRoot>
    <Wrapper className="overview__wrapper">
      <Headline
        className="overview__headline"
        variant="h2"
        underlined
      >
        { overview.headline }
      </Headline>
      <div className="overview__containers">
        {
          overviews.map(({ label, value }) => (
            <div className="overview__container">
              <Headline
                as="h3"
                className="overview__label"
                variant="h7-semibold"
              >
                { label }
              </Headline>
              <p className="overview__value">{ value }</p>
            </div>
          ))
        }
      </div>
    </Wrapper>
  </OverviewRoot>
);

export default Overview;
