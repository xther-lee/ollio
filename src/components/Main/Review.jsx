
import './Review.scss';

const Review = () => {

    const view = [
        {
            id: 1, img: `${process.env.PUBLIC_URL}/img/imgi_39_257f51206803b502b33b2e80c70632ce.jpg`,
            title: "올리오 펄스카라 마스카라형 속눈썹 올인원 키트 볼루미너스",
            review : "자연스러운 속눈썹이에요. 속눈썹까지 메이크업 했을 때랑 안했을 때 너무너무 차이가 나서 그동안 정말 많은 속눈썹 키트를 구매했는데요 올리오는 붙이기 정말 쉽구요 핀셋에 풀 리무버...."
        },
        {
            id: 2, img: `${process.env.PUBLIC_URL}/img/imgi_40_7080698de8e692960bc74a533df1117d.jpg`,
            title: "올리오 펄스카라 마스카라형 속눈썹 올인원 키트 볼루미너스",
            review : "자연스러운 속눈썹이에요. 속눈썹까지 메이크업 했을 때랑 안했을 때 너무너무 차이가 나서 그동안 정말 많은 속눈썹 키트를 구매했는데요 올리오는 붙이기 정말 쉽구요 핀셋에 풀 리무버...."
        },
        {
            id: 3, img: `${process.env.PUBLIC_URL}/img/imgi_41_8bba3783bfd073241152af1cbcd2aeec.jpg`,
            title: "올리오 펄스카라 마스카라형 속눈썹 올인원 키트 볼루미너스",
            review : "자연스러운 속눈썹이에요. 속눈썹까지 메이크업 했을 때랑 안했을 때 너무너무 차이가 나서 그동안 정말 많은 속눈썹 키트를 구매했는데요 올리오는 붙이기 정말 쉽구요 핀셋에 풀 리무버...."
        },
        {
            id: 4, img: `${process.env.PUBLIC_URL}/img/imgi_44_be2b146afff7d1de52bb1af9da00af31.jpg`,
            title: "올리오 펄스카라 마스카라형 속눈썹 올인원 키트 볼루미너스",
            review : "자연스러운 속눈썹이에요. 속눈썹까지 메이크업 했을 때랑 안했을 때 너무너무 차이가 나서 그동안 정말 많은 속눈썹 키트를 구매했는데요 올리오는 붙이기 정말 쉽구요 핀셋에 풀 리무버...."
        },
    ]


    return (
        <div className="review">
            <div className="txt">
                <h2 className="text-font">Review Talk</h2>
            </div>
            <div className="array">
            {view.map(talk => (
                    <div className="review-box">
                        <img src={talk.img} alt={talk.title} />
                        <h2>{talk.title}</h2>
                        <p>{talk.review}</p>
                    </div>
            ))}
            </div>
        </div>
    )
}

export default Review;