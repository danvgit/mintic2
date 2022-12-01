import { useState } from "react";
import {useForm} from "react-hook-form"
import { Link } from "react-router-dom";

const Login = () => {
    const {register, formState: {errors}, handleSubmit} = useForm()
    const customSubmit = (data) => {console.log(data)}

/*     const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit', values)
    }

    const handleChange = (event) => {
        const {target} = event
        console.log('target', target)
        const {name, value} = target
        console.log('name, value', name, value)

        const newValues = {
            ...values,
            [name]: value,
        }

        console.log(newValues)
    } */

    return (

        <>
        <script type="module" src="/src/main.jsx"></script>
 {/*        <div className="imag"><img src="Iya.png" alt="New York"/></div> */}
        <div className="container p-5 my-5 bg-dark text-white"></div>
        <h1> GESTIÓN DE PAQUETES </h1>
        <h2> BIENVENIDO </h2>
        <form className="form_login" onSubmit={handleSubmit(customSubmit)}>
            <div className="form_item">
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

            <div className="form_item">
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
            
            <button type="submit" >Log in</button>
        </form>
        <Link className="register_item" to="/registro">Registrese aquí</Link>
        </>

    );
}
export default Login;