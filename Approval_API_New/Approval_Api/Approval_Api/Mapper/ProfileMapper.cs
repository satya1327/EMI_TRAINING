using Approval_Api.DataModel.DTO;
using Approval_Api.DataModel_.entities;
using AutoMapper;

namespace Approval_Api.Mapper
{
    public class ProfileMapper : Profile
    {
        public ProfileMapper()
        {
            CreateMap<Request, RequestDTO>().ReverseMap();
        }
    }
}

