using Approval_Api.DataModel_.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Approval_Api.DataModel_.Repository
{
    public interface IUserRepository
    {
        List<User> GetAllUsers();
        User GetUserById(int id);
        int AddUser(User user);
        int UpdateUser(User user,int id);
        int DeleteUser(int id);
    }
}
