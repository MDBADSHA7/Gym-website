import React from 'react';
import img from '../../src/Images/images.jpg';
import img1 from '../../src/Images/images (1).jpg';
import img2 from '../../src/Images/images (2).jpg';
import img3 from '../../src/Images/images (3).jpg';
import './ExtraSection.css';
const ExtraSection = () => {
    return (
        <div className='image'>
            <h1>This is our advartisement</h1>
            <div className='grid'> <img src={img} alt="" />
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
            <h1>If you want to admit our gym club, you wii get 255 discount!!!</h1>
        </div>
    );
};

export default ExtraSection;