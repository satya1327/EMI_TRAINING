﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Approval_Api.DataModel_.entities
{
    public partial class Role
    {
        public Role()
        {
            Employees = new HashSet<Employee>();
        }

        public int RoleId { get; set; }
        public string RoleName { get; set; }

        public virtual ICollection<Employee> Employees { get; set; }
    }
}
