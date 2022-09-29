using Approval_Api.ServiceModel.DTO.Response;
using Approval_Api.DataModel_.entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Approval_Api.Services.Interface
{
    public interface IRequestServices
{
        List<RequestDetailsDTO> GetAllRequest();
        Request GetRequestById(int id);
        int AddRequest(Request request);
        public int ActionRequest(Request request, int id);
        //public int ApprovedRequest(Request request, int id);
        int DeleteRequest(int id);
        int UpdateRequest(Request request,int id);

        int GetTotalRequest();
        List<Request> GetTotalApprovedRequest();
       List<Request> GetTotalRejectedRequest();
    }
}
