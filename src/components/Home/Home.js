import React from 'react';
import ExtraPage from '../ExtraPage/ExtraPage';
import Footer from '../Footer/Footer';
import Trainers from '../Trainers/Trainers';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trainers></Trainers>
            <ExtraPage></ExtraPage>
            <Footer></Footer>
        </div>
    );
};

export default Home;