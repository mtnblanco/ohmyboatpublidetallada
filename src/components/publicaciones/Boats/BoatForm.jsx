"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/CardWrapper";
import { useForm } from "react-hook-form";
import { publicarBarco } from "../../../../actions/publicar-barco";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { FormSuccess } from "@/components/FormSuccess";
import { Toaster, toast } from 'sonner'; // Importa la función toast desde sonner
import { useRouter } from "next/navigation";

export const BoatForm = () => {
    const [imageError,setImageError] = useState("");
    const [previewUrl, setPreviewUrl] = useState(null);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        console.log(data);
        const { title,modelo,descripcion,matricula,eslora,manga,metros,deuda,image} = data;
        const file = image[0];
        console.log(file);
        const archivo = new FormData();
        archivo.append("image", file);
        const res = await publicarBarco({ title,modelo,descripcion,matricula,eslora,manga,metros,deuda,archivo });
        setError(res?.error);
        if (res.success) {
            toast.success('¡Publicación creada!');
            router.push("/");

        }


        // Mostrar un toast de éxito cuando se envía el formulario correctamente
  
    };

    const onSubmitWithEvent = (event) => {
        event.preventDefault();
        console.log(event.target.image.files[0])
        if (event.target.image.files[0] === undefined){
            setImageError("Imagen obligatoria");
        }
        handleSubmit(onSubmit)();
    };

    const handleFileChange = (selectedFile) => {
    
        if (selectedFile && selectedFile.name.includes(".jpg") | selectedFile.name.includes(".jpeg") | selectedFile.name.includes(".png")) {
            setImageError("");
            console.log(selectedFile);
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
        else {
            setPreviewUrl(null); //hago esto para cuando no selecciono archivo me lo saque
            if (selectedFile === undefined){
                setImageError("Imagen obligatoria");
                return;
            }
            setImageError("Por favor, selecciona un archivo de tipo JPG, PNG o JPEG.");
        }
    };


    return (

            <>   
                <CardWrapper
                    headerLabel="Crear una publicación de un barco rellenando los datos."
                    backButtonLabel="Cancelar y volver al inicio"
                    backButtonHref="/"
                    headerTitle="Publicar Barco"
                >
                    <form onSubmit={onSubmitWithEvent}>
                        <div className="space-y-4">
                            <label htmlFor="title" className="text-slate-500 block text-sm">
                                Titulo:
                            </label>
                            <Input
                                type="text"
                                {...register("title", { required: { value: true, message: "Titulo obligatorio" } })}
                                placeholder="..."
                            />
                            {errors.title && (
                                <span className="text-red-500 text-sm">{errors.title.message}</span>
                            )}

                            <label htmlFor="modelo" className="text-slate-500 block text-sm">
                                Modelo:
                            </label>
                            <Input
                                type="text"
                                {...register("modelo", { required: { value: true, message: "Modelo obligatorio" } })}
                                placeholder="..."
                            />
                            {errors.modelo && (
                                <span className="text-red-500 text-sm">{errors.modelo.message}</span>
                            )}

                            <label htmlFor="descripcion" className="text-slate-500 block text-sm">
                                Descripción:
                            </label>
                            <Input
                                type="text"
                                {...register("descripcion", { required: { value: true, message: "Descripción obligatoria" } })}
                                placeholder="..."
                            />
                            {errors.descripcion && (
                                <span className="text-red-500 text-sm">{errors.descripcion.message}</span>
                            )}

                            <label htmlFor="matricula" className="text-slate-500 block text-sm">
                                Matrícula:
                            </label>
                            <Input
                                type="text"
                                {...register("matricula", { required: { value: true, message: "Matrícula obligatoria" } })}
                                placeholder="..."
                            />
                            {errors.matricula && (
                                <span className="text-red-500 text-sm">{errors.matricula.message}</span>
                            )}

                            <label htmlFor="eslora" className="text-slate-500 block text-sm">
                                Eslora:
                            </label>
                            <Input
                                type="text"
                                {...register("eslora", { required: { value: true, message: "Eslora obligatoria" } })}
                                placeholder="..."
                            />
                            {errors.eslora && (
                                <span className="text-red-500 text-sm">{errors.eslora.message}</span>
                            )}

                            <label htmlFor="manga" className="text-slate-500 block text-sm">
                                Manga:
                            </label>
                            <Input
                                type="text"
                                {...register("manga", { required: { value: true, message: "Manga obligatoria" } })}
                                placeholder="..."
                            />
                            {errors.manga && (
                                <span className="text-red-500 text-sm">{errors.manga.message}</span>
                            )}

                            <label htmlFor="metros" className="text-slate-500 block text-sm">
                                Metros:
                            </label>
                            <Input
                                type="text"
                                {...register("metros", { required: { value: true, message: "Metros obligatorios" } })}
                                placeholder="..."
                            />
                            {errors.metros && (
                                <span className="text-red-500 text-sm">{errors.metros.message}</span>
                            )}

                            
                            <label htmlFor="deuda" className="text-slate-500 block text-sm">
                                Deuda:
                            </label>
                            <Input
                                type="text"
                                {...register("deuda", { required: { value: true, message: "Deuda obligatoria" } })}
                                placeholder="..."
                            />
                            {errors.deuda && (
                                <span className="text-red-500 text-sm">{errors.deuda.message}</span>
                            )}
                            

                            <label htmlFor="image" className="text-slate-500 block text-sm">
                                Imagen:
                            </label>
                            <Input
                                type="file"
                                {...register("image", {
                                    required: { value: true, message: "Imagen obligatoria" },
                                    validate: {
                                        validFileType: (value) => {
                                            if (!value) return true;
                                            const fileType = value[0].type;
                                            const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
                                            if (!allowedTypes.includes(fileType)) {
                                                return "Por favor, selecciona un archivo de tipo JPG, PNG o JPEG.";
                                            }
                                            return true;
                                        },
                                    },
                                })}
                                onChange={(e) => handleFileChange(e.target.files[0])}
                            />

                            { imageError && (
                                <span className="text-red-500 text-sm">{imageError}</span>
                            ) }

                            {previewUrl && (
                                <div>
                                    <img className="rounded-md" src={previewUrl} alt="Inválido" style={{ maxWidth: "100px", maxHeight: "100px" }} />
                                </div>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-sky-500 hover:bg-sky-600 text-white mt-5"
                        >
                            Publicar
                        </Button>
                    </form>
                </CardWrapper>
        </>
    );
};
