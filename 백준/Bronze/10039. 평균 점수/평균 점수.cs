using System;

class Program
{
    static void Main()
    {
        int[] scores = new int[5];

        for (int i = 0; i < 5; i++)
        {
            scores[i] = int.Parse(Console.ReadLine());

            if (scores[i] < 40)
                scores[i] = 40;
        }

        int sum = 0;

        foreach (int score in scores)
        {
            sum += score;
        }

        int average = sum / 5;
        Console.WriteLine(average);
    }
}