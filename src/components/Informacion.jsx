import register from "../assets/json/registerJson.json"

const Informacion = () => {
    return (
        <section id="informacion">
            {
                register.map((registro) => (
                    <section className="card">                            
                        <img className="imagen" src={registro.imagen} alt="" />
                        <p><strong>{registro.nombre}</strong></p>
                        <p><strong>Precio:</strong> $ {registro.precio}</p>
                        <p><strong>Clasificación:</strong></p>
                        <p>{registro.clasificacion}</p>
                        <p><strong>Disponibilidad:</strong> {registro.disponibilidad}</p>
                        <p><strong>Existencias:</strong> {registro.existencias}</p>
                    </section>
                ))
            }
            <section id="final"></section>
        </section>
    );
};

export default Informacion;