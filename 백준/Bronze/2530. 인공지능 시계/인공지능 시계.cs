using System;

class Program
{
    static void Main()
    {
        string[] currentTime = Console.ReadLine().Split();
        int A = int.Parse(currentTime[0]);
        int B = int.Parse(currentTime[1]);
        int C = int.Parse(currentTime[2]);

        int cookingTime = int.Parse(Console.ReadLine());

        int totalSeconds = A * 3600 + B * 60 + C + cookingTime;
        
        int hours = totalSeconds / 3600 % 24;
        int minutes = (totalSeconds % 3600) / 60;
        int seconds = totalSeconds % 60;

        Console.WriteLine($"{hours} {minutes} {seconds}");
    }
}