const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path')
const pool = require('./db')
require('dotenv').config()

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

// Criar tabela automaticamente
async function initDB() {
    try {

        await pool.query(`
            CREATE TABLE IF NOT EXISTS noticias (
                id SERIAL PRIMARY KEY,
                titulo VARCHAR(255),
                conteudo TEXT,
                autor VARCHAR(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `)

        console.log('✅ Banco de dados conectado com sucesso')

    } catch (error) {

        console.error('❌ Erro ao conectar no banco')
        console.error(error)

    }
}

initDB()

// Home
app.get('/', async (req, res) => {
    const result = await pool.query(
        'SELECT * FROM noticias ORDER BY created_at DESC'
    )

    res.render('index', { noticias: result.rows })
})

// Página criar
app.get('/create', (req, res) => {
    res.render('create')
})

// Criar notícia
app.post('/create', async (req, res) => {
    const { titulo, conteudo, autor } = req.body

    await pool.query(
        'INSERT INTO noticias (titulo, conteudo, autor) VALUES ($1, $2, $3)',
        [titulo, conteudo, autor]
    )

    res.redirect('/')
})

// Página editar
app.get('/edit/:id', async (req, res) => {
    const result = await pool.query(
        'SELECT * FROM noticias WHERE id = $1',
        [req.params.id]
    )

    res.render('edit', { noticia: result.rows[0] })
})

// Atualizar notícia
app.put('/edit/:id', async (req, res) => {
    const { titulo, conteudo, autor } = req.body

    await pool.query(
        `
        UPDATE noticias
        SET titulo = $1,
            conteudo = $2,
            autor = $3
        WHERE id = $4
        `,
        [titulo, conteudo, autor, req.params.id]
    )

    res.redirect('/')
})

// Excluir notícia
app.delete('/delete/:id', async (req, res) => {
    await pool.query(
        'DELETE FROM noticias WHERE id = $1',
        [req.params.id]
    )

    res.redirect('/')
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})