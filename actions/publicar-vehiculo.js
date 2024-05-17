"use server"
import { writeFile} from "fs/promises"
import { auth } from "../auth"
import { db } from "@/lib/db"
export const publicarVehiculo = async (values) => {

    console.log(values)
    const { title,modelo,descripcion,patente,kilometraje,cantpuertas,archivo } = values;
    console.log(archivo)
    const file = archivo.get("image"); //obtengo la imagen que fue comprimida
    console.log(file)
    console.log(file.name)

    if(!file){
        return { error : "Imagen requerida!"} //si por alguna razon no hay imagen, retorno un error
    }

    const session = await auth();
    if (!session) {
      return { error: "Usuario no autenticado,no puedes crear publicaciones" };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes); //chequeo que pueda ponerla en mi compu
    const path = `public/${file.name}`; //genero un path para guardar imagen
    const pathUsar = `/${file.name}`; //el path que va a usar el componente que renderiza las publis
    await writeFile(path,buffer); //escribo la imagen en mi compu

    const publicacionCreada = await db.vehiclePost.create({ //crep la publicacion
        data: {
          img: pathUsar,
          title: title,
          modelo:modelo,
          descripcion:descripcion,
          patente: patente,
          kilometraje:kilometraje,
          cantPuertas:cantpuertas,
          idPublisher: session.user.id,
        }
      })

    const cardPublicacionCreada = await db.cardPost.create({
        data: {
          idCompletePost: publicacionCreada.id,
          boat: false,
          img: pathUsar,
          title: title,
          modelo:modelo,
        }
      
    })


    
    if (!(publicacionCreada && cardPublicacionCreada)) {
        return { error : "Error al crear la publicacion!"} //si no se creo la publicacion, retorno un error
    }


    return {success : "Publicación creada"} 
    //si todo salio bien, pongo el succes, y un mensaje que es el path para renderizarla si quiero en el formulario

}