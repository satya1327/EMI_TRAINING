using Approval_Api.DataModel.DTO;
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

namespace Approval_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        IMapper _mapper;
        private readonly IRequestServices _services;
        public RequestController(IRequestServices services,IMapper mapper)
        {
            _services = services;
            _mapper = mapper;
        }
       
        [HttpGet("GetAllRequest")]
        public async Task<ActionResult<List<RequestDTO>>> GetAllRequest()
        {
            var data = _services.GetAllRequest();
            if (data == null)
                return NotFound("No Data Found");
            else
            {
                var response = _mapper.Map<List<RequestDTO>>(data);
                return Ok(response);
            }
        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult<RequestDTO>> GetRequestById(int id)
        {
            var data = _services.GetRequestById(id);
            if (data == null)
                return NotFound("please specify valid id");
            else
            {
                var response = _mapper.Map<RequestDTO>(data);
                return Ok(response);
            }
        }
        [HttpPost("AddRequest")]
        public async Task<ActionResult<Request>>AddRequest(Request request)
        {
            var data = _services.AddRequest(request);
            if (data == null)
            {
                return BadRequest("please enter valid data");

            }
            else
            {
                return Created("Created successfully",$"Data inserted successfully With Id : {request.ReqId}");
            }
        }

        [HttpDelete("DeleteRequest")]

        public async Task<ActionResult<Request>>DeleteRequest(int id)
        {
            var data = _services.DeleteRequest(id);
            if (data == null)
                return BadRequest("please enter valid id");
            else
                return Ok("successfully deleted");
        }

        [HttpPut("UpadteRequest")]

        public async Task<ActionResult<Request>>UpdateData(Request request,int id)
        {
            

            var data = _services.UpdateRequest(request, id);
            if (data == null)
            {
                return BadRequest("please enter valid data");
            }
            else
            {
                return Ok("successfully modified");
            }

        }
        [HttpGet("TotalRequest")]
        public async Task<ActionResult<int>>GetTotalRequest()
        {
            var data=_services.GetTotalRequest();
            if (data==null)
            {
                return BadRequest("No record found"); 
            }
            return Ok($"Total record is {data}");
        }

        [HttpGet("TotalApprovedRequest")]
        public async Task<ActionResult<int>> GetTotalApprovedRequest()
        {
            var data = _services.GetTotalApprovedRequest();
            if (data == null)
                return BadRequest("no approved request found");
            else
                return Ok($"Total approved Request is : {data}");
        }

        [HttpGet("TotalRejectedRequest")]
        public async Task<ActionResult<int>> GetTotalRejectedRequest()
        {
            var data = _services.GetTotalRejectedRequest();
            if (data == null)
                return BadRequest("no approved request found");
            else
                return Ok($"Total approved Request is : {data}");
        }







    }
}
