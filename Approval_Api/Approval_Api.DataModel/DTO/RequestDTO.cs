﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Approval_Api.DataModel.DTO
{
    public class RequestDTO
    {
        [Key]
        public int ReqId { get; set; }
        public int? UserId { get; set; }
        public string Purpose { get; set; }
        public string Description { get; set; }
        public decimal? EstimatedAmount { get; set; }
        public decimal? AdvAmount { get; set; }
        public string Approver { get; set; }
        public DateTime? Date { get; set; }
    }
}
