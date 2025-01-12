﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Approval_Api.DataModel_.entities
{
    public partial class User
    {
        public User()
        {
            Histories = new HashSet<History>();
            Requests = new HashSet<Request>();
        }

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int? RoleId { get; set; }
        public DateTime? JoiningDate { get; set; }

        public virtual Role Role { get; set; }
        public virtual ICollection<History> Histories { get; set; }
        public virtual ICollection<Request> Requests { get; set; }
    }
}
