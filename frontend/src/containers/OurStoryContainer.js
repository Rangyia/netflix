import React from 'react';
import HeaderWrapper from '../components/Header/HeaderWrapper';
import Navbar from '../components/Header/Navbar';
import Logo from '../components/Header/Logo';
import PrimaryButton from '../components/Button/PrimaryButton';
import SelectorButton from '../components/Button/SelectorButton';

function OurStory({ children }) {
    return (
        <HeaderWrapper className="our-story-header-wrapper">
            <Navbar className="our-story-header">
                <Logo />
                <SelectorButton>Language</SelectorButton>
                <PrimaryButton href="/signin">SignIn</PrimaryButton>
            </Navbar>
        </HeaderWrapper>
    );
}

export default OurStory

