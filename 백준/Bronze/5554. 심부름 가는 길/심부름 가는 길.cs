using System;

class Program
{
    static void Main()
    {
        int totalSeconds = 0;

        for (int i = 0; i < 4; i++)
        {
            totalSeconds += int.Parse(Console.ReadLine());
        }

        int minutes = totalSeconds / 60;
        int seconds = totalSeconds % 60;

        Console.WriteLine(minutes);
        Console.WriteLine(seconds);
    }
}