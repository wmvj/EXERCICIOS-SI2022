let num = 1
while(num <=100){
    if(num <=50 && num % 2 === 0){
        console.log(num + ' (par)')
    } else if (num > 50 && num % 2 !== 0){
        console.log(num + ' (impar)')        
    }
    num++
}