using Bank;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;


namespace bankin_project_assignment
{

    class Errors : Exception
    {
        public Errors(string ErrorMsg) : base(ErrorMsg)
        {

        }

    }
    internal class Transaction : Itransactions
    {
        public int Account_num { get; private set; }
        public int Account_number { get; private set; }


        double Balance = 0;
        string type;

        public void Deposite(string account_number)
        {
            try
            {
                if (Account_number.Equals(Account_num))
                {
                    WriteLine("enter the amount you want to deposite");
                    double amount = double.Parse(ReadLine());
                    if (amount <= 0)
                        throw new Errors("please enter valid amount");
                    else
                        Balance = Balance + amount;

                    WriteLine("--------------------------------------");
                    WriteLine($"Balance is {Balance}");
                    WriteLine("---------------------------------------");
                }
                else
                {
                    WriteLine("Account does not exist");
                }
            }
            catch (Errors e)
            {
                WriteLine(e.Message);
            }
        }

      
        public void withdraw(string account_number)
        {
            if (type == "Savings")
            {
                try
                {
                    if (Account_number.Equals(Account_num))
                    {
                        WriteLine("please enter the amount to be withdrawn");
                        double amount = double.Parse(ReadLine());
                        if ((Balance - amount) > 500)
                        {
                            Balance = Balance - amount;
                        }
                        else
                        {
                            throw new Errors("Change withdraw amount");
                        }
                        WriteLine("---------------------------------------");
                        WriteLine($"The available amount is {Balance}");
                        WriteLine("---------------------------------------");
                    }
                }
                catch (Errors e)
                {
                    WriteLine(e.Message);
                }
            }
            else
            {
                try
                {
                    if (Account_number.Equals(Account_num))
                    {
                        WriteLine("please enter the amount to be withdrawn");
                        double amount = double.Parse(ReadLine());
                        if ((Balance - amount) > 800)
                        {
                            Balance = Balance - amount;
                        }
                        else
                        {
                            throw new Errors("Change withdraw amount");
                        }
                        WriteLine("---------------------------------------");
                        WriteLine($"The available amount is {Balance}");
                        WriteLine("---------------------------------------");
                    }
                }
                catch (Errors e)
                {
                    WriteLine(e.Message);
                }

            }

        }
    }
}
