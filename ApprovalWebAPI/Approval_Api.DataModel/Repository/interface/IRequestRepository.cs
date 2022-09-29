
using Approval_Api.DataModel_.entities;
using Approval_Api.ServiceModel.DTO.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Approval_Api.DataModel.Repository.Interface
{
    public interface IRequestRepository
{
        List<RequestDetailsDTO>GetAllRequest();
         Request GetRequestById(int id);
        int AddRequest(Request request);
        int ActionRequest(Request request, int id);
        

        int DeleteRequest(int id);
        int UpdateRequest(Request request,int id);
        int GetTotlRequest();
        List<Request>GetTotalApprovedRequest();
        List<Request>GetTotalRejectedRequest();

    }
}
