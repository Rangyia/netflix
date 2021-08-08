import React from 'react';
import Card from '../components/Card/Card';
import Typography from '../components/Typography/Typography';
import HeaderContainer from '../containers/HeaderContainer';

function HomePage() {
    return (
        <>
            <HeaderContainer />
            <Card className="card" alignImg="right">
                <div className="card-container">
                    <div className="card-text-tv">
                        <Typography tag='h1'>Unlimited movies, TV shows, and more.</Typography>
                        <Typography tag='h2'>Unlimited movies, TV shows, and more.</Typography>
                    </div>
                    <div className="card-img-tv">
                        {/* <img className="tv-image" href="/" src="./images/misc/tv.png" alt="Netflix Banner" /> */}
                        <div className="tv-video">
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default HomePage;
