using System;

class Program
{
    static void Main(string[] args)
    {
        int month = int.Parse(Console.ReadLine());
        int day = int.Parse(Console.ReadLine());

        string result = (month < 2 || (month == 2 && day < 18)) ? "Before" :
                        (month > 2 || (month == 2 && day > 18)) ? "After" :
                        "Special";

        Console.WriteLine(result);
    }
}