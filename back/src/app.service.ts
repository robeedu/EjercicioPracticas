import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository, FindOneOptions } from 'typeorm';
import { Persona } from './entidades/persona.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Persona)
    private personaRepository: Repository<Persona>,
  ) {}

  // Obtener todas las personas
  getPersonas(): Promise<any> {
    return this.personaRepository.find();
  }

  // Agregar una nueva persona
  addPersona(obj: any): Promise<any> {
    return this.personaRepository.insert(obj);
  }

  // Eliminar una persona por su ID
  deletePersona(id: string): Promise<any> {
    return this.personaRepository.delete(id);
  }

  // Obtener una persona por su ID
  getPersona(id: string): Promise<Persona> {
    const options: FindOneOptions<Persona> = { where: { id: parseInt(id) } };
    return this.personaRepository.findOne(options);
  }

  // Actualizar una persona
  updatePersona(obj: any): Promise<any> {
    const { id, ...updatedFields } = obj;
    return this.personaRepository.update(id, updatedFields)
      .then(result => {
        return result;
      })
      .catch(error => {
        throw new Error("Error: " + error.message);
      });
  }
}
