CREATE TABLE teste1(
    nome VARCHAR(50),
    idade INT,
    email VARCHAR(100)
);

INSERT INTO teste1(nome, idade, email) VALUES(
    "Julia",
    22,
    "juliateste123@gmail.com"
);

SELECT * FROM teste1;

DELETE FROM teste1 WHERE nome = "Roberto";

UPDATE teste1 SET nome = "Maria Julia", idade = 26 WHERE nome = "Julia";