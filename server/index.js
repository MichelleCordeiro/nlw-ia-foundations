import cors from 'cors'
import express from 'express'

import { download } from './download.js'

const app = express()
app.use(cors())

app.get('/summary/:id', (request, response) => {
  download(request.params.id)
  response.json({ result: "Download do vídeo realizado com sucesso!"})
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT} 🚀`))