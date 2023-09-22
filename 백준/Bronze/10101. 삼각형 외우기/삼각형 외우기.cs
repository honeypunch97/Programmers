using System;

class Program
{
    static void Main(string[] args)
    {
        int angle1 = int.Parse(Console.ReadLine());
        int angle2 = int.Parse(Console.ReadLine());
        int angle3 = int.Parse(Console.ReadLine());

        if (angle1 + angle2 + angle3 == 180)
        {
            if (angle1 == 60 && angle2 == 60 && angle3 == 60)
            {
                Console.WriteLine("Equilateral");
            }
            else if (angle1 == angle2 || angle2 == angle3 || angle1 == angle3)
            {
                Console.WriteLine("Isosceles");
            }
            else
            {
                Console.WriteLine("Scalene");
            }
        }
        else
        {
            Console.WriteLine("Error");
        }
    }
}