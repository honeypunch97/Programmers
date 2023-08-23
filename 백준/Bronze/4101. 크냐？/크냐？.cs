using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Baekjoon
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                string[] input = Console.ReadLine().Split();
                int x = int.Parse(input[0]);
                int y = int.Parse(input[1]);
                
                if (x == 0 && y == 0) break;

                int z = x - y;
                string result = (z > 0) ? "Yes" : "No";
                Console.WriteLine(result);
            }
            
        }
    }
}