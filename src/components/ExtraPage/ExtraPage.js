import React from 'react';
import img from '../../Images/images.jpg';
import img1 from '../../Images/images (1).jpg';
import img2 from '../../Images/images (2).jpg';
import img3 from '../../Images/images (3).jpg';
import './ExtraPage.css'
const ExtraPage = () => {
    return (
        <div className='extrasection-container'>
            <div className='image-container'>
                <h1 className='advertisement'>This is our advartisement</h1>
                <div className='extra-image'>
                    <img src={img} alt="" />
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
                <h1 className='discount'>If you want to admit our gym club, you wii get 25% discount!!!</h1>
            </div>
        </div>
    );
};

export default ExtraPage;