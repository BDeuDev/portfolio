import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Info from './info';
import { descriptions, techs, titles } from '../../gateways/info';
interface CarouselProps {
  images: string[];
  width?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, width = '100%' }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: width,
    margin: '0 auto',
    textAlign: 'center',
    
  };

  const imageStyle: React.CSSProperties = {
    display: 'inline-block',
    maxWidth: '100%',
    maskImage:'linear-gradient(black 95%, transparent)',
    borderRadius:"1%"
  };

  return (
    <div style={containerStyle} className='relative my-auto w-3/5 h-full'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index+1} className='cursor-pointer '>
            <Info title={titles[index]} tech={techs[index]} description={descriptions[index]}/>

            <img src={image} alt={`slide-${index}`} style={imageStyle} className='h-4/5 ' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;