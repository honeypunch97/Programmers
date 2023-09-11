using System;

class Program
{
    static void Main()
    {
        string[] input = Console.ReadLine().Split();
        int a = int.Parse(input[0]);
        int b = int.Parse(input[1]);
        int c = int.Parse(input[2]);

        int[] numbers = { a, b, c };
        Array.Sort(numbers);

        Console.WriteLine($"{numbers[0]} {numbers[1]} {numbers[2]}");
    }
}