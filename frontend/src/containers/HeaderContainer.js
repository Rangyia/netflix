import React from 'react';
import '../components/Header/HeaderStyles.css'
import HeaderWrapper from '../components/Header/HeaderWrapper';
import Navbar from '../components/Header/Navbar';
import Logo from '../components/Header/Logo';
import PrimaryButton from '../components/Button/PrimaryButton';
import SelectorButton from '../components/Button/SelectorButton';
import Typography from '../components/Typography/Typography';
import BannerWrapper from '../components/Header/BannerWrapper';
import EmailForm from '../components/Header/EmailForm';

function HeaderContainer({ children, ...restProps }) {

    return (
        <div className="header-container" style={{ backgroundImage: `linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%), url("./images/misc/home-bg-en.jpg")`, backgroundSize: 'cover'}}>
            <HeaderWrapper className="header-wrapper-home" >
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
                    <div className="banner-home-text">
                        <Typography tag='h1'>Unlimited movies, TV shows, and more.</Typography>
                        <Typography tag='h2'>Watch anywhere. Cancel anytime.</Typography>
                        <div className="banner-home-email-form">
                            <Typography tag='h3'>Ready to watch? Enter your email to create or restart your membership.</Typography>
                            <EmailForm />
                        </div>
                    </div>
                </BannerWrapper>
                {children}
            </HeaderWrapper>
        </div>
    );
}

export default HeaderContainer

