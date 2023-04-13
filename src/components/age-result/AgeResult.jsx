import { StyledNumber, StyledData } from "./styles"

const AgeResult = ({number, data}) => {
    return <StyledNumber>
        {number}
        <StyledData>{data}</StyledData>
    </StyledNumber>
}

export default AgeResult