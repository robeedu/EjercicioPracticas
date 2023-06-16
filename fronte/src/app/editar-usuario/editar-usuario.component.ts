import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../persona.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  get name() {
    return this.formUser.get('nombre') as FormControl;
  }
  get apellid() {
    return this.formUser.get('apellido') as FormControl;
  }
  get numero (){
    return this.formUser.get('numero') as FormControl;
  }
  get email() {
    return this.formUser.get('email') as FormControl;
  }

  formUser = new FormGroup({
    'nombre': new FormControl('', Validators.required),
    'apellido': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'numero': new FormControl('', [Validators.required, Validators.minLength(10)])
  });


  procesar (){
    console.log(this.formUser.value);
  }
   
  nombre: FormControl = new FormControl('', Validators.required);
  apellido: FormControl = new FormControl('', Validators.required);
  correo: FormControl = new FormControl('', Validators.required);
  
  persona: any = {};
  editing: boolean = false;

  constructor(
    private personaService: PersonaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.editing = true;
        this.getPersona(id);
      }
    });
  }

  getPersona(id: string) {
    this.personaService.getPersona(id).subscribe(data => {
      this.persona = data['data'];
    });
  }

  savePersona() {
    if (this.editing) {
      this.personaService.updatePersona(this.persona).subscribe(data => {
        console.log(data['msg']);
        this.router.navigate(['/personas']);
      });
    } else {
      this.personaService.addPersona(this.persona).subscribe(data => {
        console.log(data['Si se guardo?']);
        this.router.navigate(['/personas']);
      });
    }
  }
  emails: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    this.validateEmailDomain
  ]);  
  validateEmailDomain(control: FormControl): { [key: string]: boolean } | null {
    const email: string = control.value;
    if (email && !email.includes('.com')) {
      return { invalidDomain: true };
    }
    return null;
  }
}
