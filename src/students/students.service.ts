import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentsService {
    private students = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'jane.doe@example.com'
        },
        {
            id: 3,
            name: 'Jim Doe',
            email: 'jim.doe@example.com'
        },
        {
            id: 4,
            name: 'Jill Doe',
            email: 'jill.doe@example.com'
        }
    ];
    getStudentsArray(): any[] {
        return this.students;
    }
    getStudentById(id: number): any {
        return this.students.find(student => student.id === id);
    }
    createStudent(student: any): any {
        student.id = this.students.length + 1;
        this.students.push(student);
        return student;
    }
    updateStudent(id: number, student: any): any {
        const index = this.students.findIndex(student => student.id === id);
        this.students[index] = student;
        return student;
    }

    patchStudent(id: number, student: any): any {
        // const index = this.students.findIndex(student => student.id === id);
        // this.students[index] = { ...this.students[index], ...student };
        // return this.students[index];
        const existingStudent = this.getStudentById(id);
        if (!existingStudent) {
            throw new NotFoundException('Student not found');
        }
        // this.students[this.students.indexOf(student)] = { ...student, ...student };
        // return this.students[this.students.indexOf(student)];
        Object.assign(existingStudent, student);
        return existingStudent;
    }
    deleteStudent(id: number): any {
        const student = this.getStudentById(id);
        if (!student) {
            throw new NotFoundException('Student not found');
        }
        this.students.splice(this.students.indexOf(student), 1);
        return student;
    }   
}
