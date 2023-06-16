import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../persona.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit{
  
  personas: any[] = [];

  constructor(private personaService: PersonaService, private router: Router) { }
  //funciones que se ejecutan en el componente de Angular para realizar acciones relacionadas con la entidad "Persona"



  ngOnInit() {
    // este metodo se ejecuta cuando el
    // componente se inicializa
    //y llama al metodo getPersonas()
    this.getPersonas();
  }

  getPersonas() {
    //Este método llama al metodo getPersonas() del servicio personaService 
    //y se suscribe al resultado del metodo 
    //ya cuando los datos de las personas se reciben en la respuesta
    //las guardo en la variable personas
    this.personaService.getPersonas().subscribe(data => {
      this.personas = data['Usuario'];
    });
  }

  //ya que se recibe la respuesta se imprime en la consola el mensaje("se limino") 
  //y se llama al método getPersonas() para actualizar la lista de personas después de eliminar una persona
  deletePersona(id: string) {
    this.personaService.deletePersona(id).subscribe(data => {
      console.log(data['se limino']);
      this.getPersonas();
    });
  }
  //utiliza el enrutador de angula para navegar a una ruta específica 
  //osea navega a la ruta '/personas/edit' y trae  con el ID de la persona como parámetro
  editPersona(id: string) {
    this.router.navigate(['/personas/editar', id]);
  }
}

