import Chocolate from '../Images/Chocolate.png'
import Lemon from '../Images/Lemon.png'
import Mango from '../Images/Mango.png'

import Boosts from '../Images/3Boost.png'

import bgMango from '../Images/tausta.png'

export interface Boost {
    id: number;
    nimi: string;
    img: string;
    hinta: number;
    aineet: string[];
    hyödyt: string[];
    tuteID: string;
}

export const BoostChocolate: Boost[] = [
    {
        id: 1,
        nimi: "Boost Chocolate",
        img: Chocolate.src,
        hinta: 9.99,
        aineet: ["Chocolate", "Milk", "redbull", "honey"],
        hyödyt: ["Strong boon", "Recover Faster", "Energy"],
        tuteID: "BM22"
    }
];

export const BoostMango: Boost[] = [
    {
        id: 1,
        nimi: "Boost Mango",
        img: Mango.src,
        hinta: 9.99,
        aineet: ["Mango", "Milk", "redbull", "honey"],
        hyödyt: ["Strong boon", "Recover Faster", "Energy"],
        tuteID: "BM22"
    }
];

export const BoostLemon: Boost[] = [
    {
        id: 1,
        nimi: "Boost Lemon",
        img: Lemon.src,
        hinta: 9.99,
        aineet: ["Lemon", "Milk", "redbull", "honey"],
        hyödyt: ["Strong boon", "Recover Faster", "Energy"],
        tuteID: "BM22"
    }
];