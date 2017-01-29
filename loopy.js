function loopy(number){
if(number % 3 === 0 && number % 4 === 0){return(number + " is divisible by 3 and 4")}
else if(number % 4 === 0){return(number+ " is divisible by 4 not 3")}
else if(number % 3 === 0){return(number + " is divisible by 3 not 4")}
else{return(number + " isnt divisible by 3 nor 4")}
}
for (var number = 100; number <= 200; number = number + 1)
  console.log(loopy(number));