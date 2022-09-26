using Approval_Api.DataModel_.entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Approval_Api.DataModel_.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly Approval_DatabaseContext _approval_data;
        public UserRepository(Approval_DatabaseContext approval_data)
        {
            _approval_data = approval_data;
        }

        public int AddUser(User user)
        {

            if (user == null)
                return 0;
            else
                user.RoleId = 1;
                _approval_data.Users.Add(user);
            _approval_data.Users.Add(user);
            _approval_data.SaveChanges();
            return 1;
        }

        public int DeleteUser(int id)
        {
            var data = _approval_data.Users.Find(id);
            if (data == null)
                return 0;
            else
                _approval_data.Users.Remove(data);
                _approval_data.SaveChanges();
            return 1;

        }

        public List<User> GetAllUsers()
        {
            var data = _approval_data.Users.ToList();
            return data;
        }

        public User GetUserById(int id)
        {
            var data = _approval_data.Users.Where(x => x.UserId == id).FirstOrDefault();
            return data;
        }

        public int UpdateUser(User user,int id)
        {
            var data=_approval_data.Users.Find(id);
            if (data == null)
                return 0;
            else
                data.UserName = user.UserName;
                data.RoleId = user.RoleId;
                data.FirstName = user.FirstName;
                data.LastName = user.LastName;
                data.Email = user.Email;
                _approval_data.Entry(data).State = EntityState.Modified;
                _approval_data.SaveChanges();
            return 1;
        }

        
    }
}
