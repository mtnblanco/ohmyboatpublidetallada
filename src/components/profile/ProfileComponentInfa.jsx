  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../ui/card";
  import Link from "next/link";
  import { Button } from "../ui/button";
  import { Separator } from "../ui/separator";

  
  export default function ProfileComponentInfa({ firstname, lastname, cellphone, birthday, email, password, role }) {
    const showedPassword = password.replace(/./g, "*");
    return (
      <div className="flex items-center justify-center h-screen">
        <div style={{ width: "50%", height: "85%" }}>
          <div className="bg-sky-700 rounded-lg shadow-md p-4">
            <Card>
              <CardHeader>
                <CardTitle className="hover:text-blue-500 cursor-pointer">
                    Mi perfil
                    </CardTitle>
                <CardDescription>Datos personales:</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                <p className="mb-2 ">
                  <span className="font-semibold hover:text-blue-500 cursor-pointer">Nombre:</span> {firstname} 
                </p>
  
                <p className="mb-2">
                  <span className="font-semibold hover:text-blue-500 cursor-pointer">Apellido:</span> {lastname} 
                </p>
  
                <p className="mb-2">
                  <span className="font-semibold hover:text-blue-500 cursor-pointer">Teléfono:</span> {cellphone}
                </p>
                <p className="mb-2">
                  <span className="font-semibold hover:text-blue-500 cursor-pointer">Fecha de Nacimiento:</span> {birthday}
                </p>
                <p className="mb-2">
                  <span className="font-semibold hover:text-blue-500 cursor-pointer">Email:</span> {email}
                </p>
                <p className="mb-2">
                  <section>
                  <span className="font-semibold hover:text-blue-500 cursor-pointer">Contraseña:</span> {showedPassword}
                  <Link href="/auth/new-password-logged">
                  <button className="ml-2 text-sm font-semibold transition duration-300 ease-in-out hover:text-blue-700 cursor-pointer">Cambiar contraseña</button>
                  </Link>
                  </section>
                </p>
                <p className="mb-2">
                  <span className="font-semibold hover:text-blue-500 cursor-pointer">Rol:</span> {role}
                </p>
                </div>
                <Separator />
              </CardContent>
              <CardFooter>
                <div>
                <Button className="mr-2 hover:text-blue-700" variant="ghost">Editar perfil</Button>

                <Button className="mr-2 hover:text-blue-700" variant="ghost">Historial de trueques</Button>

                <Button className="mr-2 hover:text-blue-700" variant="ghost">Mis reseñas</Button>

                <Button className="hover:text-blue-700" variant="ghost">Mis publicaciones</Button>
                </div>
     
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    );
  }
  