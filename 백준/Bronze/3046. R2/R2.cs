using System;

class Program
{
    static void Main()
    {
        string[] input = Console.ReadLine().Split();
        int R1 = int.Parse(input[0]);
        int S = int.Parse(input[1]);
        
        int R2 = 2 * S - R1;
        
        Console.WriteLine(R2);
    }
}