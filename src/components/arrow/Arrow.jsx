import { StyledIcon, StyledDiv } from "./styles"

const Arrow = ({HandleClick}) => {
    return <StyledDiv onClick={() =>{HandleClick()}}>
        <StyledIcon src="/icon-arrow.svg" alt="" />
    </StyledDiv>
}

export default Arrow