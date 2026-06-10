import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Post } from '@nestjs/common';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}
    @Get()
    getStudents() {
        return this.studentsService.getStudentsArray();
    }
    @Get(':id')
    getStudentById(@Param('id') id: string) {
        return this.studentsService.getStudentById(Number(id));
    }    
    @Post()
    createStudent(@Body() student: any) {
        return this.studentsService.createStudent(student);
    }
    @Put(':id')
    updateStudent(@Param('id') id: string, @Body() student: any) {
        return this.studentsService.updateStudent(Number(id), student);
    }
}
