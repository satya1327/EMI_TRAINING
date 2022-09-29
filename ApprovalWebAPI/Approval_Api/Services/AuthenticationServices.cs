using Approval_Api.DataModel_.entities;
using Approval_Api.DataModel_.Repository;

namespace Approval_Api.Services
{
    public class AuthenticationServices : IAuthenticationServices
    {
        private readonly IAuthenticationRepository _authenticationRepository;
        public AuthenticationServices(IAuthenticationRepository authenticationRepository)
        {
            _authenticationRepository = authenticationRepository;
        }

        public User AuthenticateUser(User loginCredentials)
        {
            return _authenticationRepository.AuthenticateUser(loginCredentials);
        }

        public bool CheckUserAvailabity(string userName)
        {
            throw new System.NotImplementedException();
        }

        public bool isUserExists(int userId)
        {
            throw new System.NotImplementedException();
        }

        public int RegisterUser(User userData)
        {
            throw new System.NotImplementedException();
        }
    }
}
