import React from 'react';
import './styles.css';
import { Counter } from '../../redux/counter/Counter';

export default function Wizard() {
    return (
        <>
            <h1>Wizard</h1>
            <Counter />
        </>
    );
}
