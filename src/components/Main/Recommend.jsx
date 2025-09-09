import { useState } from "react";

import './Recommend.scss'

const Recommend = () => {

    const product = [
        { 
            id: 1, img: `${process.env.PUBLIC_URL}/img/imgi_5_9d6e71839752dac130b725651d248cdf.jpg`,
            title: "펄스카라", proname: "청순 에겐녀 마스카라형 속눈썹 소프트 브라운 올인원키트",
            sale: "34%", price: "32900", icon: "/img/Heart.png",
            hovericon: "/img/Heart-hover.png",
        },
        { 
            id: 2, img: `${process.env.PUBLIC_URL}/img/imgi_7_1e0d16ee9e8e7cffb07b49fcbadceb1a.jpg`,
            title: "펄스카라", proname: "시크 테토녀 마스카라형 속눈썹 스파이키 올인원키트",
            sale: "34%", price: "32900", icon: "/img/Heart.png",
            hovericon: "/img/Heart-hover.png",
        },
        { 
            id: 3, img: `${process.env.PUBLIC_URL}/img/imgi_3_a26df29cd86c5efccad01846cc9e25cb.jpg`,
            title: "펄스카라", proname: "마스카라형 속눈썹 올인원키트",
            sale: "28%", price: "54900", icon: "/img/Heart.png",
            hovericon: "/img/Heart-hover.png",
        },
        { 
            id: 4, img: `${process.env.PUBLIC_URL}/img/imgi_35_3d7da2368a2068795ef16bf57f94aaab.jpg`,
            title: "펄스카라", proname: "마스카라형 속눈썹 싱글팩 러블리",
            sale: "28%", price: "7900", icon: "/img/Heart.png",
            hovericon: "/img/Heart-hover.png",
        },
        { 
            id: 5, img: `${process.env.PUBLIC_URL}/img/imgi_33_43a29eb4fda359bf31acbd7efd0ca986.jpg`,
            title: "펄스카라", proname: "마스카라형 속눈썹 싱글팩 핫글램",
            sale: "28%", price: "7900", icon: "/img/Heart.png",
            hovericon: "/img/Heart-hover.png",
        },
        { 
            id: 6, img: `${process.env.PUBLIC_URL}/img/imgi_31_4d279f3c74b6f65185eb8ab889fef1c1.jpg`,
            title: "펄스카라", proname: "마스카라형 속눈썹 싱글팩 아이돌",
            sale: "28%", price: "7900", icon: "/img/Heart.png",
            hovericon: "/img/Heart-hover.png",
        },
        { 
            id: 7, img: `${process.env.PUBLIC_URL}/img/imgi_29_bf47063826ab73a46fb76da7fed67862.jpg`,
            title: "펄스카라", proname: "마스카라형 속눈썹 싱글팩 브라이트",
            sale: "28%", price: "7900", icon: "/img/Heart.png",
            hovericon: "/img/Heart-hover.png",
        },
        { 
            id: 8, img: `${process.env.PUBLIC_URL}/img/Rectangle 28.png`,
            title: "펄스카라", proname: "마스카라형 속눈썹 싱글팩 볼륨",
            sale: "28%", price: "7900", icon: "/img/Heart.png",
            hovericon: "/img/Heart-hover.png",
        },
        { 
            id: 9, img: `${process.env.PUBLIC_URL}/img/imgi_15_3e8678b398a6523d8630fc96fcd26b73.jpg`,
            title: "펄스카라", proname: "마스카라형 속눈썹 싱글팩 (10종 택1)",
            sale: "28%", price: "7900", icon: "/img/Heart.png",
            hovericon: "/img/Heart-hover.png",
        },
        { 
            id: 10, img: `${process.env.PUBLIC_URL}/img/imgi_13_6fa5a20ddde6f2733b0211ca639a0f85.jpg`,
            title: "펄스카라", proname: "마스카라형 속눈썹 올인원 키트 아이돌",
            sale: "26%", price: "36900", icon: "/img/Heart.png",
            hovericon: "/img/Heart-hover.png",
        },
        { 
            id: 11, img: `${process.env.PUBLIC_URL}/img/imgi_11_122f325d76d417a0609c859eed72396d.jpg`,
            title: "펄스카라", proname: "마스카라형 속눈썹 올인원 키트 브라이트",
            sale: "26%", price: "36900", icon: "/img/Heart.png",
            hovericon: "/img/Heart-hover.png",
        },
        { 
            id: 12, img: `${process.env.PUBLIC_URL}/img/imgi_9_c57ea090ca841b1c0db54ae02f5c615c.jpg`,
            title: "펄스카라", proname: "마스카라형 속눈썹 올인원 키트 러블리",
            sale: "26%", price: "36900", icon: "/img/Heart.png",
            hovericon: "/img/Heart-hover.png",
        },
    ];

    const [liked, setLiked] = useState({});

    const handleClick = (id) => {
        setLiked((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    
    return (
    <div className="recommend">
      <div className="txt">
        <h2>회원님을 위한 추천 상품</h2>
      </div>
      <div className="recommend-product">
        {product.map(item => (
          <div className="product-card" key={item.id}>
            <a href="#">
              <div className="img-wrap">
                <img src={item.img} alt={item.title} />
                <img
                  src={liked[item.id] ? item.hovericon : item.icon}
                  alt={`${item.title} icon`}
                  className="icon-img"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.id)
                  }}/>
              </div>
              <div className="txt-box">
                <div className="left">
                  <h4 className="title">{item.title}</h4>
                  <p className="proname">{item.proname}</p>
                </div>
                <div className="right">
                  <h3 className="sale">{item.sale}</h3>
                  <p className="price">{item.price}원</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommend;