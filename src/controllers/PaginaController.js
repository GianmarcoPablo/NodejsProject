import { Viaje } from "../models/Viajes.js"
import { Testimonial } from "../models/Testimoniales.js"

const paginaInicio = async (req, res) => {
    
    const promiseDB = []

    promiseDB.push(Viaje.findAll({ limit: 3 }))
    promiseDB.push(Testimonial.findAll({ limit: 3 }))

    try {
        const resultado = await Promise.all(promiseDB)

        res.render("inicio", {
            pagina: "Inicio",
            clase: "home",
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => {
    res.render("nosotros", {
        pagina: "Nosotros"
    })
}

const paginaViajes = async (req, res) => {
    //conssultar base datos
    const viajes = await Viaje.findAll(); //traemos todo de la base de datos
    res.render("viajes", {
        pagina: "Proximos viajes",
        viajes
    })
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll()
        res.render("testimoniales", {
            pagina: "Testimoniales",
            testimoniales
        })
    } catch (error) {
        console.log(error);
    }
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