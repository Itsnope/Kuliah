# prak11_(list-transaksi-produk)

Materi prak-11 :
Menampilkan tabel transaksi dari tabel pada database(prak10) + total harga

## Panduan database

1. Buat database (skip klo sdh buat prak10) :
```sql
CREATE DATABASE prak10;
```

2. Buat table (skip klo sdh buat prak10) :
```sql
CREATE TABLE `sales` (
  `id_produk` int(5) NOT NULL,
  `tgl_transaksi` date NOT NULL,
  `harga` int(10) NOT NULL,
  `kuantitas` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

3. Contoh record (skip klo sdh buat prak10) :
```sql
INSERT INTO `sales` VALUES
(100,'2016-09-20',265000,8), (100,'2016-10-11',270000,3),
(101,'2016-08-17',250000,8), (101,'2016-08-24',380000,12),
(101,'2016-05-10',250000,12), (101,'2016-05-04',375000,11),
(101,'2016-07-15',265000,3), (100,'2016-05-19',250000,4),
(101,'2016-06-17',255000,12), (100,'2016-09-11',280000,12);
```

## Contoh Output :
![hasil-prak11](https://raw.githubusercontent.com/Itsnope/Kuliah/main/BASIS-DATA/prak11_(list-transaksi-produk)/hasil-prak11.png)