# tugas_(salad)

Tugas : 
Menerapkan CRUD hasil revisi pada studi kasus pilihan. 

## Panduan database

1. Buat database :
```sql
CREATE DATABASE salada;
```

2. Buat table :
```sql
CREATE TABLE `salad` (
  `kode_salad` varchar(11) NOT NULL,
  `nama_salad` varchar(255) NOT NULL,
  `harga_salad` varchar(255) NOT NULL,
  `stok_salad` varchar(255) NOT NULL,
  `jenis_salad` varchar(255) NOT NULL,
  `deskripsi_salad` varchar(510) NOT NULL,
  PRIMARY KEY (`kode_salad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

3. Contoh record :
```sql
INSERT INTO `salad` VALUES
('SAL01', 'Caesar Salad', 50000, 10, 'Vegetarian', 'Salad dengan daun romaine, croutons, dan saus Caesar.'), 
('SAL02', 'Greek Salad', 45000, 5, 'Vegetarian', 'Salad dengan tomat, timun, zaitun, dan keju feta.'), 
('SAL03', 'Fruit Salad', 40000, 8, 'Fruit Salad', 'Campuran buah segar seperti apel, anggur, kiwi, dan semangka.'), 
('SAL04', 'Chicken Salad', 60000, 6, 'Non-Vegetarian', 'Salad dengan potongan ayam panggang, selada, dan saus madu-mustard.'), 
('SAL05', 'Tuna Salad', 55000, 6, 'Non-Vegetarian', 'Salad dengan tuna segar, selada, tomat, dan mayones.');
```

## Hasil Output :
![tugas-prakppw9](https://raw.githubusercontent.com/Itsnope/Kuliah/main/PPW/ppw9_(CRUD1)/tugas-prakppw9.png)