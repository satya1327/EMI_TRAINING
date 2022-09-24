using System;
using System.Collections.Generic;

#nullable disable

namespace Approval_Api.DataModel_.entities
{
    public partial class History
    {
        public int HistoryId { get; set; }
        public int? UserId { get; set; }
        public int? ReqId { get; set; }
        public int? CommentId { get; set; }

        public virtual Comment Comment { get; set; }
        public virtual Request Req { get; set; }
        public virtual User User { get; set; }
    }
}
