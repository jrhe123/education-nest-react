import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    comment: 'name',
    default: '',
  })
  @IsNotEmpty()
  name: string;

  @Column({
    comment: 'description',
    default: '',
  })
  desc: string;

  @Column({
    comment: 'phone number',
    nullable: true,
  })
  tel: string;

  @Column({
    comment: 'password',
    nullable: true,
  })
  password: string;

  @Column({
    comment: 'account info',
    nullable: true,
  })
  account: string;
}
