import Nuevo_form from "./nuevo_form"
import { useParams } from "react-router-dom"
import Estado from "./estado"

const bookData = {
    id: 1,
    date: '15 / 10 / 2022' ,
    hour: '06 : 25 a. m.',
    length: '25',
    width: '25',
    heigth: '25',
    weigth: '25',
    dirRecogida: 'calle 13 # 13 - 11',
    ciuRecodiga: 'Caracas',
    nomEntrega: 'Julio Pérez',
    dirEntrega: 'cra 555 # 12 - 25',
    ciuEntrega: 'Nueva York'
}

const Editar = () => {
    const { id } = useParams()

    return (
        <>
            <Nuevo_form data={bookData} />
            <Estado />
        </>
    )
}

export default Editar