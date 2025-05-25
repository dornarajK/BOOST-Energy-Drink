



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
        img: 'img',
        hinta: 9.99,
        aineet: ["Chocolate", "Milk", "redbull", "honey"],
        hyödyt: ["strong boon", "recover faster", "energy"],
        tuteID: "BM22"
        
    }
];

export const BoostMango: Boost[] = [
    {
        id: 1,
        nimi: "Boost Mango",
        img: 'img',
        hinta: 9.99,
        aineet: ["Mango", "Milk", "redbull", "honey"],
        hyödyt: ["strong boon", "recover faster", "energy"],
        tuteID: "BM22"
        
    }
];

export const BoostLemon: Boost[] = [
    {
        id: 1,
        nimi: "Boost Lemon",
        img: 'img',
        hinta: 9.99,
        aineet: ["Lemon", "Milk", "redbull", "honey"],
        hyödyt: ["strong boon", "recover faster", "energy"],
        tuteID: "BM22"
        
    }
];