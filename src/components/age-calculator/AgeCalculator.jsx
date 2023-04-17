import { dateToPrint} from "../../hooks/useAgeData"
import AgeResult from "../age-result/AgeResult"
import Arrow from "../arrow/Arrow"
import { StyledAgeCalculator, StyledInputs, StyledInput, StyledDiv } from "./styles"
import { useState } from 'react';


const AgeCalculator = () => {
    const [age, setAge] = useState({
		day: 0,
		month: 0,
		year: 0
	});
    const [ageToPrint, setAgeToPrint] = useState({
		days: '--',
		months: '--',
		years: '--'
	});

    return <StyledAgeCalculator>
        <StyledInputs>
            <StyledDiv>
                <label htmlFor='day'>Day</label>
                <StyledInput id='day' title='day' placeholder='DD' onChange={(e)=> setAge({...age, day: e.target.value})} />
            </StyledDiv>
            <StyledDiv>
                <label htmlFor='month'>month</label>
                <StyledInput id='month' title='month' placeholder='MM' onChange={(e)=> setAge({...age, month: e.target.value})}/>
            </StyledDiv>
            <StyledDiv>
                <label htmlFor='years'>year</label>
                <StyledInput id='year' title='year' placeholder='YYYY' onChange={(e)=> setAge({...age, year: e.target.value})}/>
            </StyledDiv>
        </StyledInputs>
        <Arrow handleClick={() => dateToPrint(age, setAgeToPrint)}/>
        <div>
            <AgeResult number={ageToPrint.years} data=' years'/>
            <AgeResult number={ageToPrint.months} data=' months'/>
            <AgeResult number={ageToPrint.days} data=' days'/>
        </div>
    </StyledAgeCalculator>
}

    
    
 




export default AgeCalculator