using System.ComponentModel.DataAnnotations;

namespace CRUD_App.Models
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
    }
}
