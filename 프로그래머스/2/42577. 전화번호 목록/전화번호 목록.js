function solution(phone_book) {
  phone_book.sort();

  return phone_book.every((number, i) => 
    i === phone_book.length - 1 || !phone_book[i + 1].startsWith(number)
  );
}