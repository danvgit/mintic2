import { Link } from "react-router-dom"

const paquete = [
    {
        id: 1,
        dirEntrega: 'Calle 20 # 10 - 44',
        ciuEntrega: 'Barranquilla',
        nomEntrega: 'Carlos Jaramillo',
        conEntrega: '3202553330'
    },
    {
        id: 2,
        dirEntrega: 'Cra 20 # 10 - 44',
        ciuEntrega: 'Cartagena',
        nomEntrega: 'Manuel Soto',
        conEntrega: '3582553330'
    }]

const labels = [
    "id",
    "Dirección entrega",
    "Ciudad entrega",
    "Nombre entrega",
    "Contacto entrega",
    ""
]

const Gestion = () => {
    return (
        <>
            <div className="gestion-home">
                <Link className="btn btn-primary books-home__create" to='/ges_crear'>Nuevo</Link>
                <table className="table">
                    <thead>
                        <tr>
                            {labels.map((label, index) => {
                                return (<th key={index} scope="col">{label}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {paquete.map((paq, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">
                                        <Link to={'/paquete/' + paq.id}>{paq.id}</Link>
                                    </th>
                                    <td>{paq.dirEntrega}</td>
                                    <td>{paq.ciuEntrega}</td>
                                    <td>{paq.nomEntrega}</td>
                                    <td>{paq.conEntrega}</td>
                                    <td className="d-flex gap-2 justify-content-center">
                                        <Link className="btn btn-success" to={'/paquete/' + paq.id + '/edit'}>Edit</Link>
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Gestion





