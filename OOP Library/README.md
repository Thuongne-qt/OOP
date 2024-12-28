# Quản Lý Thư Viện Sách

## Giới Thiệu

Chương trình "Quản Lý Thư Viện Sách" được xây dựng bằng JavaScript theo phong cách lập trình hướng đối tượng (OOP). Hệ thống cho phép quản lý các quyển sách trong thư viện với các tính năng như thêm sách, xóa sách, tìm kiếm sách theo tên, mượn và trả sách, hiển thị danh sách tất cả sách và sách còn sẵn để mượn.

## Tính Năng

1. **Thêm sách mới**: Cho phép người dùng thêm một sách mới vào thư viện.
2. **Xóa sách**: Xóa sách khỏi thư viện dựa trên mã sách.
3. **Tìm kiếm sách**: Tìm kiếm sách theo tên (hỗ trợ tìm kiếm gần đúng).
4. **Mượn sách**: Thay đổi trạng thái sách thành `"borrowed"` nếu sách đang có sẵn (`available`).
5. **Trả sách**: Thay đổi trạng thái sách thành `"available"` khi sách được trả lại.
6. **Hiển thị tất cả sách**: Hiển thị thông tin chi tiết của tất cả sách trong thư viện.
7. **Hiển thị sách còn sẵn**: Hiển thị các sách có trạng thái `"available"`.

## Cấu Trúc Chương Trình

### Lớp `Book` (Sách)

Đại diện cho một quyển sách với các thuộc tính sau:

- `id`: Mã sách (duy nhất).
- `title`: Tên sách.
- `author`: Tác giả sách.
- `year`: Năm xuất bản của sách.
- `status`: Trạng thái sách (`"available"` hoặc `"borrowed"`).

Phương thức:
- `displayInfo()`: Hiển thị chi tiết thông tin sách.

### Lớp `Library` (Thư Viện)

Quản lý danh sách sách trong thư viện với các phương thức sau:

- `addBook(book)`: Thêm sách vào thư viện.
- `removeBook(id)`: Xóa sách khỏi thư viện dựa trên mã sách (`id`).
- `findBookByTitle(title)`: Tìm kiếm sách theo tên (hỗ trợ tìm gần đúng).
- `borrowBook(id)`: Mượn sách, thay đổi trạng thái sách thành `"borrowed"` nếu sách đang có sẵn.
- `returnBook(id)`: Trả sách, thay đổi trạng thái sách thành `"available"` nếu sách đã được mượn.
- `displayAllBooks()`: Hiển thị tất cả sách trong thư viện.
- `displayAvailableBooks()`: Hiển thị các sách còn sẵn để mượn (trạng thái `"available"`).