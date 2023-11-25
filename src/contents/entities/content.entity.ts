// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  // You can add more fields as needed for your application

  // Constructor can be added if you want to create instances easily
  constructor(username: string, password: string, email: string) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
