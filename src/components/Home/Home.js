import React from 'react';
import Banner from '../Home/Trainers/Trainers';
import Trainers from '../Home/Banner/Banner';
import ExtraSection from '../../ExtraSection/ExtraSection';
import Footer from '../../Footer/Footer'


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