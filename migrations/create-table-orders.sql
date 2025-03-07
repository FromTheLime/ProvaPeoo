CREATE TABLE orders( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    equipament_id INT NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    pick_up_date  DATE NOT NULL,
    drop_off_date DATE NOT NULL,
    final_price DECIMAL(10,2)
    status ENUM('Ativa', 'Encerrada') NOT NULL,
    FOREIGN KEY (equipament_id) REFERENCES equipaments(id),
);

