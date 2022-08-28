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
        public string Account_number = "", name = "", location = "",email="",state="",country="",type;
        public double Balance = 0;
        public int age;

        public Accounts()
        {

        }



        public Accounts(string acc_number, string c_name, string c_location,string c_state,string c_email,string c_country, double bal)
        {
            this.Account_number = acc_number;
            this.name = c_name;
            this.location = c_location;
            this.state = c_state;
            this.country= c_country;
            this.email = c_email;
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
                    Account_number = Convert.ToString("Sav"+newAccountNumber);

                    if (Account_number == "")
                        throw new Errors("must enter the account number");


                    Write("enter the name of the customer : ");
                    name = ReadLine();

                    if (name == "")
                        throw new Errors("must enter the name of the customer");


                    Write("enter the location of the customer : ");
                    location = ReadLine();

                    if (location == "")
                        throw new Errors("must enter the location of the customer");
                   Write("enter the state of the customer : ");
                            state = ReadLine();

                    if (state == "")
                      throw new Errors("must enter the state of the customer");
                    Write("enter the country of the customer : ");
                            country = ReadLine();

                  if (country == "")
                   throw new Errors("must enter the country of the customer");
                   Write("enter the email of the customer : ");
                            email = ReadLine();
                   if (email == "")
                     throw new Errors("must enter the email of the customer");



                            Write("enter the age of the customer : ");
                    age = int.Parse(ReadLine());

                    if (age > 68)
                        throw new Errors("age must be less than 68");

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
                            Account_number = Convert.ToString("Curr" + newAccountNumber);

                            if (Account_number == "")
                                throw new Errors("must enter the account number");


                            Write("enter the name of the customer : ");
                            name = ReadLine();

                            if (name == "")
                                throw new Errors("must enter the name of the customer");


                            Write("enter the location of the customer : ");
                            location = ReadLine();

                            if (location == "")
                                throw new Errors("must enter the location of the customer");
                            Write("enter the state of the customer : ");
                            state = ReadLine();

                            if (state == "")
                                throw new Errors("must enter the state of the customer");
                            Write("enter the country of the customer : ");
                            country = ReadLine();

                            if (country == "")
                                throw new Errors("must enter the country of the customer");
                            Write("enter the email of the customer : ");
                            email = ReadLine();
                            if (email == "")
                                throw new Errors("must enter the email of the customer");



                            Write("enter the age of the customer : ");
                            age = int.Parse(ReadLine());

                            if (age >68)
                                throw new Errors("age must be less than 68");

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


            }
            return 0;
        }

        
        
        public void acc_availability(string acc_number)
        {
            if (Account_number.Equals(acc_number))
            {
                WriteLine("----------------------------------------------------");

                WriteLine($"the name of the customer is : {name}");
                WriteLine($"email of the customer is : {email}");
                WriteLine($"opening balance is: {type}");
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
            if(type=="current"){
                try
                {
                    if (Account_number.Equals(Account_num))
                    {
                        WriteLine("please enter the amount to be withdrawn");
                        double amount = double.Parse(ReadLine());
                        
                           
                        if (amount == 0)
                            throw new Errors("insufficient fund");
                        else if (Balance < 800)
                            throw new Errors("can't be withdrawn");
                        else if (amount > Balance)
                            throw new Errors("insufficient fund available");
                        else
                            Balance = Balance - amount;
                       if (Balance < 800) 
                            Balance = Balance + amount;

                        throw new Errors("can't be withdrawn");

                        

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

        public void balanceEquery(string name)
        {
            if(name.Equals(name))
            WriteLine($"Available balance is {Balance}");
        }
        static void Main(string[] args)
        {
            int result;
            string account_number;
            string name;
            int ch;
            Accounts acc = new Accounts();
            for(; ; )
            {
                WriteLine("-------------------------------------------------------------------------------------------------------------------------");
                WriteLine("1.Create_New_Account\t2.account_availability\t3.balance_enquery\t4.Deposite money\t5.Withdraw money\t6.exit");
                WriteLine("-------------------------------------------------------------------------------------------------------------------------");

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
                        WriteLine("Enter the name : \t");
                        name = ReadLine();
                        acc.balanceEquery(name);
                        break;

                    case 4:
                        WriteLine("Enter the account number");
                        account_number = ReadLine();
                        acc.deposite(account_number);
                        break;
                    case 5:
                        WriteLine("enter the account number");
                        account_number = ReadLine();
                        acc.withdraw(account_number);
                        break;
                    case 6:
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