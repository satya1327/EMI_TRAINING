using Approval_Api.DataModel.DTO;
using Approval_Api.DataModel_.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Approval_Api.DataModel.Repository.Interface
{
    public interface IRequestRepository
{
        List<Request> GetAllRequest();
        Request GetRequestById(int id);
        int AddRequest(Request request);

        int DeleteRequest(int id);
        int UpdateRequest(Request request,int id);
        int GetTotlRequest();
        int GetTotalApprovedRequest();
        int GetTotalRejectedRequest();

    }
}
