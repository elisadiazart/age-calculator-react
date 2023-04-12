import Arrow from "../arrow/Arrow"
import DateInput from "../date-input/DateInput"
import { StyledAgeCalculator, StyledInputs } from "./styles"

const AgeCalculator = () => {
    return <StyledAgeCalculator>
        <StyledInputs>
            <DateInput id='day' title='day' placeholder='DD'/>
            <DateInput id='month' title='month' placeholder='MM'/>
            <DateInput id='year' title='year' placeholder='YYYY'/>
        </StyledInputs>
        <Arrow/>
    </StyledAgeCalculator>
}

export default AgeCalculator