import { StyledDiv, StyledInput } from "./styles"

const DateInput = ({id, title, placeholder }) => {
    return <StyledDiv>
        <label htmlFor={id}>{title}</label>
        <StyledInput type="number" placeholder={placeholder}/>
    </StyledDiv>
}

export default DateInput