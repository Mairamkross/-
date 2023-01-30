// // if(k == )



// let day = new Date().getDate()   //число  //30
// let month = new Date().getMonth()  //месяц//0
// month = month+1
// if(month < 10){
//     month = '0'+ month
// }
// let year = new Date().getFullYear() //год //2023
// console.log(day + ':' + month + ':' + year);




// let data = new Date().toLocaleDateString()  //все в одном
// console.log(data);






// let hours = new Date().getHours()  //часы
// console.log(hours);

// let min = new Date().getMinutes()  //минута
// console.log(min);

// let sec = new Date().getSeconds()  //секунда
// console.log(sec);

// console.log(hours + ':' + min + ':' + sec);


// let time = new Date().toLocaleTimeString()    //все в одном
// console.log(time);





// let hours = new Date().getHours()
// let h1 = document.querySelector('.h1')
// if(hours < 12){
//     h1.innerHTML = 'Доброе утро!!'
//     document.querySelector('.moon').style.background = 'yellow'
// }else if(hours < 17){
//     h1.innerHTML = 'Добрый день!!'
//     document.querySelector('.moon').style.background = 'yellow'
// }else if(hours < 21 || hours < 6){
//     h1.innerHTML = 'Добрый вечер!!'
//     document.querySelector('.moon').style.background = 'white'
//     document.body.style.background = "black"
// }



let month = new Date().getMonth()
month = month+1
let img = document.querySelector('img')
if(month == 1 || month == 2 || month == 3){
    img.src  = 'https://emosurff.com/i/00019J0r3n0a/1386792659_zimnie-peyzazhi-5.jpg'
}else if(month == 4 || month == 5 || month == 6  ){
    img.src = 'https://www.nippon.com/ru/ncommon/contents/japan-glances/187347/187347.jpg'
}else if(month == 7 || month == 8 || month == 9 ){
    img.src = 'https://rg.ru/uploads/images/188/10/95/iStock-931479532.jpg'
}else if(month == 10 || month == 11 || month == 12 ){
    img.src = 'https://i.ytimg.com/vi/N98vU9n4G3o/maxresdefault.jpg'
}










