using System;

class Program
{
    static void Main()
    {
        string[] inputA = Console.ReadLine().Split(' ');
        string[] inputB = Console.ReadLine().Split(' ');
        string[] inputC = Console.ReadLine().Split(' ');

        int[] workTimeA = CalculateWorkTime(inputA);
        int[] workTimeB = CalculateWorkTime(inputB);
        int[] workTimeC = CalculateWorkTime(inputC);

        Console.WriteLine($"{workTimeA[0]} {workTimeA[1]} {workTimeA[2]}");
        Console.WriteLine($"{workTimeB[0]} {workTimeB[1]} {workTimeB[2]}");
        Console.WriteLine($"{workTimeC[0]} {workTimeC[1]} {workTimeC[2]}");
    }

    static int[] CalculateWorkTime(string[] timeInput)
    {
        int[] startTime = Array.ConvertAll(timeInput, int.Parse);
        int startSeconds = startTime[0] * 3600 + startTime[1] * 60 + startTime[2];

        int[] endTime = Array.ConvertAll(timeInput, int.Parse);
        int endSeconds = endTime[3] * 3600 + endTime[4] * 60 + endTime[5];

        int totalSeconds = endSeconds - startSeconds;
        return new int[] { totalSeconds / 3600, (totalSeconds / 60) % 60, totalSeconds % 60 };
    }
}