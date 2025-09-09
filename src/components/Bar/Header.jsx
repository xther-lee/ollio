import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={`${process.env.PUBLIC_URL}/img/ollio/imgi_63_logo.png`} alt="대표로고" />
            </div>
            <div className="header-icon">
                <img src={`${process.env.PUBLIC_URL}/img/imgi_51_icon_search.svg`} alt="헤더검색" />
                <img src={`${process.env.PUBLIC_URL}/img/imgi_65_icon_basket.svg`} alt="헤더장바구니" />
            </div>
        </div>
    )
}

export default Header; 