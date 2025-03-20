import { FinalResult } from '../results/results'
import { Appreciation } from '../resultappreciation/results-appreciation'
import './side1.css'

export const Side1 = ()=>{
    return(
        <div className="side1Container">
            <h2> Your Result</h2>
        <div className="contentt">
           <FinalResult/>
            <Appreciation/>
        </div>
        </div>

    )
}
