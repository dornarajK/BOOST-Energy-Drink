import Chocolate from '../Images/Chocolate.png'
import Lemon from '../Images/Lemon.png'
import Mango from '../Images/Mango.png'



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
        nimi: "Chocolate",
        img: Chocolate.src,
        hinta: 2.99,
        aineet: [
            "Premium Dark Chocolate",
            "Organic Whole Milk",
            "Energy Blend (Red Bull)",
            "Raw Honey",
            "Cocoa Powder"
        ],
        hyödyt: [
            "Enhanced Energy Boost",
            "Improved Recovery Time",
            "Mental Focus",
            "Antioxidant Rich",
            "Muscle Recovery"
        ],
        tuteID: "BMC22"
    }
];

export const BoostMango: Boost[] = [
    {
        id: 2,
        nimi: "Mango",
        img: Mango.src,
        hinta: 2.99,
        aineet: [
            "Fresh Mango Puree",
            "Organic Whole Milk",
            "Energy Blend (Red Bull)",
            "Raw Honey",
            "Greek Yogurt"
        ],
        hyödyt: [
            "Vitamin C Boost",
            "Quick Energy Release",
            "Immune Support",
            "Digestive Health",
            "Natural Hydration"
        ],
        tuteID: "BMM22"
    }
];

export const BoostLemon: Boost[] = [
    {
        id: 3,
        nimi: "Lemon",
        img: Lemon.src,
        hinta: 2.99,
        aineet: [
            "Fresh Lemon Juice",
            "Organic Whole Milk",
            "Energy Blend (Red Bull)",
            "Raw Honey",
            "Ginger Extract"
        ],
        hyödyt: [
            "Immune System Boost",
            "Natural Detox",
            "Energy Enhancement",
            "Digestive Support",
            "Mental Clarity"
        ],
        tuteID: "BML22"
    }
];