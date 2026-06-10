import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getUsers() {
            return {
                message: 'Users fetched successfully',
                data: [
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
                ]
            };
    }
}
