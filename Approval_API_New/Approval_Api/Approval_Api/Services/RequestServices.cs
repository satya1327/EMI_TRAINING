


using Approval_Api.DataModel.DTO;
using Approval_Api.DataModel.Repository.Interface;
using Approval_Api.DataModel_.entities;
using Approval_Api.Services.Interface;
using System.Collections.Generic;

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

        public List<Request> GetAllRequest()
        {
            return _requestRepository.GetAllRequest();
        }

        public Request GetRequestById(int id)
        {
          return _requestRepository.GetRequestById(id);
        }

        public int GetTotalApprovedRequest()
        {
            return _requestRepository.GetTotalApprovedRequest();
        }

        public int GetTotalRejectedRequest()
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

     

        
    }
}
