using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] minGookScores = Console.ReadLine().Split().Select(int.Parse).ToArray();
        int[] manSeScores = Console.ReadLine().Split().Select(int.Parse).ToArray();

        int minGookTotal = minGookScores.Sum();
        int manSeTotal = manSeScores.Sum();

        Console.WriteLine(Math.Max(minGookTotal, manSeTotal));
    }
}