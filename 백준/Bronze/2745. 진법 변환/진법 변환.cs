using System;

namespace BaseConversion
{
    class Program
    {
        static int CharToDigit(char c)
        {
            if (char.IsDigit(c))
            {
                return c - '0';
            }
            else
            {
                return c - 'A' + 10;
            }
        }

        static int ConvertToDecimal(string number, int baseValue)
        {
            int decimalValue = 0;
            int power = 0;

            for (int i = number.Length - 1; i >= 0; i--)
            {
                int digit = CharToDigit(number[i]);
                decimalValue += digit * (int)Math.Pow(baseValue, power);
                power++;
            }

            return decimalValue;
        }

        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split();
            string number = input[0];
            int baseValue = int.Parse(input[1]);

            int decimalValue = ConvertToDecimal(number, baseValue);
            Console.WriteLine(decimalValue);
        }
    }
}