function solution(num_list) {
    let even=[],odd=[],answer=[];
    even=num_list.filter(item=>item%2===0);
    odd=num_list.filter(item=>item%2===1);
    answer[0]=even.length;
    answer[1]=odd.length;
    return answer;
}