CREATE DATABASE bdEstoque
GO
USE bdEstoque

CREATE TABLE tbCliente (
	codCliente INT PRIMARY KEY IDENTITY (1,1),
	nomeCliente VARCHAR(50),
	cpfCliente CHAR (11),
	emailCliente VARCHAR (60),
	sexoCliente CHAR (1),
	dataNascimentoCliente DATE,
)

CREATE TABLE tbVenda (
	codVenda INT PRIMARY KEY,
	dataVenda DATE,
	valorTotalVenda SMALLMONEY,
	codCliente INT FOREIGN KEY REFERENCES tbCliente (codCliente),
)

CREATE TABLE tbFabricante (
	codFabricante INT PRIMARY KEY IDENTITY (1,1),
	nomeFabricante VARCHAR (50),
)

CREATE TABLE tbFornecedor (
	codFornecedor INT PRIMARY KEY IDENTITY (1,1),
	nomeFornecedor VARCHAR (50),
	contatoFornecedor VARCHAR (50),
)

CREATE TABLE tbProduto (
	codProduto INT PRIMARY KEY IDENTITY (1,1),
	descricaoProduto VARCHAR (200),
	valorProduto SMALLMONEY,
	quantidadeProduto INT,
	codFabricante INT FOREIGN KEY REFERENCES tbFabricante (codFabricante),
	codFornecedor INT FOREIGN KEY REFERENCES tbFornecedor (codFornecedor),
)

CREATE TABLE tbItensVenda (
	codItensVenda INT PRIMARY KEY IDENTITY (1,1),
	codVenda INT FOREIGN KEY REFERENCES tbVenda (codVenda),
	codProduto INT FOREIGN KEY REFERENCES tbProduto (codProduto),
	quantidadeItensVenda INT,
	subTotalItensVenda MONEY,
)

INSERT INTO tbCliente (nomeCliente,cpfCliente,emailCliente,sexoCliente,dataNascimentoCliente)
	VALUES ('Armando José Santana', '12345678900', 'armandojsantana@outlook.com', 'm', '21/02/1961'),
	('Sheila Carvalho Leal', '45678909823', 'scarvalho@ig.com.br', 'f', '13/09/1978'),
	('Carlos Henrique Souza', '76598278299', 'chenrique@ig.com.br', 'm', '08/09/1981'),
	('Maria Aparecida Souza', '87365309899', 'mapdasouza@outlook.com', 'f', '07/07/1962'),
	('Adriana Nogueira Silva', '76354309388', 'drica1977@ig.com.br', 'f', '09/04/1977'),
	('Paulo Henrique Silva', '87390123111', 'phsilva80@hotmail.com', 'm', '02/02/1987')

INSERT INTO tbFabricante (nomeFabricante)
	VALUES ('Unilever'),
	('P&G'),
	('Bunge')

INSERT INTO tbFornecedor (nomeFornecedor, contatoFornecedor)
	VALUES ('Atacadão', 'Carlos Santos'),
	('Assai', 'Maria Stella'),
	('Roldão', 'Paulo César')

INSERT INTO tbProduto (descricaoProduto, valorProduto, quantidadeProduto ,codFabricante ,codFornecedor)
	VALUES ('Amaciante Downy', 5.76, 1500, 2, 1),
	('Amaciante Comfort', 5.45, 2300, 1, 1),
	('Sabão em pó OMO', 5.99, 1280, 1, 2),
	('Margarina Qually', 4.76, 2500, 3,1),
	('Salsicha Hot Dog Sadia', 6.78, 2900, 3, 2),
	('Mortadela Perdigão', 2.50, 1200, 3, 3),
	('Hamburguer Sadia', 9.98, 1600, 3, 1),
	('Fralda Pampers', 36.00, 340, 2,3),
	('Xampu Seda', 5.89, 800, 1, 2),
	('Condicionador Seda', 6.50, 700, 1, 3)

