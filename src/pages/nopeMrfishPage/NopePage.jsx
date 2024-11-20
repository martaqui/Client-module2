import React from 'react';
import './NopePage.css';
import { FaFish } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NopePage = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>No no no Mr. Fish</h1>
                <Link to={'/'}>
                    <FaFish className="fish-icon" />
                </Link>
                <p>Me parece que primero <strong>tienes que registrarte </strong>para poder utilizar nuestra paginaa web</p>
                <p><strong>Presiona a mr.fish</strong> para volver al login ;)</p>
            </div>
        </div>
    );
};

export default NopePage;
