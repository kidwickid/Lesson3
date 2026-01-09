// git config --global user.email "test@gmail.com",
// git config --global user.name "TestName"
// 1. git init
// 2. git add .
// 3. git coomit -m "Init"
// 4. git push  

const code =  ["1111", "5678", "1234", "9999"]
const myPin = "1234"
for(const Pin of code){
    if (Pin != 1234){
        console.log("Неверный пин...");
        continue
    }

    if (Pin === myPin){
        console.log("Пин-код найден!", "Правильный пин-код " + Pin)
        break;  
        
    }
}

// files.push("music.mp3")

// for (const file of files){
//     console.log(file);
// }


    // let fuel = 100; //топливо 

// while (fuel > 0) {
//     console.log("Едем " + "Топливо осталось " + fuel);
//     fuel -= 10; // fuel = fuel - 10;
// }
 
// console.log("Приехали");

// for(СТАРТ; ФИНИШ; ШАГ);

// for (let i = 1; i <= 5; i++){
//     console.log("Отжимание номер " + i);
// }