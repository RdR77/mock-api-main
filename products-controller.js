function productsFromJson() {
  return require("./products");
}

function getAll(req, res) {
  const pageNumber = Number(req.query.page) || 1;
  const pageSize = Number(req.query.perpage) || 5;
  const products = productsFromJson().slice(
    (pageNumber - 1) * pageSize,
    pageNumber * pageSize,
  );
  res.json(products);
}

const router = require("express").Router();
router.get("/", getAll);

module.exports = router;
