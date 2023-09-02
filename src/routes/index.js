import { Router } from "express"
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales,paginaDetalleViaje } from "../controllers/PaginaController.js"

const router = Router()

router.get("/", paginaInicio)

router.get("/nosotros", paginaNosotros)

router.get("/viajes", paginaViajes)

router.get("/viajes/:viaje", paginaDetalleViaje)

router.get("/testimoniales", paginaTestimoniales)

export default router