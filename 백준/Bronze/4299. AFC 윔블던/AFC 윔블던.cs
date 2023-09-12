using System;
using System.IO;

class Program
{
    static void Main()
    {
        string[] input = Console.ReadLine().Split();
        int sum = int.Parse(input[0]);
        int diff = int.Parse(input[1]);

        int aScore = (sum + diff) / 2;
        int bScore = (sum - diff) / 2;

        if (aScore >= 0 && bScore >= 0 && (aScore + bScore) == sum && Math.Abs(aScore - bScore) == diff)
        {
            Console.WriteLine($"{Math.Max(aScore, bScore)} {Math.Min(aScore, bScore)}");
        }
        else
        {
            Console.WriteLine("-1");
        }
    }
}