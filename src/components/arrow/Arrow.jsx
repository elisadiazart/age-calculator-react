import { StyledIcon, StyledDiv } from "./styles"

const Arrow = ({handleClick}) => {
    return <StyledDiv onClick={() =>{handleClick()}}>
        <StyledIcon src="/icon-arrow.svg" alt="" />
    </StyledDiv>
}

export default Arrow