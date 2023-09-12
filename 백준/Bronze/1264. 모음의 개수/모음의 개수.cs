using System;
using System.IO;

class Program
{
    static void Main()
    {
        while (true)
        {
            string line = Console.ReadLine();
            if (line == "#") break;
            int vowelCount = CountVowels(line);
            Console.WriteLine(vowelCount);
        }
    }

    static int CountVowels(string input)
    {
        int count = 0;
        string vowels = "aeiouAEIOU";
        
        foreach (char c in input)
        {
            if (vowels.Contains(c))
            {
                count++;
            }
        }

        return count;
    }
}