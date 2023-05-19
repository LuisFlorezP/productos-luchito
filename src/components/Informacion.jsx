import register from "../assets/json/registerJson.json"

const Informacion = () => {
    return (
        <section id="informacion">
            {
                register.map((registro) => (
                    <section id="card">
                        <p>{registro.nombre}</p>
                        <img src={registro.imagen} alt="" />
                    </section>
                ))
            }
            <section id="final"></section>
        </section>
    );
};

export default Informacion;