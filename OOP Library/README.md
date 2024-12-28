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
- **Output:**
  - Danh sách sinh viên trước và sau mỗi thao tác.




