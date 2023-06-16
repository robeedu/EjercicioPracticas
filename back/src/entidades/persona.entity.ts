import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Persona {
        //Aqui tengo los campos que tiene mi tabla
        // en mi base de datos

    //usamos los decoradores}
    // Este decorador indica que la propiedad id es 
    //una columna primaria de la tabla de la base de datos asociada a esta entidad Persona
    @PrimaryGeneratedColumn()
    id: number;

    //indica que una determinada propiedad es una columna en la tabla de mi base de datos 
    //es lo mismo para las siguiente propiedades (apellido, numeroTelefono, correo y edad), 
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    numeroTelefono: string;
    @Column()
    correo: string;
    @Column()
    edad: number;
}