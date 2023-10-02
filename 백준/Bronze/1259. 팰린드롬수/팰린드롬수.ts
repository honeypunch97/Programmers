const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string[] = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();

const solution = (input: string[]) => {
   for (let i of input) {
      const str: string[] = i.split('');
      const reverseStr: string[] = [...str].reverse();
      let isPalindrome: boolean = true;

      for (let i = 0; i < str.length; i++) {
         if (str[i] !== reverseStr[i]) isPalindrome = false;
      }
      console.log(isPalindrome ? 'yes' : 'no');
   }
};
solution(input);