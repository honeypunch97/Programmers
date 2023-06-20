function solution(num_list) {
   let oddNum='',evenNum='';
    num_list.map(item=>item%2===0?evenNum+=item:oddNum+=item)
    return Number(oddNum)+Number(evenNum)
}