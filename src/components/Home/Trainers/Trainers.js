import React from 'react';
import './Trainers.css'
import trainer1 from '../../../Images/trainer 2.jpg'
import trainer2 from '../../../Images/trainer 2.jpg'
import trainer3 from '../../../Images/trainer 3.jpg'
import trainer4 from '../../../Images/trainer 4.jpg'
import trainer5 from '../../../Images/trainer 5.jpg'
import trainer6 from '../../../Images/trainer 6.jpg'
import Trainer from '../Trainer/Trainer';
const trainers = [
    { id: 1, name: 'Rayhan', img: trainer1 },
    { id: 2, name: 'Rayhan', img: trainer2 },
    { id: 3, name: 'Rayhan', img: trainer3 },
    { id: 4, name: 'Rayhan', img: trainer4 },
    { id: 5, name: 'Rayhan', img: trainer5 },
    { id: 6, name: 'Rayhan', img: trainer6 }
]
const Trainers = () => {
    return (
        <div>
            <h2 className='trainer-title'>Hear is our expert Trainer</h2>
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