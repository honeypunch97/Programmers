function solution(myString) {
    return myString.split('').map(item=>item.charCodeAt()<'l'.charCodeAt()?'l':item).join('')
}