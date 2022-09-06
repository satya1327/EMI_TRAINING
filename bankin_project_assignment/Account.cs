using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace bankin_project_assignment
{
    internal class Account : IAccounts
    {
        public string Account_number { get; set; }
        public string Customer_name { get; set; }
        public string Customer_address { get; set; }

        private double Balance = 0;
        private int age;
        private string type;

        public Account()
        {

        }



        public Account(string acc_number, string c_name, string c_address, double bal)
        {
            this.Account_number = acc_number;
            this.Customer_name = c_name;
            this.Customer_address = c_address;
            this.Balance = bal;


        }
        public int createAccount()
        {
            WriteLine("choose the account type:");
            WriteLine("1.saving account\t2.current account");
            int ch;
            ch = int.Parse(ReadLine());
            switch (ch)
            {
                case 1:
                    try
                    {
                        {
                            this.type = "Savings";
                            Random random = new Random();
                            long newAccountNumber = random.Next(32000000, 33000000);
                            Account_number = Convert.ToString("Sav" + "" + newAccountNumber);

                            if (Account_number == "")
                                throw new Errors("must enter the account number");


                            Write("enter the name of the customer : ");
                            Customer_name = ReadLine();

                            if (Customer_name == "")
                                throw new Errors("must enter the name of the customer");


                            Write("enter the address of the customer : ");
                            Customer_address = ReadLine();

                            if (Customer_address == "")
                                throw new Errors("must enter the address of the customer");


                            Write("enter the age of the customer : ");
                            age = int.Parse(ReadLine());

                            if (age < 0)
                                throw new Errors("age must be above zero");

                            Write("enter the amount to be deposited : ");
                            Balance = double.Parse(ReadLine());

                            if (Balance < 500)
                                throw new Errors("entered deposite amount must greater than 500 \n");
                        }
                        return 1;

                    }
                    catch (Errors e)
                    {
                        Write(e.Message);
                    }


                    break;

                case 2:
                    try
                    {
                        {
                            this.type = "current";
                            Random random = new Random();
                            long newAccountNumber = random.Next(32000000, 33000000);
                            Account_number = Convert.ToString("Curr" + "" + newAccountNumber);

                            if (Account_number == "")
                                throw new Errors("must enter the account number");


                            Write("enter the name of the customer : ");
                            Customer_name = ReadLine();

                            if (Customer_name == "")
                                throw new Errors("must enter the name of the customer");


                            Write("enter the address of the customer : ");
                            Customer_address = ReadLine();

                            if (Customer_address == "")
                                throw new Errors("must enter the address of the customer");


                            Write("enter the age of the customer : ");
                            age = int.Parse(ReadLine());

                            if (age < 0)
                                throw new Errors("age must be above zero");

                            Write("enter the amount to be deposited : ");
                            Balance = double.Parse(ReadLine());

                            if (Balance < 800)
                                throw new Errors("entered deposite amount must greater than 800\n");
                        }
                        return 1;

                    }
                    catch (Errors e)
                    {
                        Write(e.Message);
                    }
                    break;




            }
            return 0;
        }
        public void acc_availability(string Account_num)
        {
            if (Account_number.Equals(Account_num))
            {
                WriteLine("----------------------------------------------------");
                WriteLine($"the account number is : {Account_number}");
                WriteLine($"account type  is: {type}");
                WriteLine($"the name of the customer is : {Customer_name}");
                WriteLine($"age of the customer is : {age}");
                WriteLine($"address of the customer is : {Customer_address}");
                WriteLine($"opening balance is: {Balance}");

                WriteLine("-----------------------------------------------------");

            }
            else
            {
                WriteLine("account does not exist");
            }
        }

       
    }
}
