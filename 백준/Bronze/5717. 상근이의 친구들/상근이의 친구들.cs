using System;

class Program
{
    static void Main(string[] args)
    {
        while (true)
        {
            string[] input = Console.ReadLine().Split();
            int M = int.Parse(input[0]);
            int F = int.Parse(input[1]);

            if (M == 0 && F == 0)
                break;

            int totalFriends = M + F;
            Console.WriteLine(totalFriends);
        }
    }
}