import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Endpoint GET para obtener todas las personas
  @Get("/persona/")
  async getPersonas(@Res() res: Response) {
    const data = await this.appService.getPersonas();
    return res.json({ "Usuario": data } );
  }

  // Endpoint POST para agregar una nueva persona
  @Post("/persona/")
  async addPersona(@Req() req: Request, @Res() res: Response ) {
    const obj = req.body;
    const data = await this.appService.addPersona(obj);
    return res.json({ "Si se guardo?": data } );
  }
   
  // Endpoint DELETE para eliminar una persona por su ID
  @Delete('/persona/:id')
  async deletePersona(@Req() req: Request, @Res() res: Response ) {
    const { id } = req.params;
    const data = await this.appService.deletePersona(id);
    return res.json({ "msg": data } );
  }
  
  // Endpoint GET para obtener una persona por su ID
  @Get("/persona/:id")
  async getPersona(@Req() req: Request,@Res() res: Response) {
    const { id } = req.params;
    const data = await this.appService.getPersona(id);
    return res.json({ "data": data } );
  }

  // Endpoint PUT para actualizar una persona
  @Put("/persona/")
  async updatePersona(@Req() req: Request, @Res() res: Response ) {
    const obj = req.body;
    const data = await this.appService.updatePersona(obj);
    return res.json({ "msg": data } );
  }
}
