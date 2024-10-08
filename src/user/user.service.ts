import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './CreateUserDto';
import { User } from './user.entity';
import { UpdateUserDto } from './UpdateUserDto';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>
	) {}
	async createUser(data: CreateUserDto): Promise<User> {
		return this.userRepository.save(data);
	}

	async updateUser(data: UpdateUserDto): Promise<User> {
		return this.userRepository.save(data);
	}

	async findOne(condition: any): Promise<User> {
		return this.userRepository.findOne({ where: [condition] });
	}
}
