using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Approval_Api.DataModel_.entities
{
    public partial class Approval_DatabaseContext : DbContext
    {
        public Approval_DatabaseContext()
        {
        }

        public Approval_DatabaseContext(DbContextOptions<Approval_DatabaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Comment> Comments { get; set; }
        public virtual DbSet<History> Histories { get; set; }
        public virtual DbSet<Request> Requests { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Status> Statuses { get; set; }
        public virtual DbSet<Upload> Uploads { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=Approval_Database;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Comment>(entity =>
            {
                entity.ToTable("comments");

                entity.Property(e => e.CommentId).HasColumnName("comment_id");

                entity.Property(e => e.CommentText).HasColumnName("comment_text");
            });

            modelBuilder.Entity<History>(entity =>
            {
                entity.ToTable("history");

                entity.Property(e => e.HistoryId).HasColumnName("history_id");

                entity.Property(e => e.CommentId).HasColumnName("comment_id");

                entity.Property(e => e.ReqId).HasColumnName("req_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Comment)
                    .WithMany(p => p.Histories)
                    .HasForeignKey(d => d.CommentId)
                    .HasConstraintName("FK__action__comment___571DF1D5");

                entity.HasOne(d => d.Req)
                    .WithMany(p => p.Histories)
                    .HasForeignKey(d => d.ReqId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__action__req_id__5812160E");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Histories)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__action__user_id__59063A47");
            });

            modelBuilder.Entity<Request>(entity =>
            {
                entity.HasKey(e => e.ReqId)
                    .HasName("req_id");

                entity.ToTable("request");

                entity.Property(e => e.ReqId).HasColumnName("req_id");

                entity.Property(e => e.ActionId).HasColumnName("action_id");

                entity.Property(e => e.AdvAmount)
                    .HasColumnType("money")
                    .HasColumnName("adv_amount");

                entity.Property(e => e.Approver)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("approver");

                entity.Property(e => e.CommentId).HasColumnName("comment_id");

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.EstimatedAmount)
                    .HasColumnType("money")
                    .HasColumnName("estimated_amount");

                entity.Property(e => e.Purpose)
                    .HasMaxLength(100)
                    .HasColumnName("purpose");

                entity.Property(e => e.StatusId).HasColumnName("status_id");

                entity.Property(e => e.UploadId).HasColumnName("upload_id");

                entity.Property(e => e.UserId).HasColumnName("user_Id");

                entity.HasOne(d => d.Comment)
                    .WithMany(p => p.Requests)
                    .HasForeignKey(d => d.CommentId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__request__comment__37A5467C");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.Requests)
                    .HasForeignKey(d => d.StatusId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__request__status___38996AB5");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Requests)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__request__user_Id__3A81B327");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(50)
                    .HasColumnName("role_name");
            });

            modelBuilder.Entity<Status>(entity =>
            {
                entity.ToTable("status");

                entity.Property(e => e.StatusId).HasColumnName("status_id");

                entity.Property(e => e.StatusName)
                    .HasMaxLength(50)
                    .HasColumnName("status_name");
            });

            modelBuilder.Entity<Upload>(entity =>
            {
                entity.ToTable("upload");

                entity.Property(e => e.UploadId).HasColumnName("upload_id");

                entity.Property(e => e.FileName)
                    .HasMaxLength(50)
                    .HasColumnName("file_name");

                entity.Property(e => e.ReqId).HasColumnName("req_id");

                entity.HasOne(d => d.Req)
                    .WithMany(p => p.Uploads)
                    .HasForeignKey(d => d.ReqId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__upload__req_id__3D5E1FD2");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.Email, "UQ__Users__AB6E616459CBADAC")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .HasColumnName("first_name");

                entity.Property(e => e.JoiningDate)
                    .HasColumnType("date")
                    .HasColumnName("joining_date");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .HasColumnName("last_name");

                entity.Property(e => e.Password)
                    .HasMaxLength(100)
                    .HasColumnName("password");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.UserName)
                    .HasMaxLength(50)
                    .HasColumnName("user_name");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Users__role_id__33D4B598");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
