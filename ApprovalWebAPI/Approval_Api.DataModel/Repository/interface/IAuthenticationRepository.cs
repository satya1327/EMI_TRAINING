using Approval_Api.DataModel_.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Approval_Api.DataModel_.Repository
{
    public interface IAuthenticationRepository
    {

        User AuthenticateUser(User loginCredentials);
        int RegisterUser(User userData);
        bool CheckUserAvailabity(string userName);

        bool isUserExists(int userId);
    }
}
