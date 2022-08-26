using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;


namespace Bank
{
    class Errors:Exception
    {
        public Errors(string ErrorMsg) : base(ErrorMsg)
        {

        }

    }
    class Accounts
    {
        public string Account_number = "", Customer_name = "", Customer_address = "";
        public double Balance = 0;
        public int age;
        public string type;

        public Accounts()
        {

        }



        public Accounts(string acc_number, string c_name, string c_address, double bal)
        {
            this.Account_number = acc_number;
            this.Customer_name = c_name;
            this.Customer_address = c_address;
            this.Balance = bal;
            

        }


        public int create_account()
        {
            WriteLine("choose the account type:");
            WriteLine("1.saving account\t2.current account");
            int ch;
            ch =int.Parse( ReadLine());
            switch (ch) {
                case 1:
            try
            {
                {
                    this.type = "savings";
                    Random random = new Random();
                    long newAccountNumber = random.Next(32000000, 33000000);
                    Account_number = Convert.ToString(newAccountNumber);

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

                    if (Balance <500)
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
                            Account_number = Convert.ToString(newAccountNumber);

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

                            if (Balance <800 )
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



        public void deposite(string Account_num)
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
            catch(Errors e)
            {
                WriteLine(e.Message);
            }


        }



        public void withdraw(string Account_num)
        {
            try
            {
                if (Account_number.Equals(Account_num))
                {
                    WriteLine("please enter the amount to be withdrawn");
                    double amount = double.Parse(ReadLine());
                    if (amount == 0)
                        throw new Errors("insufficient fund");
                    else if (amount > Balance)
                        throw new Errors("insufficient fund available");
                    else
                        Balance = Balance - amount;
                    WriteLine("---------------------------------------");
                    WriteLine($"The available amount is {Balance}");
                    WriteLine("---------------------------------------");
                }
            }
            catch(Errors e)
            {
                WriteLine(e.Message);
            }
            
        }

        //public void balanceEquery(string account_number)
        //{
        //    WriteLine($"Available balance is {Balance}");
        //}
        static void Main(string[] args)
        {
            int result;
            string account_number;
            int ch;
            Accounts acc = new Accounts();
            for(; ; )
            {
                WriteLine("----------------------------------------------------------------------------------------------------------");
                WriteLine("1.Create_New_Account\t2.account_availability\t3.Deposite money\t4.Withdraw money\t5.exit");
                WriteLine("----------------------------------------------------------------------------------------------------------");

                ch = int.Parse(ReadLine());
                switch (ch)
                {
                    case 1:
                        result = acc.create_account();
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
                        acc.deposite(account_number);
                        break;
                    case 4:
                        WriteLine("enter the account number");
                        account_number = ReadLine();
                        acc.withdraw(account_number);
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