
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace Approval_Api.DataModel_.entities
{
    public partial class Request
    {
        public Request()
        {
            Uploads = new HashSet<Upload>();
        }

        public int ReqId { get; set; }
        public int? UserId { get; set; }
        public string Purpose { get; set; }
        public string Description { get; set; }
        public decimal? EstimatedAmount { get; set; }
        public decimal? AdvAmount { get; set; }
        public int? StatusId { get; set; }
        public string Approver { get; set; }
        public DateTime? Date { get; set; }
        public string Comments { get; set; }
      
        public virtual Status Status { get; set; }
     
        public virtual User User { get; set; }
     
        public virtual ICollection<Upload> Uploads { get; set; }
    }
}
