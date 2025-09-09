import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import "swiper/css/pagination";
import './MainSlide.scss';

const MainSlide = () => {
    return (
        <div className="MainSlide">
    <Swiper
      modules={[ Pagination ]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ 
        clickable: true, 
        type: "fraction" 
      }}
    >
            <SwiperSlide>
              <iframe width="500" 
              height="280" 
              src="https://www.youtube.com/embed/zs4oQKXgfbo?autoplay=1&mute=1&controls=0&loop=1&playlist=zs4oQKXgfbo"
              title="" frameborder="0" allow="accelerometer; 
              autoplay; clipboard-write; encrypted-media; 
              gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen/>
          </SwiperSlide>
            <SwiperSlide>
                <img src={`${process.env.PUBLIC_URL}/img/imgi_2_6442bfd6738ad27a0b53a46ef97cb239.png`} alt="메인02" />
            </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default MainSlide;