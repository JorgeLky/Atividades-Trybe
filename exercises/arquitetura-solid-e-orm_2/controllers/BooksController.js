const express = require('express');
const { Books } = require('../models');
const appRouter = express.Router();

appRouter.get('/books', async (_req, res) => {
  Books.findAll().then((Books) =>
    res
      .status(200)
      .json(Books))
      .catch((e) => res.status(500).json(e.message));
});

appRouter.get('/book/:id', async (req, res) => {
  const { id } = req.params;
  Books.findByPk(id).then((Book) => {
    if (Book === null) {
      res.status(404).json({message: "Livro não encontrado!"});
    }
    res.status(200).json(Book);
  }).catch((e) => res.status(500).json(e.message));
});

appRouter.post('/book', async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  Books.create({ title, author, pageQuantity, }).then((newBook) => {
    res.status(200).json(newBook);
  }).catch((e) => res.status(500).json(e.message));
})

appRouter.post('/book/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  Books.update(
    {title, author, pageQuantity},
    {
      where: {
        id
      }
    }
  ).then(() => res.status(200).json({ message: "produto atualizado com sucesso!" }))
  .catch((e) => res.status(500).json({ message: "algo deu errado!" }))
})

appRouter.delete('/book/:id', async (req, res) => {
  const { id } = req.params;
  Books.destroy({
    where: {
      id,
    }
  }).then(() => res.status(200).json({ message: "Produto deletado com sucesso!" }))
  .catch((e) => res.status(500).json(e.message));
})
module.exports = appRouter;
