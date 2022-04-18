import React from 'react';
import Banner from '../Home/Trainers/Trainers';
import Trainers from '../Home/Banner/Banner';
import Footer from '../../Footer/Footer';
import ExtraSection from '../../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div>
            <Trainers></Trainers>
            <Banner></Banner>
            <ExtraSection></ExtraSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;