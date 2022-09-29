

using Approval_Api.ServiceModel.DTO.Response;
using Approval_Api.DataModel.Repository.Interface;
using Approval_Api.DataModel_.entities;
using Approval_Api.Services.Interface;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Approval_Api.Services
{
    public class RequestServices : IRequestServices
    {
        private readonly IRequestRepository _requestRepository;
        public RequestServices(IRequestRepository requestRepository)
        {
            _requestRepository = requestRepository;
        }

        public int AddRequest(Request request)
        {
            return _requestRepository.AddRequest(request);
        }

        public int DeleteRequest(int id)
        {
           return _requestRepository.DeleteRequest(id);
        }

        public List<RequestDetailsDTO> GetAllRequest()
        {
            return  _requestRepository.GetAllRequest();
        }

        public Request GetRequestById(int id)
        {
          return _requestRepository.GetRequestById(id);
        }

        public List<Request> GetTotalApprovedRequest()
        {
            return _requestRepository.GetTotalApprovedRequest();
        }

        public List<Request>GetTotalRejectedRequest()
        {
            return _requestRepository.GetTotalRejectedRequest();
        }

        public int GetTotalRequest()
        {
            return _requestRepository.GetTotlRequest();
        }

        public int UpdateRequest(Request request, int id)
        {
           return _requestRepository.UpdateRequest(request, id);
        }
        //public int RejectRequest(Request request, int id)
        //{
        //    return _requestRepository.ActionRequest(request, id);
        //}

        public int ActionRequest(Request request, int id)
        {
            return _requestRepository.ActionRequest(request, id);
        }

        //public int ApprovedRequest(Request request,int id)
        //{
        //    return _requestRepository.ApprovedRequest(request, id);
        //}
    }
}
