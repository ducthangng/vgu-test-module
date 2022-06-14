import { lazy } from 'react';

import IntroButton from '../api/IntroButton.json';
//import MiddleBlock from "../components/contentBlock/middleContent/index";
//import Container from "../components/Container/index";
//import ScrollToTop from "../models/ScrollToTop";
//import ContentBlock from "../components/contentBlock/index";
import { Styles } from '../pages/Styles/styles';

const MiddleBlock = lazy(
  () => import('../components/contentBlock/middleContent/index')
);
const Container = lazy(() => import('../components/Container/index'));
const ScrollToTop = lazy(() => import('../models/ScrollToTop'));
const ContentBlock = lazy(() => import('../components/contentBlock/index'));

const Home = () => {
  return (
    <Container>
      <Styles />
      <ScrollToTop />
      <ContentBlock
        type="left"
        title={IntroButton.title}
        content={IntroButton.text}
        button={IntroButton.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={' What is the difference?'}
        content={
          ' A student is a person who is not a professional. A professional is a person who is not a student. '
        }
      />
      <ContentBlock
        type="right"
        title={'How to improve your English skills?'}
        content={'Pratice with other 100+ online test and 1000+ exercises.'}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={'Mission'}
        content={'We are here to help you improve your English skills.'}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={'Why are we?'}
        content={'100+ online test and 1000+ exercises.'}
        icon="waving.svg"
        id="product"
      />
    </Container>
  );
};

export default Home;
