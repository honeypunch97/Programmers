using System;

class Program
{
    static void Main()
    {
        string[] input1 = Console.ReadLine().Split();
        int L = int.Parse(input1[0]);
        int P = int.Parse(input1[1]);

        string[] input2 = Console.ReadLine().Split();
        int[] participants = new int[5];
        for (int i = 0; i < 5; i++)
        {
            participants[i] = int.Parse(input2[i]);
        }

        for (int i = 0; i < 5; i++)
        {
            int diff = participants[i] - (L * P);
            Console.Write(diff + " ");
        }
    }
}