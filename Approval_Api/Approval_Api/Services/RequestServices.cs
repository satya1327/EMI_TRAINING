


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

        public int AddRequest(RequestDTO request)
        {
            return _requestRepository.AddRequest(request);
        }

        public int DeleteRequest(int id)
        {
           return _requestRepository.DeleteRequest(id);
        }

        public int UpdateRequest(Request request, int id)
        {
           return _requestRepository.UpdateRequest(request, id);
        }

        List<Request> IRequestServices.GetAllRequest()
        {
            return _requestRepository.GetAllRequest();
        }

        Request IRequestServices.GetRequestById(int id)
        {
           return _requestRepository.GetRequestById(id);
        }
    }
}
