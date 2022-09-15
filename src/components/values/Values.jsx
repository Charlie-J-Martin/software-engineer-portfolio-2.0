import React from 'react';
import Card from './Card';
import Subheading from '../subheading/Subheading';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { data } from '../../data/valuesData';
import './values.css';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Values = () => {
  return (
    <>
      <div className='values-container' id='values'>
        <Subheading number='03.' name='Values' />
        <div className='coverflow-container'>
          <Swiper
            navigation
            pagination={{ clickable: true, type: 'bullets' }}
            effect='coverflow'
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            grabCursor
            slidesPerView={2}
            centeredSlides={true}
            initialSlide={1}
          >
            <SwiperSlide>
              {({ isActive }) => (
                <Card
                  isActive={isActive}
                  id={data[0].id}
                  title={data[0].title}
                  description={data[0].description}
                  img={data[0].img}
                  webImg={data[0].webImg}
                />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <Card
                  isActive={isActive}
                  id={data[1].id}
                  title={data[1].title}
                  description={data[1].description}
                  img={data[1].img}
                  webImg={data[1].webImg}
                />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <Card
                  isActive={isActive}
                  id={data[2].id}
                  title={data[2].title}
                  description={data[2].description}
                  img={data[2].img}
                  webImg={data[2].webImg}
                />
              )}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Values;
