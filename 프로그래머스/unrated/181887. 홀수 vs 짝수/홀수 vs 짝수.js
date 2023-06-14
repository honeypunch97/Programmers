function solution(num_list) {
    let odd=0,even=0;
    num_list.map((item,idx)=>idx%2===0?odd+=item:even+=item);
    return odd>even?odd:even
}