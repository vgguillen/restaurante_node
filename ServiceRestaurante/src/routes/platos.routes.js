import { Router } from "express";

import {
    obtenerPlatos,
    agregarPlatos,
    deletePlatosId,
    getTotalPlatos,
    updatePlatosId,
    getPlatosById,
    getPlatosByCategoria
  } from "../controllers/platos.controller";

const router = Router();

router.get("/platos", obtenerPlatos);
router.post("/platos", agregarPlatos);
router.get("/platos/count", getTotalPlatos);
router.delete("/platos/:id", deletePlatosId);
router.put("/platos/:id", updatePlatosId);
router.get("/platos/:id", getPlatosById);
router.get("/platos/categoria/:categoria", getPlatosByCategoria);

export default router;