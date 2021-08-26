const RandomPersonGenerator = {
    age() {
        return Math.floor(Math.random()*90 + 10);
    },
    profession() {
        const professions = ['Dentist','Nurse','Electrician','Doctor','Businessman','Surgeon','Soldier','Scientist','News Reporter','Construction Worker','Professor','Police Officer','Pilot','Mechanic','Engineer','Detective','Librarian','Accountant','Architect','Chef'];
        return professions[Math.floor(Math.random() * professions.length)];
    },
    country() {
        const countries = ['Canada','United States of America','Australia','Bahamas','Bangladesh','Costa Rica','Egypt','Estonia','Germany','Hungary','Kuwait','Malaysia','New Zealand','Pakistan','Qatar','Russia','Saudi Arabia','Spain','Turkey'];
        return countries[Math.floor(Math.random() * countries.length)];
    },
    favoriteHobby() {
        const hobbies = ['Acting','Baking','Bowling','Calligraphy','Computer Programming','Fishing','Knitting','Painting','Reading','Creative Writing','Video Gaming','Swimming','Solving Puzzles','Martial Arts','Gardening','Ice Skating','Model Building'];
        return hobbies[Math.floor(Math.random() * hobbies.length)];
    },
};

let randomAge = RandomPersonGenerator.age();
let randomProfession = RandomPersonGenerator.profession();
let randomCountry = RandomPersonGenerator.country();
let favoriteHobby = RandomPersonGenerator.favoriteHobby();

if (randomAge < 14) {
    randomProfession = 'Enjoying youth, too young to work!';
} else if (randomAge >= 14 && randomAge < 25) {
    randomProfession = 'Student, aspiring to achieve great things!';
} else if (randomAge >= 65) {
    randomProfession += ' - Retired';
}; 

const RandomPerson = () => {
    return console.log(`Poof! A Random Person Was Generated
Age: ${randomAge}
Profession: ${randomProfession}
Country Of Residence: ${randomCountry}
Favorite Hobby: ${favoriteHobby}`);
};

RandomPerson();