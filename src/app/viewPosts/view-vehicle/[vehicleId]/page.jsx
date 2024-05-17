import { getVehiclePostById } from "../../../../../data/posts"
import Link from "next/link"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


async function viewVehicle ({params}) {
    const vehiclePost = await getVehiclePostById(params.vehicleId)
    console.log(vehiclePost)
    return (
        <div className="bg-blancoahumado">
        {vehiclePost ? (
            <div className="flex flex-col items-center bg-blancoahumado ">
                    <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold text-2xl" >{vehiclePost.title}</span>
                        
                        </div>
                        <div className="flex">
                            <div className="w-1/2 p-2 items-center justify-center flex flex-col p-6">
                                <img src={vehiclePost.img} width='300' height='300' alt='Image' className="rounded-md"/>
                                <div className="p-6">
                                    <Link href={`/view-profile/${vehiclePost.idPublisher}`}>
                                        <Button className="p-6">Ver perfil publicante</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-1/2 p-2 ">
                                <span className="font-semibold">Descripcion del barco: </span>
                                <p className="mb-4">{vehiclePost.descripcion}</p>
                                <Separator />
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Modelo</TableCell>
                                            <TableCell>{vehiclePost.modelo}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Kilometraje</TableCell>
                                            <TableCell>{vehiclePost.kilometraje}km</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Patente</TableCell>
                                            <TableCell>{vehiclePost.patente}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Puertas</TableCell>
                                            <TableCell>{vehiclePost.cantPuertas}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Separator />
                            </div>
                    </div>
            </div>
        
        ) : (
            <h1>Lo sentimos parece ser que no hay una una publicación para ese vehículo</h1>
        )}
        </div>
    )
}

export default viewVehicle