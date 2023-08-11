const today: Date = new Date();
const year: number = today.getFullYear();
const month: number = today.getMonth() + 1;
const date: number = today.getDate();
const format: string = `${year.toString()}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
console.log(format);
