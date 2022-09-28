using Approval_Api.DataModel_.entities;
using Approval_Api.DataModel_.Repository;
using Approval_Api.ServiceModel.DTO.Response;
using System.Collections.Generic;

namespace Approval_Api.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public int AddUser(User user)
        {
            return _userRepository.AddUser(user);
        }

        public int DeleteUser(int id)
        {
            return _userRepository.DeleteUser(id);
        }

        public List<UserViewModelDTO> GetAllUsers()
        {
            return _userRepository.GetAllUsers();
        }

        public User GetUserById(int id)
        {
            return _userRepository.GetUserById(id);

        }

        public int UpdateUser(User user,int id)
        {
            return _userRepository.UpdateUser(user,id);
        }
    }
}
