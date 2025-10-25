# Servicio CRUD de Recetas usando al API pública TheMealBD

(En este proyecto desarrolle un cliente que consume los datos TheMealDB (https://www.themealdb.com/api.php) en **NestJS** que permite realizar operaciones **CRUD** sobre un catálogo de comidas.
Haciendo uso de TheMealDB se pueden obtener (por paginación o por ID) comidas externas y por medio de un arreglo temporal en memoria (debido a que TheMealDB es una API de solo lectura) se pueden crear, actualizar y eliminar comidas.

---
## ***PRUEBAS***

Use *Postman* para probar todas las operaciones CRUD. 
He preparado una colección con todos los endpoints y ejemplos de peticiones, se puede encontrar en el siguiente link:

✨ [Postman Collection - TallerCRUD] (https://lunalejasandoval2007-8794612.postman.co/workspace/Alejandra-Sandoval's-Workspace~3c21cc4e-3bcc-4f0f-8e63-feedfcbb507e/collection/49510484-c64a5ce5-991c-42a4-a6a8-61553ecf76b4?action=share&creator=49510484)

--
## **Funcionalidades**

- **GET /meals?limit={L}&offset={O}**: Listar comidas paginadas.  
- **GET /meals/:id**: Obtener una comida por ID (externa o local).  
- **POST /meals**: Crear una nueva comida local.  
- **PATCH /meals/:id**: Actualizar parcialmente una comida local.  
- **DELETE /meals/:id**: Eliminar una comida local.

> Nota: Las operaciones POST, PATCH y DELETE funcionan únicamente sobre comidas creadas localmente. La API externa es solo de lectura.

--
## **Tecnologías utilizadas**

- NestJS
- TypeScript
- Axios / HttpModule
- Class-validator y class-transformer para validaciones de DTOs
- UUID para generar IDs de comidas locales

--
## 🩷**Autor**

- Luna A. Sandoval Rodríguez


--
## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
