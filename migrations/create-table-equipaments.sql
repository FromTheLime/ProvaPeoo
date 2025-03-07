CREATE TABLE equipaments( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    status ENUM('DIsponível', 'Alugado', 'Manutenção') NOT NULL,
    daily_rate INT NOT NULL,
);