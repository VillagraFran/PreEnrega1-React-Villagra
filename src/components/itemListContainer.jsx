const ItemList = (props) => {
    return (
        <li>
            <h5>Producto: {props.name}</h5>
            <p>Precio: {props.price}</p>
        </li>
    )
}

export const ItemListContainer = () => {
    return(
        <section>
            <ul>
                <>
                    <ItemList name="Auriculares inalámbricos" price="$16000"/>
                    <ItemList name="Smartwatch" price="$8000"/>
                    <ItemList name="Cámara de acción" price="$64000"/>
                </>
            </ul>
        </section>
    )
}