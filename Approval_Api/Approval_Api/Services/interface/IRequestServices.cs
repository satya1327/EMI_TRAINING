﻿using Approval_Api.DataModel.DTO;
using Approval_Api.DataModel_.entities;
using System.Collections.Generic;

namespace Approval_Api.Services.Interface
{
    public interface IRequestServices
{
        List<Request> GetAllRequest();
        Request GetRequestById(int id);
        int AddRequest(RequestDTO request);
        int DeleteRequest(int id);
        int UpdateRequest(Request request,int id);
}
}
