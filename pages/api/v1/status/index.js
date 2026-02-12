function status(request, response) {
  response
    .status(200)
    .json({ chave: "eu estou tentando ficar acima da média" });
}

export default status;
