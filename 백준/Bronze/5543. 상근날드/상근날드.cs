using System;

class Program
{
    static void Main()
    {
        int[] burgerPrices = new int[3];
        int[] drinkPrices = new int[2];

        for (int i = 0; i < 3; i++)
        {
            burgerPrices[i] = int.Parse(Console.ReadLine());
        }

        for (int i = 0; i < 2; i++)
        {
            drinkPrices[i] = int.Parse(Console.ReadLine());
        }

        int cheapestSet = int.MaxValue;

        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 2; j++)
            {
                int setPrice = burgerPrices[i] + drinkPrices[j] - 50;
                cheapestSet = Math.Min(cheapestSet, setPrice);
            }
        }

        Console.WriteLine(cheapestSet);
    }
}