export const dateToPrint = (age, setAgeToPrint) => {
	const birthday = new Date(`${age.month}/${age.day}/${age.year}`);
	const now = new Date();
	const totalDays = diferenceBetweenDates(now, birthday);
	const totalTime = convertDays(totalDays);
	setAgeToPrint(totalTime);
};

const convertDays = days => {
	const years = Math.floor(days / 365);
	days = days % 365;
	let months = Math.floor(days / 30);
	days = days % 30;

	const dateTemp = new Date();
	dateTemp.setDate(dateTemp.getDate() + days);
	const lastDayOfMonth = new Date(
		dateTemp.getFullYear(),
		dateTemp.getMonth() + 1,
		0
	).getDate();
	if (days > lastDayOfMonth) {
		days -= lastDayOfMonth;
		months++;
	}

	return { years, months, days };
};

const diferenceBetweenDates = (now, birthday) => {
	const milisecondsPerDay = 86400000; // Número de milisegundos en un día
	const milisecondsBetweenDays = now - birthday; // Calcula la diferencia de tiempo en milisegundos
	const diferenceInDays = Math.floor(
		milisecondsBetweenDays / milisecondsPerDay
	); // Convierte la diferencia en días

	return diferenceInDays;
};
