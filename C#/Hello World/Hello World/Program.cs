using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter your name : ");
            string userName = Console.ReadLine();
            Console.WriteLine("Hello " + userName + "!");
            Console.ReadKey();

        }
    }
}