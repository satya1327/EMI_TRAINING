using System;
using System.Collections.Generic;

#nullable disable

namespace Approval_Api.DataModel_.entities
{
    public partial class Comment
    {
        public Comment()
        {
            Histories = new HashSet<History>();
            Requests = new HashSet<Request>();
        }

        public int CommentId { get; set; }
        public string CommentText { get; set; }

        public virtual ICollection<History> Histories { get; set; }
        public virtual ICollection<Request> Requests { get; set; }
    }
}
