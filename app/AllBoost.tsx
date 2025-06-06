import Boost from './[id]/Boost'

import {BoostChocolate, BoostMango, BoostLemon} from './Data/BoostData'

export default function AllBoost(){
    return(
        <>
        <Boost data={BoostChocolate}/>
        <Boost data={BoostMango}/>
        <Boost data={BoostLemon}/>
   
      
        </>
    )
}
