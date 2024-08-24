const users = [
    {userId: 1, username: 'Tom', attributes:['Nice', 'cute']},
    {userId: 2, username: 'Mike', attributes:['lovely']},
    {userId: 3, username: 'Nico', attributes:['Nice', 'cool']},
];
const usernameq = users.map(user => user.attributes);
const usernameq1 = users.map(user => user.attributes).flat();
const usernameq2 = users.flatMap(user => user.attributes);
console.log(usernameq);
console.log(usernameq1);
console.log(usernameq2);


const calendars = {
    primaryCalendars : [
        {
            starDate: new Date(2024,10,10,15),
            endDate: new Date(2024, 10,10,15,30),
            tittle: 'Cita 1',
        },
        {
            starDate: new Date(2024,10,10,17),
            endDate: new Date(2024, 10,10,18),
            tittle: 'Cita 2',
        },
    ],
    secondaryCalendars: [
        {
            starDate: new Date(2024,10,10,12),
            endDate: new Date(2024, 10,10,18),
            tittle: 'Cita 3',
        },        {
            starDate: new Date(2024,10,10,9),
            endDate: new Date(2024, 10,10,10),
            tittle: 'Cita 4',
        }

    ],
}


const rtaCalenfdar = Object.values(calendars);
console.log(rtaCalenfdar);
const rtaCalenfdar1 = Object.values(calendars).flatMap(item => {
    return item.map(date => date.starDate)});
console.log(rtaCalenfdar1);
