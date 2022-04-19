import React from 'react';
import Trainer from '../Trainer/Trainer';
import trainer1 from '../../Images/trainer 1.jpg'
import trainer2 from '../../Images/trainer 2.jpg'
import trainer3 from '../../Images/trainer 3.jpg'
import trainer4 from '../../Images/trainer 4.jpg'
import trainer5 from '../../Images/trainer 5.jpg'
import trainer6 from '../../Images/trainer 6.jpg'
import './Trainers.css'
const trainers = [
    { id: 1, name: 'Rayhan', img: trainer1 },
    { id: 2, name: 'Robin', img: trainer2 },
    { id: 3, name: 'Rocky', img: trainer3 },
    { id: 4, name: 'Wiliam', img: trainer4 },
    { id: 5, name: 'Jackob', img: trainer5 },
    { id: 6, name: 'Maria zeneb', img: trainer6 }
]
const Trainers = () => {
    return (
        <div>
            <h2 className='trainer-title'>Hear are our expert Gym-Trainer</h2>
            <div className='trainer-container'> {
                trainers.map(trainer => <Trainer
                    key={trainer.id}
                    trainer={trainer}
                >
                </Trainer>)
            }
            </div>
        </div>
    );
};

export default Trainers;