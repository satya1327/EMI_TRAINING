
using Approval_Api.DataModel.Repository.Interface;
using Approval_Api.DataModel_.entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;
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
        public int AddRequest(Request request)
        {
          
            if (request == null)
            {
                return 0;
            }
            else
            {
                if (request.EstimatedAmount <= 200000)
                {
                    request.Approver = "Nagaraja";
                    request.Comments = "NULL";
                }
                else
                {
                    request.Approver = "Jurgen";
                    request.Comments = "NULL";
                }
                _databaseContext.Requests.Add(request);
                
              
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
            try
            {
                var data = _databaseContext.Requests.Find(id);
                if (data!= null)
                {
                   
                    if(request.StatusId == 3)
                    {
                        data.StatusId = 3;
                        data.Comments = request.Comments;
                    }
                        //   book.CoverFileName=oldbookData.CoverFileName;
                    data.Purpose = request.Purpose;
                    data.Description = request.Description;
                    data.EstimatedAmount = request.EstimatedAmount;
                    data.AdvAmount = request.AdvAmount;
                    data.Date = request.Date;
                    data.UserId = request.UserId;
                    data.Approver = "Nagaraja";

                }
                _databaseContext.Entry(data).State = EntityState.Modified;
                _databaseContext.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }

        }

        public int RejectRequest(Request request, int id)
        {
            try
            {
                var data = _databaseContext.Requests.Find(id);
                if (data != null)
                {

                    if (request.StatusId == 3)
                    {
                        data.StatusId = 3;
                        data.Comments = request.Comments;
                    }
                    //   book.CoverFileName=oldbookData.CoverFileName;
                    
                    data.UserId = request.UserId;
                    

                }
                _databaseContext.Entry(data).State = EntityState.Modified;
                _databaseContext.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }

        }


        public int ApprovedRequest(Request request, int id)
        {
            try
            {
                var data = _databaseContext.Requests.Find(id);
                if (data != null)
                {

                    if (request.StatusId == 2)
                    {
                        data.StatusId = 2;
                        
                    }
                    //   book.CoverFileName=oldbookData.CoverFileName;

                    data.UserId = request.UserId;
                    data.Approver = "Nagaraja";

                }
                _databaseContext.Entry(data).State = EntityState.Modified;
                _databaseContext.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }

        }

        public int GetTotlRequest()
        {
            var data = _databaseContext.Requests.Select(x=>x.ReqId).Count();
            return data;
        }

        public List<Request> GetTotalApprovedRequest()
        {
            var status = _databaseContext.Requests.Select(x=>x).Where(x=>x.StatusId==2).ToList();
            
            return status;
        }
        public List<Request> GetTotalRejectedRequest()
        {
            var status=_databaseContext.Requests.Select(x=>x).Where(x=>x.StatusId==3).ToList();
            return status;
        }

        

       
    }
}
