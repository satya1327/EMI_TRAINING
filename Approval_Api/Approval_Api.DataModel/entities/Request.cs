using System;
using System.Collections.Generic;

#nullable disable

namespace Approval_Api.DataModel_.entities
{
    public partial class Request
    {
        public Request()
        {
            Histories = new HashSet<History>();
            Uploads = new HashSet<Upload>();
        }

        public int ReqId { get; set; }
        public int? UserId { get; set; }
        public string Purpose { get; set; }
        public string Description { get; set; }
        public decimal? EstimatedAmount { get; set; }
        public decimal? AdvAmount { get; set; }
        public int? StatusId { get; set; }
        public int? ActionId { get; set; }
        public int? UploadId { get; set; }
        public int? CommentId { get; set; }
        public string Approver { get; set; }
        public DateTime? Date { get; set; }

        public virtual Comment Comment { get; set; }
        public virtual Status Status { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<History> Histories { get; set; }
        public virtual ICollection<Upload> Uploads { get; set; }
    }
}
