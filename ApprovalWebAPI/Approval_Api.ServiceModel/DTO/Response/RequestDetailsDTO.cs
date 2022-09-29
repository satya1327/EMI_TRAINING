using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Approval_Api.ServiceModel.DTO.Response
{
    public class RequestDetailsDTO
    {
        
       public int UserId { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string Purpose { get; set; }
        public string Description { get; set; }
        public decimal? EstimatedAmount { get; set; }
        public decimal? AdvAmount { get; set; }
        public string Approver { get; set; }
        public DateTime? Date { get; set; }
        public int? StatusId { get; set; }
        public string Comments { get; set; }
    }
}
