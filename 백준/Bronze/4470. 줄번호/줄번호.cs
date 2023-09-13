using System;

class Program
{
    static void Main(string[] args)
    {
        int N = int.Parse(Console.ReadLine());

        for (int i = 1; i <= N; i++)
        {
            string line = Console.ReadLine();
            Console.WriteLine($"{i}. {line}");
        }
    }
}