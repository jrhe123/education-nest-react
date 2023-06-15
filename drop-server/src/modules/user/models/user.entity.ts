import { Column, Entity } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
@Entity('user')
export class User {
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
