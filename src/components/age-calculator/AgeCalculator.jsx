import { useState } from "react"
import AgeResult from "../age-result/AgeResult"
import Arrow from "../arrow/Arrow"
import { StyledAgeCalculator, StyledInputs, StyledInput, StyledDiv } from "./styles"

const AgeCalculator = (day,month,year) => {
    const [age, setAge] = useState({
        day:0,
        month:0,
        year:0,
    })
    const [ageToPrint, setAgeToPrint] = useState({
        days:'--',
        months:'--',
        years:'--',
    })

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

    const dateToPrint = (age, setAgeToPrint) => {
        const birthday = new Date(`${age.month}/${age.day}/${age.year}`)
        const now = new Date()
        const totalDays = diferenceBetweenDates(now,birthday)
        const totalTime = convertDays(totalDays)
        setAgeToPrint(totalTime)
    }

    const convertDays = (days) => {
        const years = Math.floor(days / 365);
        days = days % 365;
        let months = Math.floor(days / 30);
        days = days % 30;
        
        const dateTemp = new Date();
        dateTemp.setDate(dateTemp.getDate() + days);
        const lastDayOfMonth = new Date(dateTemp.getFullYear(), dateTemp.getMonth() + 1, 0).getDate();
        if (days > lastDayOfMonth) {
        days -= lastDayOfMonth;
        months++;
        }
        
        return {years, months, days};
    }
    
    const diferenceBetweenDates = (now, birthday) => {
        const milisecondsPerDay = 86400000; // Número de milisegundos en un día
        const milisecondsBetweenDays = now - birthday // Calcula la diferencia de tiempo en milisegundos
        const diferenceInDays = Math.floor(milisecondsBetweenDays / milisecondsPerDay); // Convierte la diferencia en días
        
        return diferenceInDays
    }
    
 




export default AgeCalculator