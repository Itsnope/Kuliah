# ppw-prares_(formulir+database)

Ketentuan pra-responsi prak ppw  :
Buat form registrasi dengan data input yang telah ditentukan. 

## Panduan database

1. Buat database :
```sql
CREATE DATABASE regis_ppw;
```

2. Buat table :
```sql
CREATE TABLE `registrasi_ssb` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nama` VARCHAR(100) NOT NULL,
    `tempat_lahir` VARCHAR(50) NOT NULL,
    `tanggal_lahir` DATE NOT NULL,
    `usia` INT NOT NULL,
    `jenis_kelamin` ENUM('Laki-laki', 'Perempuan') NOT NULL,
    `nama_ortu` VARCHAR(100) NOT NULL,
    `no_telp` VARCHAR(15) NOT NULL,
    `alamat` TEXT NOT NULL,
    `rt` VARCHAR(3) NOT NULL,
    `rw` VARCHAR(3) NOT NULL,
    `desa` VARCHAR(50) NOT NULL,
    `kecamatan` VARCHAR(50) NOT NULL,
    `foto` VARCHAR(255),
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## Dokumentasi Hasil :
![hasil-praresppw](https://raw.githubusercontent.com/Itsnope/Kuliah/main/PPW/ppw-prares_(formulir+database)/Dokumentasi/1.form-atas.png)