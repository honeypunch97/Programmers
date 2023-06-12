function solution(num_list) {
    let num1 = num_list.reduce((acc,cur)=>acc*cur)
    let num2 = num_list.reduce((acc,cur)=>acc+cur)
    num2=num2*num2
    return num1<num2?1:0;
}