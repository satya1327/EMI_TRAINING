using Approval_Api.DataModel_.entities;
using Approval_Api.Services.Interface;
using Approval_Api.Mapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Approval_Api.ServiceModel.DTO.Response;
using Approval_Api.ServiceModel.DTO.Request;

namespace Approval_Api.Controllers
{
    public class RequestStatusController:ControllerBase
    {
        IMapper _mapper;
        private readonly IRequestServices _services;
        public RequestStatusController(IRequestServices services, IMapper mapper)
        {
            _services = services;
            _mapper = mapper;
        }
        [HttpGet("TotalRequest")]
        public async Task<ActionResult<int>> GetTotalRequest()
        {
            var data = _services.GetTotalRequest();
            if (data == null)
            {
                return BadRequest("No record found");
            }
            return Ok($"Total record is {data}");
        }

        [HttpGet("TotalApprovedRequest")]
        public async Task<ActionResult<List<RequestDetailsDTO>>> GetTotalApprovedRequest()
        {
            var data = _services.GetTotalApprovedRequest();
            if (data == null)
                return BadRequest("no approved request found");
            else
            {
                var response = _mapper.Map<List<RequestDetailsDTO>>(data);
                return Ok(response);
            }
        }

        [HttpGet("TotalRejectedRequest")]
        public async Task<ActionResult<List<RequestDetailsDTO>>> GetTotalRejectedRequest()
        {
            var data = _services.GetTotalRejectedRequest();
            if (data == null)
                return BadRequest("no approved request found");

            else
            {
                var response = _mapper.Map<List<RequestDetailsDTO>>(data);
                return Ok(response);
            }
        }
       


    }
}
