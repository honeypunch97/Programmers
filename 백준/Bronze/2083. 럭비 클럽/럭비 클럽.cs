using System;

class Program
{
    static void Main()
    {
        while (true)
        {
            string input = Console.ReadLine();
            if (input == "# 0 0") break;

            string[] tokens = input.Split();
            string name = tokens[0];
            int age = int.Parse(tokens[1]);
            int weight = int.Parse(tokens[2]);

            string classification = (age > 17 || weight >= 80) ? "Senior" : "Junior";

            Console.WriteLine($"{name} {classification}");
        }
    }
}