import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


const labels = [
    "id",
    "Dirección entrega",
    "Ciudad entrega",
    "Nombre entrega",
    "Contacto entrega",
    ""
]

const Gestion = () => {

    const [paquetes, setPaquetes] = useState(null)

    useEffect (() => {
        const userId = "638d191357848b1b8431de72"
        axios
            .get("http://localhost:4000/paquetes?userId=" + userId)
            .then(result => {
                console.log(result.data)
                setPaquetes(result.data)
            }) 
    }, [] )

    return (
        <>
            <div className="gestion-home">
                <Link className="nuevo_item" to='/nuevo'>Nuevo</Link>
                <table className="table">
                    <thead>
                        <tr>
                            {labels.map((label, index) => {
                                return (<th key={index} scope="col">{label}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {paquetes !== null ? paquetes.map((paq, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">
                                        <Link to={'/paquete/' + paq._id}>{paq._id}</Link>
                                    </th>
                                    <td>{paq.dirEntrega}</td>
                                    <td>{paq.ciuEntrega}</td>
                                    <td>{paq.nomEntrega}</td>
                                    <td>{paq.conEntrega}</td>
                                    <td className="d-flex gap-2 justify-content-center">
                                        <Link className="btn btn-success" to={'/paquete/' + 'edit/' + paq._id }>Edit</Link>
                                    </td>
                                </tr>)
                        }) : '' }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Gestion





