import { getBoatPostById } from "../../../../../data/posts"
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

async function viewShip ({params}) {
    const boatPost = await getBoatPostById(params.shipId)
    console.log(boatPost)
    return (
        <div className="bg-blancoahumado">
        {boatPost ? (
            <div className="flex flex-col items-center bg-blancoahumado ">
                    <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold text-2xl" >{boatPost.title}</span>
                        
                        </div>
                        <div className="flex">
                            <div className="w-1/2 p-2 items-center justify-center flex flex-col p-6">
                                <img src={boatPost.img} width='300' height='300' alt='Image' className="rounded-md"/>
                                <div className="p-6">
                                    <Link href={`/view-profile/${boatPost.idPublisher}`}>
                                        <Button className="p-6">Ver perfil publicante</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-1/2 p-2 ">
                                <span className="font-semibold">Descripcion del barco: </span>
                                <p className="mb-4">{boatPost.descripcion}</p>
                                <Separator />
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Modelo</TableCell>
                                            <TableCell>{boatPost.modelo}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Deuda</TableCell>
                                            <TableCell>${boatPost.deuda}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Matrícula</TableCell>
                                            <TableCell>{boatPost.matricula}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Eslora</TableCell>
                                            <TableCell>{boatPost.eslora}m</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Manga</TableCell>
                                            <TableCell>{boatPost.manga}m</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Metros</TableCell>
                                            <TableCell>{boatPost.metros}m</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Separator />
                            </div>
                    </div>
            </div>
        
        ) : (
            <div className="flex flex-col items-center bg-blancoahumado ">
                <h1>Lo sentimos parece ser que no hay una una publicación para ese barco</h1>
            </div>
        )}
        </div>
    )
}

export default viewShip