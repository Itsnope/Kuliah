<?php
$db_host = 'localhost'; // Nama Server
$db_user = 'root'; // User Server
$db_pass = ''; // Password Server
$db_name = 'responsi_nim'; // Nama Database (cotnoh : responsi_22220000)

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if (!$conn) {
	die ('Gagal terhubung MySQL: ' . mysqli_connect_error());	
};

$sql = 'SELECT isbn, judul, kategori, harga, IF(kategori="A", harga*20/100, IF(kategori="B", harga*10/100, harga*5/100)) as diskon, IF(kategori="A", (harga-harga*20/100), IF(kategori="B", (harga-harga*10/100), (harga-harga*5/100))) as total FROM buku;';
		
$query = mysqli_query($conn, $sql);

if (!$query) {
	die ('SQL Error: ' . mysqli_error($conn));
};

echo '<table border="1">
		<thead>
			<tr bgcolor="grey">
				<th>ISBN</th>
				<th>JUDUL</th>
				<th>KATEGORI</th>
				<th>HARGA</th>
				<th>DISKON DIPEROLEH</th>
				<th>TOTAL HARGA</th>
			</tr>
		</thead>
		<tbody>';
		
while ($row = mysqli_fetch_array($query)) {
	echo '<tr align="center">
			<td>'.$row['isbn'].'</td>
			<td>'.$row['judul'].'</td>
			<td>'.$row['kategori'].'</td>
			<td>'.number_format($row['harga'], 0, ',', '.').'</td>
			<td>'.number_format($row['diskon'], 0, ',', '.').'</td>
			<td>'.number_format($row['total'], 0, ',', '.').'</td>
		</tr>';
};
echo '
	</tbody>
</table>';