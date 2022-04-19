import React from 'react';
import './Trainer.css'
const Trainer = ({ trainer }) => {
    const { name, img } = trainer;
    return (
        <div className='card' style={{ width: "18rem" }}>
            <div> <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">It is gymnatium.It make a man healthy and bdy builder.It keeps our body fit.</p>
                </div></div>
        </div >
    );
};

export default Trainer;