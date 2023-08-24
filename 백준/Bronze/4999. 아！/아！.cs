using System;

namespace AahhProblem
{
    class Program
    {
        static void Main(string[] args)
        {
            string jaehwanAah = Console.ReadLine();
            string doctorAah = Console.ReadLine();
            if (jaehwanAah.Length >= doctorAah.Length)
            {
                Console.WriteLine("go");
            }
            else
            {
                Console.WriteLine("no");
            }
        }
    }
}