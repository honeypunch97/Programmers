using System;

class Program
{
    static void Main()
    {
        string[] firstLine = Console.ReadLine().Split();
        int N = int.Parse(firstLine[0]);
        int K = int.Parse(firstLine[1]);

        int passengers = K;

        for (int i = 0; i < N; i++)
        {
            string[] stationInfo = Console.ReadLine().Split();
            int A = int.Parse(stationInfo[0]);
            int B = int.Parse(stationInfo[1]);

            passengers += A - B;

            if (passengers < 0)
            {
                Console.WriteLine("비와이");
                return;
            }
        }

        if (passengers >= 0)
        {
            Console.WriteLine("비와이");
        }
    }
}