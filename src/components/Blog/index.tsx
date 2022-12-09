import { Link } from 'react-router-dom';
import { Headline, Paragraph, Wrapper } from '../styled.components';
import { BlogRoot } from './blog.style';
import dictionary from '../../data/dictionary';
import { PostType } from '../../types/common';
import Image from '../Image';
import postImage from '../../assets/post.png';

const posts: PostType[] = [
  {
    image: postImage,
    date: '22 June 2022',
    headline: 'Staffing software: key capabilities and top products',
    link: '/'
  },
  {
    image: postImage,
    date: '20 June 2022',
    headline: '2022 software development trends explained with benefits',
    link: '/'
  },
  {
    image: postImage,
    date: '05 January 2022',
    headline: 'Business analysis helps you in finance',
    link: '/'
  }
];

const Post = ({
  image, date, headline, link
}: PostType): JSX.Element => (
  <Link
    to={link}
    className="post__link"
  >
    <div>
      <Image
        width={350}
        parent="post"
        label={headline}
        link={image}
      />
      <Paragraph
        variant="p2-regular"
        className="post__date"
      >
        { date }
      </Paragraph>
      <Headline
        className="post__headline"
        variant="h4"
      >
        { headline }
      </Headline>
    </div>
  </Link>
);

const { blog } = dictionary;
const Blog = (): JSX.Element => (
  <BlogRoot>
    <Wrapper className="blog__wrapper">
      <Headline
        className="blog__headline"
        variant="h2"
        underlined
      >
        { blog.headline }
      </Headline>
      <div className="blog__posts">
        {
          posts.map(({
            image, date, headline, link
          }) => (
            <Post
              image={image}
              date={date}
              headline={headline}
              link={link}
            />
          ))
        }
      </div>
    </Wrapper>
  </BlogRoot>
);

export default Blog;
