require('dotenv').config();
const { initDb } = require('./neon');

console.log('🔄 Iniciando migração do banco de dados...');
initDb()
  .then(() => {
    console.log('✅ Migração concluída com sucesso!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Falha na migração:', err.message);
    process.exit(1);
  });