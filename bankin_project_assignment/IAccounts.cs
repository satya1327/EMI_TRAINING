using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bankin_project_assignment
{
    internal interface IAccounts
    {
        public int createAccount();
        public void acc_availability(string Account_num);

    }
}
