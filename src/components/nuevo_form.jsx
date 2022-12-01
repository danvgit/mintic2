import { useForm } from "react-hook-form";
import { useEffect, useState } from "react"



const Nuevo_form = ({ data }) => {
    const [isEdit, setIsEdit] = useState(false)

    const { register, formState: { errors }, handleSubmit, setValue } = useForm();

    const customSubmit = (dataForm) => {
        if (isEdit) {
            console.log('Here goes the edit logic')
        } else {
            console.log('Here goes create logic')
        }
        console.log('dataForm', dataForm)
    }

    useEffect(() => {
        if (data.length !== 0) {
            setIsEdit(true)
            setValue('bookName', data.title)
            setValue('authorName', data.author)
            setValue('year', data.year)
            setValue('readAt', data.readAt)
        }
    })
    return (
        <>
            <form className="form" onSubmit={handleSubmit(customSubmit)}>

                <div className="form__item">   
                    <label>Fecha</label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        {...register("date", { required: true })}
                        aria-invalid={errors.date ? "true" : "false"}
                    />
                    {errors.date && <p>Ingrese fecha</p>}
                </div>

                <div className="form__item">   
                    <label>Hora</label>
                    <input
                        id="hour"
                        name="hour"
                        type="time"
                        {...register("hour", { required: true })}
                        aria-invalid={errors.hour ? "true" : "false"}
                    />
                    {errors.hour && <p>Ingrese hora</p>}
                </div>

                <div className="form__item">   
                    <label>Largo (cm)</label>
                    <input
                        id="length"
                        name="length"
                        type="number"
                        {...register("length", { required: true })}
                        aria-invalid={errors.length ? "true" : "false"}
                    />
                    {errors.length && <p>Ingrese largo del paquete</p>}
                </div>

                <div className="form__item">   
                    <label>Ancho (cm)</label>
                    <input
                        id="width"
                        name="width"
                        type="number"
                        {...register("width", { required: true })}
                        aria-invalid={errors.width ? "true" : "false"}
                    />
                    {errors.width && <p>Ingrese ancho del paquete</p>}
                </div>

                <div className="form__item">   
                    <label>Alto (cm)</label>
                    <input
                        id="heigth"
                        name="heigth"
                        type="number"
                        {...register("heigth", { required: true })}
                        aria-invalid={errors.heigth ? "true" : "false"}
                    />
                    {errors.heigth && <p>Ingrese alto del paquete</p>}
                </div>

                <div className="form__item">   
                    <label>Peso (Kg)</label>
                    <input
                        id="weigth"
                        name="weigth"
                        type="number"
                        {...register("weigth", { required: true })}
                        aria-invalid={errors.weigth ? "true" : "false"}
                    />
                    {errors.weigth && <p>Ingrese peso del paquete</p>}
                </div>


                <div className="form__item">   
                    <label>Dirección de recogida</label>
                    <input
                        id="dirRecogida"
                        name="dirRecogida"
                        type="text"
                        {...register("dirRecogida", { required: true })}
                        aria-invalid={errors.dirRecogida ? "true" : "false"}
                    />
                    {errors.dirRecogida && <p>Ingrese dirección de recogida de su paquete</p>}
                </div>
                
                <div className="form__item">   
                    <label>Ciudad de recogida</label>
                    <input
                        id="ciuRecogida"
                        name="ciuRecogida"
                        type="text"
                        {...register("ciuRecogida", { required: true })}
                        aria-invalid={errors.ciuRecogida ? "true" : "false"}
                    />
                    {errors.ciuRecogida && <p>Ingrese ciudad de recogida de su paquete</p>}
                </div> 

                <div className="form__item">   
                    <label>Nombre de destinatario</label>
                    <input
                        id="nomEntrega"
                        name="nomEntrega"
                        type="text"
                        {...register("nomEntrega", { required: true })}
                        aria-invalid={errors.nomEntrega ? "true" : "false"}
                    />
                    {errors.nomEntrega && <p>Ingrese nombre</p>}
                </div>              

                <div className="form__item">   
                    <label>Dirección de entrega</label>
                    <input
                        id="dirEntrega"
                        name="dirEntrega"
                        type="text"
                        {...register("dirEntrega", { required: true })}
                        aria-invalid={errors.dirEntrega ? "true" : "false"}
                    />
                    {errors.dirEntrega && <p>Ingrese dirección de entrega de su paquete</p>}
                </div>
                
                <div className="form__item">   
                    <label>Ciudad de entrega</label>
                    <input
                        id="ciuEntrega"
                        name="ciuEntrega"
                        type="text"
                        {...register("ciuEntrega", { required: true })}
                        aria-invalid={errors.ciuEntrega ? "true" : "false"}
                    />
                    {errors.ciuEntrega && <p>Ingrese ciudad de entrega de su paquete</p>}
                </div>

                <input type="submit" value={isEdit ? "Editar" : "Crear"} />



            </form>
        </>
    );
}

export default Nuevo_form;


