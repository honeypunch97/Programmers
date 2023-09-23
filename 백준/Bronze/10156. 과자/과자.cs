using System;

class MainClass {
    public static void Main (string[] args) {
        string[] input = Console.ReadLine().Split();
        int K = int.Parse(input[0]);
        int N = int.Parse(input[1]);
        int M = int.Parse(input[2]);

        int totalCost = K * N;
        int shortage = Math.Max(0, totalCost - M);

        Console.WriteLine(shortage);
    }
}