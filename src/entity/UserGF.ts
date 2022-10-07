import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserGF {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    hamburger: string

    @Column()
    pizza: string

    @Column()
    buffet: string

    @Column()
    combo: number

}

