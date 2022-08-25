using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank
{
    class Errors : Exception
    {
        public Errors(string ErrorMsg)
            : base(ErrorMsg)
        {

        }

    }
    class Accounts
    {
        
        public string Acc_no = "", Customer_name = "", Customer_address = "";
        public double Balance = 0;
        int Age;
        public Accounts() { }
        public Accounts(String Acc_no, string C_name, int Age, String C_add, double Balance)
        {
         
            this.Acc_no = Acc_no;
            this.Customer_name = C_name;
            this.Customer_address = C_add;
            this.Balance = Balance;
        }

        public int Create_Acc()
        {
            //for (int i = 0; i < index.Length;i++ )
            //{

            //}
            try
            {
                Console.Write("Enter The Account Number:\t");
                Acc_no = Console.ReadLine();
                if (Acc_no == null)
                    throw new Errors("You must enter the Account number!");

                Console.Write("Enter The Customer Name:\t");
                Customer_name = Console.ReadLine();
                if (Customer_name == null)
                    throw new Errors("You must enter the Account number!");

                Console.Write("Age:\t\t\t\t");
                Age = int.Parse(Console.ReadLine());
                if (Age <= 0)
                    throw new Errors("You must enter the Account number!");

                Console.Write("Enter The Address:\t\t");
                Customer_address = Console.ReadLine();
                if (Customer_name == null)
                    throw new Errors("You must enter the Account number!");

                Console.Write("Deposite amount:\t\t");
                Balance = double.Parse(Console.ReadLine());
                if (Balance <= 0)
                    throw new Errors("You must enter the Account number!");
            }
            catch (Errors e)
            {
                Console.Write(e.Message);
            }

            return 1;

        }

        public void Acc_Availability(string Acc_num)
        {
            if (Acc_no.Equals(Acc_num))
            {
                Console.WriteLine("-----------------------------****************-----------------------------");
                Console.WriteLine("Account Number:\t" + Acc_no);
                Console.WriteLine("Name:\t\t" + Customer_name);
                Console.WriteLine("Age:\t\t" + Age);
                Console.WriteLine("Address:\t" + Customer_address);
                Console.WriteLine("Balance: \t$" + Balance);
                Console.WriteLine("-----------------------------****************-----------------------------");
            }
            else
            {
                Console.WriteLine("Account does not exist!");
            }
        }
        public void Deposite(string Acc_num)
        {
            try
            {


                if (Acc_no.Equals(Acc_num))
                {
                    Console.Write("Enter the amount:\t\t");
                    int Amount = int.Parse(Console.ReadLine());
                    if (Amount <= 0)
                        throw new Errors("Amount must be larger than $0");
                    else
                        this.Balance = Balance + Amount;

                    Console.WriteLine("---------------------****************-----------------------");
                    Console.WriteLine("Balance is:  $" + Balance);
                    Console.WriteLine("---------------------****************-----------------------");
                }
                else
                {
                    Console.WriteLine("Account does not exist!");
                }
            }
            catch (Errors e)
            {
             
                Console.WriteLine(e.Message);
              
            }
        }
        public void Withdraw(string Acc_num)
        {
            if (Acc_no.Equals(Acc_num))
            {
                Console.Write("Enter the amount:\t\t");
                int Amount = int.Parse(Console.ReadLine());
                if (Balance == 0)
                {
                    Console.WriteLine("Insufficient balance");

                }
                else if (Amount > Balance)
                {
                    Console.WriteLine("Insufficient balance");
                }
                else
                {
                    Balance = Balance - Amount;
                    Console.WriteLine("Balance: $" + Balance);
                }
            }
            else
            {
                Console.WriteLine("Account does not exist!");
            }
        }
        public void Balenquiry()
        {
            Console.WriteLine("Your baance is: " + Balance);
        }

    }
    class Program
    {
        static void Main(string[] args)
        {
            
            int result;
            String Acc_num;
            int ch;
            Accounts Acc = new Accounts();
            


            for (; ; )
            {
                Console.WriteLine("----------------------------------------------------------------------");
                Console.WriteLine("1.New Acoount\t2.Enquiry_of_account\t3.Deposit\t4.Withdraw\t5.Exit");
                Console.WriteLine("----------------------------------------------------------------------");
                ch =int.Parse( Console.ReadLine());

                switch (ch)
                {
                    case 1:

                        result = Acc.Create_Acc();
                        if (result == 1)
                        {
                            Console.WriteLine("Account number \"{0}\" Created Successfuly", Acc.Acc_no);
                        }
                        else
                        {
                            Console.WriteLine("Account could not be created! Try again.");
                        }

                        break;

                    case 2:

                        Console.Write("Enter the Account Number:\t");
                        Acc_num = Console.ReadLine();
                        Acc.Acc_Availability(Acc_num);
                        break;

                    case 3:

                        Console.Write("Enter the Account Number:\t");
                        Acc_num = Console.ReadLine();
                        Acc.Deposite(Acc_num);
                        break;

                    case 4:

                        Console.Write("Enter The Customer Account Number:  ");
                        Acc_num = Console.ReadLine();
                        Acc.Withdraw(Acc_num);
                        break;

                    case 5:

                        System.Environment.Exit(0);
                        break;

                    default:

                        Console.WriteLine("invalid choice!");
                        break;
                }
            }
        }
      

    }
}