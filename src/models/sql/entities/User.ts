import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id:number;
    @Column({type:'text'})
    public name:string;
    @Column({type:'text'})
    public email:string;
    @Column({type:'text'})
    public password:string;
    
    constructor(emial:string,password:string){
        this.email = emial;
        this.password = password;
    }
}