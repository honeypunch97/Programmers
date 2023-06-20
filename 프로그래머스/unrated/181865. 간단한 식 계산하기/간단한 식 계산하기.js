function solution(binomial) {
   let arr= binomial.split(' ');
    let num1 = Number(arr[0]);
     let num2 = Number(arr[2]);
    switch(arr[1]){
            case('+'):return num1+num2
                    break;
            case('-'):return num1-num2
                    break;
            case('*'):return num1*num2
                    break;
    }
}