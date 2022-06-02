module.exports = app => {
  const products = require("../controllers/product.controller.js");
  const images = require("../controllers/file.controller");
  
  var router = require("express").Router();

  // Create a new Tutorial
  // POST http://localhost:8080/api/products
  router.post("/", products.create);

  // Retrieve all Tutorials
  router.get("/", products.findAll);

  // Retrieve all published Tutorials
  router.get("/published", products.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", products.findOne);

  // Update a Tutorial with id
  router.put("/:id", products.update);

  // Delete a Tutorial with id
  router.delete("/:id", products.delete);

  // Delete all Tutorials
  router.delete("/", products.deleteAll);

  router.post("/upload", images.upload);

  router.get("/files", images.getListFiles);

  router.get("/files/:name", images.download);

  app.use('/files', router);
  // 
  app.use('/api/products', router);
};
