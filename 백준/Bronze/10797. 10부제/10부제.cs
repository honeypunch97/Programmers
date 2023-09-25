using System;

class Program
{
    static void Main()
    {
        int dateDigit = int.Parse(Console.ReadLine());
        string[] carNumbers = Console.ReadLine().Split();
        int violationCount = 0;

        foreach (string carNumber in carNumbers)
        {
            int lastDigit = int.Parse(carNumber);
            if (dateDigit == lastDigit)
            {
                violationCount++;
            }
        }

        Console.WriteLine(violationCount);
    }
}