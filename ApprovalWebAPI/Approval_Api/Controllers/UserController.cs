using Approval_Api.DataModel_.entities;
using Approval_Api.ServiceModel.DTO.Response;
using Approval_Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Approval_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpGet("GetAllUser")]
        public async Task<ActionResult<List<UserViewModelDTO>>> GetAllUser()
        {
            var data = _userService.GetAllUsers().ToList();
            if (data == null)
                return NotFound("No data found");
            else
                return Ok(data);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<User>>GetUserById(int id)
        {
            var data=_userService.GetUserById(id);
            if (data == null)
                return NotFound("please enter correct id");
            else
                return Ok(data);
        }
        [HttpPost("AddUser")]
        public async Task<ActionResult<User>>AddUser(User user)
        {
            if (user == null)
                return BadRequest("insert data");
            else
                _userService.AddUser(user);
            return Ok("user added successfully");
        }

        [HttpPut("UpdateRequest")]
        public async Task<ActionResult<User>>UpdateUser(User user,int id)
        {
            if (user == null)
            {
                return BadRequest("no data found");
            }
            else
            {
                _userService.UpdateUser(user, id);
                return Ok("update successfully");
            }
        }
        [HttpDelete("DeleteUser{id:int}")]
        public async Task<ActionResult<User>>DeleteUser(int id)
        {
            var data=_userService.DeleteUser(id);
            if (data == null)
                return BadRequest("please specify id");
            else
                return Ok($"User deleted with id{id}");
        }



      


    }
}
