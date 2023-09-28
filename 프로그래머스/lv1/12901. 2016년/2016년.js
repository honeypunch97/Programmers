function solution(a, b) {
    const dayArr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const dDay = new Date(2016,a-1,b);
    console.log(dDay);
    let answer = dayArr[dDay.getDay()];
    return answer;
}