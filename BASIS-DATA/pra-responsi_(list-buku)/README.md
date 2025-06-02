# pra-responsi_(list-buku)

Ketentuan pra-responsi :
Menampilkan tabel list buku beserta dengan kolom diskon yg didapat.

## Panduan database

1. Buat database :
```sql
CREATE DATABASE pra_nim;
```

2. Buat table :
```sql
CREATE TABLE buku (
  `isbn` int(5) NOT NULL,
  `judul` varchar(50) NOT NULL,
  `kategori` varchar(1) NOT NULL,
  `harga` int(10) NOT NULL,
  PRIMARY KEY (`isbn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

3. Contoh record :
```sql
INSERT INTO `buku` VALUES 
(1234,'Perjalanan Mencari Kitab Suci','A',100000),
(2345,'Aku Adalah Anak Gembala','B',90000),
(3456,'Berdiri Sejak Kau Mendua','C',120000),
(4567,'Anak Ayam Turun Sepuluh','B',78000);
```

## Contoh Output :
![tabel_pra-responsi](https://raw.githubusercontent.com/Itsnope/Kuliah/main/BASIS-DATA/pra-responsi_(list-buku)/tabel_pra-responsi.png)