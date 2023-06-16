import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiUrl = 'http://localhost:3000/persona';

  constructor(private http: HttpClient) { }
  
  getPersonas() {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  addPersona(persona: any) {
    return this.http.post<any>(`${this.apiUrl}`, persona);
  }

  deletePersona(id: string) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getPersona(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updatePersona(persona: any) {
    return this.http.put<any>(`${this.apiUrl}`, persona);
  }
}
