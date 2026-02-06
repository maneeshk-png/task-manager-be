import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users') //table name
export class User{  
@PrimaryGeneratedColumn('uuid') //auto generated ID
id:string;

@Column({unique:true})
username:string;

@Column()
password:string;
}