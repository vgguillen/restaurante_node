import { getConnection } from "../database/connection";
import { querysPlatos } from "../database/querys";
import { sql } from "../database/connection";

export const obtenerPlatos = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querysPlatos.getAllPlatos);
      console.log(result);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getPlatosById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querysPlatos.getPlatosById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };


  export const getPlatosByCategoria = async (req, res) => {
    try {
      const pool = await getConnection();
      console.log(req);
  
      const result = await pool
        .request()
        .input("categoria", req.params.categoria)
        .query(querysPlatos.getPlatosBycategoria);
      return res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  export const agregarPlatos = async (req, res) => {
    const { nombre, descripcion, categoria, precio } = req.body;
    let { imagen } = req.body;

    console.log(nombre);
  
    // validating
    if (descripcion == null || nombre == null || categoria == null || imagen == null) {
      return res.status(400).json({ msg: "Solicitud incorrecta. Por favor llenar todos los campos" });
    }
  
    if (precio == null) precio = 0;
  
    try {
      const pool = await getConnection();
  
      await pool
        .request()
        .input("nombre", sql.VarChar, nombre)
        .input("descripcion", sql.VarChar, descripcion)
        .input("categoria", sql.VarChar, categoria)
        .input("precio", sql.Float, precio)
        .input("imagen", sql.VarChar, imagen)
        .query(querysPlatos.addNewPlatos);
  
      res.json({ nombre, descripcion, categoria, precio, imagen });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  
  export const deletePlatosId = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querysPlatos.deletePlatos);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  export const getTotalPlatos = async (req, res) => {
    const pool = await getConnection();
  
    const result = await pool.request().query(querysPlatos.getTotalPlatos);
    console.log(result);
    res.json(result.recordset[0][""]);
  };
  
  export const updatePlatosId = async (req, res) => {
    const { nombre, descripcion, categoria, precio, imagen } = req.body;
  
    // validating
    if (descripcion == null || nombre == null || categoria == null || imagen == null) {
      return res.status(400).json({ msg: "Solicitud incorrecta. Por favor llenar todos los campos" });
    }
  
    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("nombre", sql.VarChar, nombre)
        .input("descripcion", sql.VarChar, descripcion)
        .input("categoria", sql.VarChar, categoria)
        .input("precio", sql.Float, precio)
        .input("imagen", sql.VarChar, imagen)
        .input("id", req.params.id)
        .query(querysPlatos.updatePlatosId);
        res.json({ nombre, descripcion, categoria, precio, imagen });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };