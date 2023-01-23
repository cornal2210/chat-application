import { BaseEntity } from '../database/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'text', unique: true, name: 'username' })
  username: string;

  @Column({ type: 'text', name: 'email', nullable: true })
  email?: string;

  @Column({ type: 'text', name: 'firstName' })
  firstName: string;

  @Column({ type: 'text', name: 'lastName' })
  lastName: string;

  @Column({ select: false, type: 'text', name: 'password' })
  @Exclude()
  password: string;
}
