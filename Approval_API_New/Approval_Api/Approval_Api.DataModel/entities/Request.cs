using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace Approval_Api.DataModel_.entities
{
    public partial class Request
    {
        //public Request()
        //{
        //    Histories = new HashSet<History>();
        //    Uploads = new HashSet<Upload>();
        //}

        public int ReqId { get; set; }
        public int? UserId { get; set; }
        public string Purpose { get; set; }
        public string Description { get; set; }
        public decimal? EstimatedAmount { get; set; }
        public decimal? AdvAmount { get; set; }
        [JsonIgnore]
        public int? StatusId { get; set; }
        [JsonIgnore]
        public int? ActionId { get; set; }
        [JsonIgnore]
        public int? UploadId { get; set; }
        [JsonIgnore]
        public int? CommentId { get; set; }
        public string Approver { get; set; }
        public DateTime? Date { get; set; }
        [JsonIgnore]
        public virtual Comment Comment { get; set; }
        [JsonIgnore]
        public virtual Status Status { get; set; }
        [JsonIgnore]
        public virtual User User { get; set; }
        [JsonIgnore]
        public virtual ICollection<History> Histories { get; set; }
        [JsonIgnore]
        public virtual ICollection<Upload> Uploads { get; set; }
    }
}
