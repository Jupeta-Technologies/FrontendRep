import React from 'react';
import './explore.css';

const ExploreBestSelling = () => {
  return (
    <div className='sectiontwo'>
      <h3>YOU MAY ALSO LIKE</h3>
      <div className='sectiontwoprod'>
        <h3>First product here</h3>
      </div>
      <div className='sectiontwoprod'>
        <h3>Second product here</h3>
      </div>
      <div className='sectiontwoprod'>
        <h3>Third product here</h3>
      </div>
      <div className='sectiontwoprod'>
        <h3>Fourth product here</h3>
      </div>
    </div>
  );
};
export default ExploreBestSelling;


/*import React, { useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 964px;
  position: relative;
`;

const CarouselContainer = styled.div`
  overflow: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    height: 0;
  }
`;

const PrevButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  background: white;
  border: none;
  padding: 8px;
  border-radius: 50%;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(50%, -50%);
  display: none;
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  background: white;
  border: none;
  padding: 8px;
  border-radius: 50%;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-auto-flow: column;
  margin: auto;
  box-sizing: border-box;
`;

const Item = styled.img`
  width: 180px;
  height: 180px;
  background: green;
`;

const Carousel = () => {
  const carouselRef = useRef(null);

  const handleNext = () => {
    carouselRef.current.scrollBy(carouselRef.current.offsetWidth + 16, 0);
  };

  const handlePrev = () => {
    carouselRef.current.scrollBy(-(carouselRef.current.offsetWidth + 16), 0);
  };

  return (
    <Wrapper>
      <CarouselContainer ref={carouselRef}>
        <Content>
          <Item
            src="https://lh3.googleusercontent.com/0OynDYRoCaQWJIUyiOrUVeoub0mLNrDUcUZrJXF2WHQD77o-F_g2EnqZqVevO954WzD7mC5qTg=w512-h512-l90-rj"
            alt="Carousel Item"
          />
          <Item
            src="https://lh3.googleusercontent.com/e2WxnnYi-F9oN4e0HdLosbq8nlxezfIlxAze2Ba0zE2JR8Es7j-4tNtXc9atwL51FHpaTMtDgmc=w544-h544-l90-rj"
            alt="Carousel Item"
          />
          {/* Add more images here */
/*
          </Content>
          </CarouselContainer>
          <PrevButton onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
            </svg>
          </PrevButton>
          <NextButton onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
            </svg>
          </NextButton>
        </Wrapper>
      );
    };
    
    export default Carousel;
    */
