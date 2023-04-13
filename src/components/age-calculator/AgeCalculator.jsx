import { useState } from "react"
import AgeResult from "../age-result/AgeResult"
import Arrow from "../arrow/Arrow"
import DateInput from "../date-input/DateInput"
import { StyledAgeCalculator, StyledInputs } from "./styles"

const AgeCalculator = () => {
    const [age, setAge] = useState(0)

    const convertDays = (days) => {
        console.log(days)
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
        
        return diferenceInDays;
    }
    
    const birthday = new Date("12/17/86")
    const now = new Date();
    
    
    const totalDays = diferenceBetweenDates(now, birthday);
    const totalTime = convertDays(totalDays);
    console.log(totalTime)

    return <StyledAgeCalculator>
        <StyledInputs>
            <DateInput id='day' title='day' placeholder='DD'/>
            <DateInput id='month' title='month' placeholder='MM'/>
            <DateInput id='year' title='year' placeholder='YYYY'/>
        </StyledInputs>
        <Arrow HandleClick= {() => setAge[age]} />
        <div>
            <AgeResult number='--' data='years'/>
            <AgeResult number='--' data='months'/>
            <AgeResult number='--' data='days'/>
        </div>
    </StyledAgeCalculator>
}



export default AgeCalculator