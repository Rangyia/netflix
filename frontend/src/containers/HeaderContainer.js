import React from 'react';
import '../components/Header/HeaderStyles.css'
import HeaderWrapper from '../components/Header/HeaderWrapper';
import Navbar from '../components/Header/Navbar';
import Logo from '../components/Header/Logo';
import PrimaryButton from '../components/Button/PrimaryButton';
import SelectorButton from '../components/Button/SelectorButton';
import Typography from '../components/Typography/Typography';
import BannerWrapper from '../components/Header/BannerWrapper';

function HeaderContainer({ children, ...restProps }) {

    return (
        <div className="header-container">
            <HeaderWrapper className="header-wrapper">

                <div className="nav-bar-wrapper">
                    <Navbar className="nav-bar-home">
                        <Logo />
                        <SelectorButton options={{'en': 'English', 'es': 'Espagnol'}}>
                            Language
                            <img className="language-icon" href="/" src="./images/icons/chevron-down.png" alt="Netflix Banner" />
                        </SelectorButton>
                        <PrimaryButton href="/signin">Sign In</PrimaryButton>
                    </Navbar>
                </div>

                <BannerWrapper className="banner-home-wrapper">
                    <div className="banner-home-background">
                        <div className="banner-home-bg-wrapper">
                            <img className="banner-home-bg-img" href="/" src="./images/misc/home-bg-en.jpg" alt="Netflix Banner" />
                            <div className="banner-home-bg-img-gradient"></div>
                        </div>
                    </div>
                    <div className="banner-home-text">
                        <Typography tag='h1'>Unlimited movies, TV shows, and more.</Typography>
                        <Typography tag='h2'>Watch anywhere. Cancel anytime.</Typography>
                    </div>
                </BannerWrapper>

                {children}

            </HeaderWrapper>
        </div>
    );
}

export default HeaderContainer

