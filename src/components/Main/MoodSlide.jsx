import './MoodSlide.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const MoodSlide = () => {
    const slides = [
    { id: 1, 
    img: "/img/imgi_24_21168ce00b53ea6e4a558296efe3c146.png", 
    text: "Clear", link: "/" },
    { id: 2, 
        img: "/img/imgi_28_ef9583882052d7de6ee140f862a96f27.png", 
        text: "Lovely", link: "/" },
    { id: 3, 
        img: "/img/imgi_23_a41b98b8e2ad1d6bfc445f080458ac9f.png", 
        text: "Hot Glam", link: "/" },
    { id: 4, 
        img: "/img/imgi_27_fcf5edb328ede08835eae6f5f1767134.png", 
        text: "idoll", link: "/" },
    { id: 5, 
        img: "/img/imgi_26_6eb0a3d1d43b5033bec72d43453dc802.png", 
        text: "Volume", link: "/" },
    { id: 6, 
        img: "/img/imgi_25_a82bc7282f66de76f4e4e927db6262b8.png", 
        text: "Bright", link: "/" },
  ];

    return (
        <div className="moodslide">
            <div className="txt">
                <h2>오늘의 무드를 Pick! 해보세요</h2>
            </div>
            <div className="mood">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}       // 한 화면에 3개 표시
                    centeredSlides={true}   // 항상 중앙 슬라이드 활성화
                    loop={true}        
                    >
                    {slides.map((slide => (
                        <SwiperSlide key={slide.id}>
                            <div className="mood-slide">
                                <Link to={slide.link}/>
                                <img src={slide.img} alt={`slide-${slide.id}`} />
                                <p>{slide.text}</p>
                            </div>
                        </SwiperSlide>
                    )))}
                </Swiper>
            </div>
        </div>
    );
};

export default MoodSlide;