INSERT INTO tbVenda(codVenda, dataVenda, valorTotalVenda, codCliente) VALUES
(1, '01/02/2014', 4500.00, 1),
(2, '03/02/2014', 3400.00, 1),
(3, '10/02/2014', 2100.00, 1),
(4, '15/02/2014', 2700.00, 3),
(5, '17/03/2014', 560.00,  3),
(6, '09/04/2014', 1200.00, 4),
(8, '07/05/2014', 3500.00, 5),
(9, '07/05/2014', 3400.00, 1),
(10, '05/05/2014', 4000.00, 2)

INSERT INTO tbItensVenda(codVenda,codProduto,quantidadeItensVenda,subTotalItensVenda) VALUES
(1, 1, 200, 1500.00),
(1, 2, 300, 3000.00),
(2, 4, 120, 1400.00),
(2, 2, 200, 1000.00),
(2, 3, 130, 1000.00),
(3, 5, 200, 2100.00),
(4, 4, 120, 1000.00),
(4, 5, 450, 750.00),
(5, 5, 200, 560.00),
(6, 7, 200, 600.00),
(6, 6, 300, 600.00),
(8, 1, 300, 2500.00),
(8, 2, 200, 1000.00),
(9, 6, 250, 1700.00),
(9, 5, 200, 1700.00),
(10,4, 1000,4000.00)

--EXA
SELECT descricaoProduto, nomeFabricante FROM tbProduto
INNER JOIN tbFabricante ON tbProduto.codFabricante = tbFabricante.codFabricante

--EXB
SELECT descricaoProduto, nomeFornecedor FROM tbProduto
INNER JOIN tbFornecedor ON tbProduto.codFornecedor = tbFornecedor.codFornecedor

--EXC
SELECT SUM(quantidadeProduto) AS 'Soma quantidade dos produtos', nomeFabricante FROM tbProduto
INNER JOIN tbFabricante ON tbProduto.codFabricante = tbFabricante.codFabricante
GROUP BY nomeFabricante

--EXD
SELECT valorTotalVenda, nomeCliente FROM tbVenda
INNER JOIN tbCliente ON tbVenda.codCliente = tbCliente.codCliente

--EXE
SELECT AVG(valorProduto) AS 'Média dos valores dos produtos', nomeFornecedor FROM tbProduto
INNER JOIN tbFornecedor ON tbProduto.codFornecedor = tbFornecedor.codFornecedor
GROUP BY nomeFornecedor


SELECT * FROM tbVenda
SELECT * FROM tbItensVenda

--EXF				 
SELECT COUNT(codVenda) AS 'Soma das vendas', nomeCliente FROM tbVenda
INNER JOIN tbCliente ON tbVenda.codCliente = tbCliente.codCliente
GROUP BY nomeCliente
ORDER BY nomeCliente

--EXG
SELECT SUM(valorProduto) AS 'Soma dos preços dos produtos', nomeFabricante FROM tbProduto
INNER JOIN tbFabricante ON tbProduto.codFabricante = tbFabricante.codFabricante
GROUP BY nomeFabricante

--EXH
SELECT AVG(valorProduto) AS 'Média dos valores dos produtos', nomeFornecedor FROM tbProduto
INNER JOIN tbFornecedor ON tbProduto.codFornecedor = tbFornecedor.codFornecedor
GROUP BY nomeFornecedor

--EXI
SELECT COUNT(tbVenda.codVenda) AS 'Soma das vendas', descricaoProduto FROM tbVenda
INNER JOIN tbItensVenda ON tbVenda.codVenda = tbItensVenda.codVenda
INNER JOIN tbProduto ON tbProduto.codProduto = tbItensVenda.codProduto
GROUP BY descricaoProduto

--EXJ
SELECT SUM(valorTotalVenda) AS 'Soma das vendas', nomeCliente FROM tbVenda
INNER JOIN tbCliente ON tbVenda.codCliente = tbCliente.codCliente
WHERE MONTH(dataVenda) = 2 AND YEAR(dataVenda) = 2014
GROUP BY nomeCliente