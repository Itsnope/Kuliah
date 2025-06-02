# prak9_(modul-prak9)

Materi prak-9 :
Mengambil data dari database berdasarkan nama kolom & indeks numerik.

## Kapan digunakan?
Saat `mysqli_fetch_array($hasil)` digunakan, PHP mengembalikan data dalam dua cara :
1. Berdasarkan nama kolom/Associative array → `$row["negara"]`
2. Berdasarkan indeks numerik kolom/Numeric array → `$row[1]`

Sedangkan,

Jika `mysqli_fetch_assoc($hasil)` yg digunakan, maka hanya bisa akses nama kolom/Associative array `$row["negara"]`.

Jika `mysqli_fetch_row($hasil)` yg digunakan, maka hanya bisa akses indeks numerik kolom/Numeric array `$row[1]`.


## Panduan database

1. Buat database :
```sql
CREATE DATABASE prak9;
```

2. Buat table :
```sql
CREATE TABLE `liga` (
  `kode` char(3) NOT NULL,
  `negara` char(15) DEFAULT NULL,
  `champion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

3. Contoh record :
```sql
INSERT INTO `liga` VALUES 
('jer','Jerman',4),
('spa','Spanyol',4),
('ing','Inggris',3),
('bel','Belanda',3);
```

## Contoh Output :
![hasil-prak9](https://raw.githubusercontent.com/Itsnope/Kuliah/main/BASIS-DATA/prak9_(modul-prak9)/hasil-prak9.png)