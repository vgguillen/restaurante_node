
  export const querysPlatos = {
    
    getAllPlatos: "SELECT TOP(500) * FROM [Restaurante].[dbo].[Platos]",
    addNewPlatos: "INSERT INTO [Restaurante].[dbo].[Platos] (nombre, descripcion, categoria, precio, imagen) VALUES (@nombre,@descripcion,@categoria,@precio,@imagen);",
    deletePlatos: "DELETE FROM [Restaurante].[dbo].[Platos] WHERE Id= @Id",
    getTotalPlatos: "SELECT COUNT(*) FROM Restaurante.dbo.Platos",
    updatePlatosId: "UPDATE [Restaurante].[dbo].[Platos] SET nombre = @nombre, descripcion = @descripcion, categoria = @categoria, precio = @precio, imagen = @imagen WHERE Id = @id",
    getPlatosById: "SELECT * FROM Platos Where Id = @Id",
    getPlatosBycategoria: "SELECT * FROM Platos Where categoria = @categoria",
  };