import Boost from './[id]/Boost'
import MobileBoosts from './MobileBoosts'

import { BoostChocolate, BoostMango, BoostLemon } from './Data/BoostData'


export const getBackgroundColor = (boostName: string) => {
    switch (boostName) {
        case 'Chocolate':
            return 'bg-[#4B2612]';
        case 'Mango':
            return 'bg-[#B47704]';
        case 'Lemon':
            return 'bg-[#BAA316]';
        default:
            return 'bg-gray-100';
    }
};


export default function AllBoost() {
   

    return (
        <>
            <div className='hidden xl:block'>
                <Boost data={BoostChocolate} />
                <Boost data={BoostMango} />
                <Boost data={BoostLemon} />
            </div>


            <div className='xl:hidden'>
                <MobileBoosts data={BoostChocolate} />
                <MobileBoosts data={BoostMango} />
                <MobileBoosts data={BoostLemon} />
            </div>
            

        </>
    )
}
