using System;
using System.Numerics;

namespace boj
{
    class Program
    {
        static void Main(string[] args)
        {
            string str = Console.ReadLine();
            string [] spt = str.Split(' ');
            BigInteger idx1 = BigInteger.Parse(spt[0]);
            BigInteger idx2 = BigInteger.Parse(spt[1]);
            Console.WriteLine(idx1 + idx2);
        }
    }
}