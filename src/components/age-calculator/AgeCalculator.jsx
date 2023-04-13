import { useState } from "react"
import AgeResult from "../age-result/AgeResult"
import Arrow from "../arrow/Arrow"
import { StyledAgeCalculator, StyledInputs } from "./styles"

const AgeCalculator = (day,month,year) => {
    const [age, setAge] = useState({
        day:0,
        month:0,
        year:0,
    })

    console.log(age);

    return <StyledAgeCalculator>
        <StyledInputs>
            <input id='day' title='day' placeholder='DD' onChange={(e)=> setAge({...age, day: e.target.value})} />
            <input id='month' title='month' placeholder='MM' onChange={(e)=> setAge({...age, month: e.target.value})}/>
            <input id='year' title='year' placeholder='YYYY' onChange={(e)=> setAge({...age, year: e.target.value})}/>
        </StyledInputs>
        <Arrow HandleClick={() => diferenceBetweenDates(age.day, age.month, age.year)}/>
        <div>
            <AgeResult number='--' data=' years'/>
            <AgeResult number='--' data=' months'/>
            <AgeResult number='--' data=' days'/>
        </div>
    </StyledAgeCalculator>
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
    
    const diferenceBetweenDates = (days, months, years) => {
        const birthday = new Date(`${days}/${months}/${years}`)
        const now = new Date();
        const milisecondsPerDay = 86400000; // Número de milisegundos en un día
        const milisecondsBetweenDays = now - birthday // Calcula la diferencia de tiempo en milisegundos
        const diferenceInDays = Math.floor(milisecondsBetweenDays / milisecondsPerDay); // Convierte la diferencia en días
        
        convertDays(diferenceInDays)
    }
    
 




export default AgeCalculator