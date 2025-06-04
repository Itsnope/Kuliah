# ppw9_(CRUD1)

Tugas ppw-9 :
Melengkapi kode pada website CRUD yang kurang (delete.php & typo). 

## Panduan database

1. Buat database :
```sql
CREATE DATABASE latihancrud;
```

2. Buat table :
```sql
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
```

3. Contoh record :
```sql
INSERT INTO `user` VALUES
(1,'Nover','Nope','nover123','nover@gmail.com'),(2,'Poatan','El Matador','Poatan123','poat@ufc.com');
```

## Hasil Output :
![hasil-prakppw9](https://raw.githubusercontent.com/Itsnope/Kuliah/main/PPW/ppw9_(CRUD1)/hasil-prakppw9.png)

Source code full : [1tugascrud](https://github.com/phbismynr/mk_web2/tree/master/1tugascrud)