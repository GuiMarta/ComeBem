const mysql = require('mysql2');

// Criando a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Substitua pelo seu usuário
  password: 'sua_senha', // Substitua pela sua senha
  database: 'nome_do_banco' // Substitua pelo nome do banco de dados
});

// Conectando ao MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

// Realizando uma consulta
connection.query('SELECT * FROM sua_tabela', (err, results) => {
  if (err) {
    console.error('Erro na consulta:', err);
    return;
  }
  console.log('Resultados:', results);
});

// Fechando a conexão
connection.end();
