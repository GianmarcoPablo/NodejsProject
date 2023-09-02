import { Viaje } from "../models/Viajes.js"
const paginaInicio = (req, res) => {
    res.render("inicio", {
        pagina: "Inicio"
    })
}

const paginaNosotros = (req, res) => {
    res.render("nosotros", {
        pagina: "Nosotros"
    })
}

const paginaViajes = async (req, res) => {
    //conssultar base datos
    const viajes = await Viaje.findAll();
    res.render("viajes", {
        pagina: "Proximos viajes",
        viajes
    })
}

const paginaTestimoniales = (req, res) => {
    res.render("testimoniales", {
        pagina: "Testimoniales"
    })
}

const paginaDetalleViaje = async (req, res) => {
    const { viaje } = req.params
    try {
        const resultado = await Viaje.findOne({
            where: { slug: viaje }
        })
        res.render("viaje", {
            pagina: "Informacion Viaje",
            resultado
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}