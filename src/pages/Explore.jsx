import React from 'react';
import Section from '../components/Section';
import { useParams } from 'react-router-dom';

function Explore() {
 const { topic } = useParams();

 const topics = {
  'ask-anything': {
   title: 'Ask Anything',
   description1:
    "This section allows you to ask any questions you have. Whether it's about technology, lifestyle, or career guidance, we're here to help you find the answers.",
   description2:
    'Feel free to explore various topics and ask as many questions as you need. Our community is ready to support and provide insights for your growth.',
  },
  'improve-everyday': {
   title: 'Improve Everyday',
   description1:
    'This section is dedicated to personal and professional growth. Find tips, articles, and resources to help you make small, impactful changes each day.',
   description2:
    'Improvement is a journey. Start here and see how consistency in small steps can lead to significant positive changes over time.',
  },
 };

 return (
  <>
   <Section
    className='pt-[12rem] -mt-[5.25rem]'
    crosses
    crossesOffset='lg:translate-y-[5.25rem]'
    customPaddings
    id='hero'
   >
    <div className='container relative'>
     <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'>
      <h1 className='h1 mb-5'>{topics[topic]?.title}</h1>
      <p>{topics[topic]?.description1}</p>
      <p>{topics[topic]?.description2}</p>
     </div>
    </div>
   </Section>
  </>
 );
}

export default Explore;
