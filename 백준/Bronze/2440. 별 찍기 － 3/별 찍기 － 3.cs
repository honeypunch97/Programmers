using System;

class Program
{
    static void Main() {
        int n=int.Parse(Console.ReadLine());
        for(int i=n;i>=1;i--){
            for(int j=0;j<i;j++){
                Console.Write("*");
            }
            Console.WriteLine();
        }
    }
}