using Approval_Api.DataModel_.entities;

namespace Approval_Api.Services
{
    public interface IAuthenticationServices
    {
        User AuthenticateUser(User loginCredentials);
        int RegisterUser(User userData);
        bool CheckUserAvailabity(string userName);

        bool isUserExists(int userId);
    }
}
