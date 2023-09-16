using System;

class Program
{
    static void Main(string[] args)
    {
        int L = int.Parse(Console.ReadLine());
        int A = int.Parse(Console.ReadLine());
        int B = int.Parse(Console.ReadLine());
        int C = int.Parse(Console.ReadLine());
        int D = int.Parse(Console.ReadLine());

        int maxFreeDays = Math.Max((A + C - 1) / C, (B + D - 1) / D);
        int result = L - maxFreeDays;

        Console.WriteLine(result);
    }
}