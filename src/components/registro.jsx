import { useState } from "react";
import {useForm} from "react-hook-form"


const Registro = () => {
    const {register, formState: {errors}, handleSubmit} = useForm()
    const customSubmit = (data) => {console.log(data)}

    return (
        <>
        <form className="form_register" onSubmit={handleSubmit(customSubmit)}>
            <div className="reg_item">
                <label>Nombre</label>
                <input 
                    id="name" 
                    name="mame" 
                    type="text" 
                    {...register("name", { required: true})}
                    aria-invalid={errors.name ? "true" : "false"}
                />
                 {errors.name && <p>Ingrese su nombre</p>}
            </div>

            <div className="reg_item">
                <label>Apellido</label>
                <input 
                    id="surname" 
                    name="surname" 
                    type="text" 
                    {...register("surname", { required: true})}
                    aria-invalid={errors.surname ? "true" : "false"}
                />
                 {errors.surname && <p>Ingrese su apellido</p>}
            </div>

            <div className="reg_item">
                <label>Usuario</label>
                <input 
                    id="username" 
                    name="username" 
                    type="text" 
                    {...register("username", { required: true})}
                    aria-invalid={errors.username ? "true" : "false"}
                />
                 {errors.username && <p>Ingrese un nombre de usuario</p>}
            </div>

            <div className="reg_item">
                <label>Email</label>
                <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    {...register("email", { required: true})}
                    aria-invalid={errors.email ? "true" : "false"}
                />
                 {errors.email && <p>Ingrese email</p>}
            </div>

            <div className="reg_item">
                <label >Password</label>
                <input
                    id="password" 
                    name="password" 
                    type="password" 
                    {...register("password", { required: true})}
                    aria-invalid={errors.email ? "true" : "false"}
                /> 
                {errors.password && <p>Ingrese su contraseña</p>}    
            </div>
            
            <button type="submit" >Crear</button>
        </form>

        </>
    )
}

export default Registro