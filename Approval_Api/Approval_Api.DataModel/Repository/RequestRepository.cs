using Approval_Api.DataModel.DTO;
using Approval_Api.DataModel.Repository.Interface;
using Approval_Api.DataModel_.entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Approval_Api.DataModel.Repository
{
    public class RequestRepository : IRequestRepository
    {
        private readonly Approval_DatabaseContext _databaseContext;
        public RequestRepository(Approval_DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

       
        public List<Request> GetAllRequest()
        {
            var data = _databaseContext.Requests.ToList();
            return data;
           
        }

        public Request GetRequestById(int id)
        {
            try
            {
                Request request = _databaseContext.Requests.FirstOrDefault(x => x.ReqId == id);
                if (request != null)
                {
                    _databaseContext.Entry(request).State = EntityState.Detached;
                    return request;
                }
                return null;
            }
            catch
            {
                throw;
            }
        }
        public int AddRequest(RequestDTO request)
        {
            var data = _databaseContext.Add(request);
            if (data == null)
            {
                return 0;
            }
            else
            {
                _databaseContext.Add(data);
                _databaseContext.SaveChanges();
                return 1;
            }
        }

        public int DeleteRequest(int id)
        {
            var data = _databaseContext.Requests.Find(id);
            if (data == null)
                return 0;
            else
                _databaseContext.Remove(data);
            _databaseContext.SaveChanges();
            return 1;
        }

        public int UpdateRequest(Request request,int id)
        {
            var data = _databaseContext.Requests.Find(id);
            if (id == null)
            {
                return 0;
            }
            else
            {
               var updatedata=new RequestDTO()
                {
                    ReqId = id,
                    AdvAmount = data.AdvAmount,
                    Description = data.Description,
                    Date = data.Date,
                    EstimatedAmount = data.EstimatedAmount,
                    UserId = data.UserId,
                    Approver = data.Approver
                };
                _databaseContext.Update(updatedata);
                _databaseContext.SaveChanges();
                return 1;
                
            }
        }


    }
}
