using System;

class Program
{
    static void Main()
    {
        int N = int.Parse(Console.ReadLine());

        for (int i = 0; i < N; i++)
        {
            string name = Console.ReadLine();
            string lowercaseName = name.ToLower();
            Console.WriteLine(lowercaseName);
        }
    }
}