console.log("Hello world")
// Lớp sinh viên 
class Student {
    // Thành phần dữ liệu
    constructor(id, name,age,gpa){
        this.id = id,
        this.name= name,
        this.age= age,
        this.gpa= gpa
    }
    // Phương thức
    displayInfo(){
        return `Id : ${this.id},Name : ${this.name},Age : ${this.age},Gpa: ${this.gpa}  `
    }
}
class StudentManagement{
    constructor(){
        //danh sách sinh viên 
        this.students = []
    }
    // Phương thức thêm sinh viên 
    addStudent(student){
        this.students.push(student)
        console.log(`Added student: ${student.displayInfo()}`);
    }
    // Phương thức xóa sinh viên theo id
    removeStudent(id){
        this.students = this.students.filter(student => student.id !== id);
        console.log(`Removed student with id: ${id}`);
    }
    // Phương thức tìm kiếm sinh viên theo tên
    findStudentByName(name){
        const foundStudents = this.students.filter(student =>
            student.name.toLowerCase().includes(name.toLowerCase())
        );
        if (foundStudents.length > 0) {
            console.log("Found students:");
            foundStudents.forEach(student => console.log(student.displayInfo()));
        } else {
            console.log(`No students found with name: ${name}`);
        }
    }
    // Phương thức hiển thị danh sách tất cả sinh viên
    displayAllStudents(){
        if (this.students.length === 0) {
            console.log("No students in the list.");
        } else {
            console.log("List of all students:");
            this.students.forEach(student => console.log(student.displayInfo()));
        }
    }
    // Phương thức sắp xếp sinh viên theo điểm GPA giảm dần
    sortStudentsByGPA(){
        this.students.sort((a, b) => b.gpa - a.gpa);
        console.log("Sorted students by GPA (descending):");
        this.displayAllStudents();
    }
}
// Tạo đối tượng StudentManagement
const studentManagement = new StudentManagement();

// Thêm sinh viên
studentManagement.addStudent(new Student(1, "Alice", 20, 3.8));
studentManagement.addStudent(new Student(2, "Bob", 20, 2.8));
studentManagement.addStudent(new Student(3, "Linda", 20, 3.6));

// Hiển thị tất cả sinh viên
studentManagement.displayAllStudents();

//Tìm một sinh viên theo tên và hiển thị thông tin của họ.
studentManagement.findStudentByName("Linda");

//Xóa một sinh viên dựa trên ID và hiển thị lại danh sách.
studentManagement.removeStudent(2);
studentManagement.displayAllStudents();
studentManagement.addStudent(new Student(3, "May", 20, 4.0));

//Sắp xếp danh sách sinh viên theo GPA giảm dần và hiển thị.
studentManagement.sortStudentsByGPA();