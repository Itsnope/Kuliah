<?php
$db_host = 'localhost'; // Nama Server
$db_user = 'root'; // User Server
$db_pass = ''; // Password Server
$db_name = 'prak10'; // Nama Database

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if (!$conn) {
	die ('Gagal terhubung MySQL: ' . mysqli_connect_error());	
} else {
	echo "Berhasil terhubung ke MySQL";
};

$sql = 'SELECT id_produk, tgl_transaksi, harga, kuantitas FROM sales';
		
$query = mysqli_query($conn, $sql);

if (!$query) {
	die ('SQL Error: ' . mysqli_error($conn));
} else {
	echo "Query berhasil di eksekusi";
};