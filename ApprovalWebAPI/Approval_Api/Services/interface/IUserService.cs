using Approval_Api.DataModel_.entities;
using Approval_Api.ServiceModel.DTO.Response;
using System.Collections.Generic;

namespace Approval_Api.Services
{
    public interface IUserService
    {
  List<UserViewModelDTO> GetAllUsers();
        User GetUserById(int id);
        int AddUser(User user);
        int UpdateUser(User user,int id);
        int DeleteUser(int id);  
    }
}
