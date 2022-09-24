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
        [HttpPost]
        public async Task<int>AddRequest(RequestDTO request)
        {
            var data = _services.AddRequest(request);
            if (data == null)
            {
                return 0;

            }
            else
            {
                return 1;
            }
        }

        [HttpDelete]

        public async Task<int>DeleteRequest(int id)
        {
            var data = _services.DeleteRequest(id);
            if (data == null)
                return 0;
            else
                return 1;
        }

        [HttpPut]

        public async Task<int>UpdateData(Request request,int id)
        {
            var data = _services.UpdateRequest(request, id);
            if (data == null)
            {
                return 0;
            }
            else
            {
                return 1;
            }

        }



     
        


    }
}
