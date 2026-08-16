const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sql } = require('../../db/neon');

const router = express.Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: 'Nome, email e senha são obrigatórios' });
    }
    if (senha.length < 6) {
      return res.status(400).json({ erro: 'Senha deve ter no mínimo 6 caracteres' });
    }
    const [existente] = await sql`SELECT id FROM usuarios WHERE email = ${email}`;
    if (existente) {
      return res.status(409).json({ erro: 'E-mail já cadastrado' });
    }
    const senhaHash = await bcrypt.hash(senha, 12);
    const [usuario] = await sql`
      INSERT INTO usuarios (nome, email, senha_hash)
      VALUES (${nome}, ${email}, ${senhaHash})
      RETURNING id, nome, email, criado_em
    `;
    const token = jwt.sign({ id: usuario.id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    });
    res.status(201).json({ mensagem: 'Conta criada com sucesso!', token, usuario });
  } catch (err) {
    console.error('Erro no registro:', err.message);
    res.status(500).json({ erro: 'Erro ao criar conta' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;
    if (!email || !senha) {
      return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
    }
    const [usuario] = await sql`SELECT * FROM usuarios WHERE email = ${email}`;
    if (!usuario) {
      return res.status(401).json({ erro: 'E-mail ou senha incorretos' });
    }
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);
    if (!senhaCorreta) {
      return res.status(401).json({ erro: 'E-mail ou senha incorretos' });
    }
    const token = jwt.sign({ id: usuario.id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    });
    res.json({
      mensagem: 'Login realizado com sucesso!',
      token,
      usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email }
    });
  } catch (err) {
    console.error('Erro no login:', err.message);
    res.status(500).json({ erro: 'Erro ao fazer login' });
  }
});

module.exports = router;