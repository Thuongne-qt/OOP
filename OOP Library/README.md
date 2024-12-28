# Quản Lý Sinh Viên Bằng JavaScript OOP

## Mô tả
Chương trình này sử dụng Lập trình hướng đối tượng (OOP) bằng JavaScript để quản lý thông tin sinh viên. Hệ thống hỗ trợ:

- Thêm sinh viên mới vào danh sách.
- Xóa sinh viên khỏi danh sách.
- Tìm kiếm sinh viên theo tên.
- Hiển thị thông tin tất cả sinh viên.
- Sắp xếp danh sách sinh viên theo điểm GPA giảm dần.

## Cấu trúc chương trình

### Lớp `Student`
Đại diện cho một sinh viên với các thuộc tính và phương thức sau:

#### Thuộc tính:
- `id`: Mã sinh viên (duy nhất).
- `name`: Tên sinh viên.
- `age`: Tuổi sinh viên.
- `gpa`: Điểm trung bình của sinh viên.

#### Phương thức:
- `displayInfo()`: Hiển thị thông tin sinh viên (ID, tên, tuổi, GPA).

### Lớp `StudentManagement`
Quản lý danh sách sinh viên với các thuộc tính và phương thức sau:

#### Thuộc tính:
- `students`: Danh sách các sinh viên.

#### Phương thức:
- `addStudent(student)`: Thêm một sinh viên vào danh sách.
- `removeStudent(id)`: Xóa một sinh viên khỏi danh sách dựa trên mã sinh viên.
- `findStudentByName(name)`: Tìm kiếm sinh viên theo tên (không phân biệt hoa/thường).
- `displayAllStudents()`: Hiển thị danh sách tất cả sinh viên.
- `sortStudentsByGPA()`: Sắp xếp sinh viên theo điểm GPA giảm dần.

## Demo
- **Input:**

    -Tạo ít nhất 3 sinh viên và thêm vào danh sách quản lý.

    -Hiển thị danh sách sinh viên hiện có.

    -Tìm một sinh viên theo tên và hiển thị thông tin của họ.

    -Xóa một sinh viên dựa trên ID và hiển thị lại danh sách.

    -Sắp xếp danh sách sinh viên theo GPA giảm dần và hiển thị.
- **Output:**Bài tập cung cấp các phương thức (addStudent, removeStudent, findStudentByName) để che giấu chi tiết cài đặt.
Người dùng chỉ cần gọi các phương thức mà không quan tâm cách chúng hoạt động.
  - Danh sách sinh viên trước và sau mỗi thao tác.


## Kiến thức đạt được
- **Encapsulation (Tính đóng gói):**
Mỗi đối tượng (Student, StudentManagement) tự quản lý dữ liệu của mình (biến this.students và các phương thức quản lý sinh viên).
Các dữ liệu bên trong không bị truy cập trực tiếp từ bên ngoài mà thông qua các phương thức.

- **Abstraction (Tính trừu tượng):**
Bài tập cung cấp các phương thức (addStudent, removeStudent, findStudentByName) để che giấu chi tiết cài đặt.
Người dùng chỉ cần gọi các phương thức mà không quan tâm cách chúng hoạt động.
- **Inheritance (Tính kế thừa):**
Bài này không có kế thừa trực tiếp (như sử dụng extends), nhưng kiến thức về kế thừa sẽ rất hữu ích nếu cần mở rộng lớp Student (ví dụ, GraduateStudent kế thừa từ Student).

- **Polymorphism (Tính đa hình):**
Nếu mở rộng lớp Student, bạn có thể ghi đè (override) phương thức displayInfo trong các lớp con.

