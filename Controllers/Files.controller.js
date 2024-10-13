/** @format */

const FilesRouter = require("express").Router();
const fs = require("fs/promises");
// HTTP METHODS = GET, POST, PUT, DELETE

async function createFile(data = null) {
  try {
    const content = new Date().toString();
    await fs.writeFile("./files/test.txt", data ? data : content);
  } catch (err) {
    console.log(err);
  }
}

// HTTP METHODS = GET, POST, PUT, DELETE
FilesRouter.get("/createDefaultFile", (request, response, next) => {
  console.log("REQUEST HIT");
  return response.status(200).json({
    message: "Request hit",
  });
});

FilesRouter.get("/createCustomFile/:content", (request, response, next) => {
  const { content } = request.params;
  console.log(data);
  createFile();
  return response.status(200).json({
    message: "Request hit",
  });
});

FilesRouter.post("/createCustomFile", async (request, response, next) => {
  const { content } = request.body;
  await createFile();
  console.log(request.body);
  return response.status(200).json({
    message: "File created",
  });
});

module.exports = FilesRouter;
