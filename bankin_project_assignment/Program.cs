using bankin_project_assignment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;


namespace Bank
{
    class Program { 


        static void Main(string[] args)
        {
            int result;
            string account_number;
            int ch;
            Account acc = new Account();
            Transaction T = new Transaction();
            for(; ; )
            {
                WriteLine("----------------------------------------------------------------------------------------------------------");
                WriteLine("1.Create_New_Account\t2.account_availability\t3.Deposite money\t4.Withdraw money\t5.exit");
                WriteLine("----------------------------------------------------------------------------------------------------------");

                ch = int.Parse(ReadLine());
                switch (ch)
                {
                    case 1:
                        result = acc.createAccount();
                        if(result == 1)
                        {
                            WriteLine($"Account create successfully with account number {acc.Account_number}");
                        }
                        else
                        {
                            WriteLine("could't able to create account due to incorrect information");
                        }
                        break;


                    case 2:
                        WriteLine("enter the acocunt number :\t");
                        account_number = ReadLine();
                        acc.acc_availability(account_number);
                        break;

                    case 3:
                        WriteLine("Enter the account number");
                        account_number = ReadLine();
                        T.Deposite(account_number);
                        break;
                    case 4:
                        WriteLine("enter the account number");
                        account_number = ReadLine();
                        T.withdraw(account_number);
                        break;
                    case 5:
                        System.Environment.Exit(0);
                        break;
                    default:
                        WriteLine("invalid choice");
                        break;

                }

            }
        }
    }
    
   
}