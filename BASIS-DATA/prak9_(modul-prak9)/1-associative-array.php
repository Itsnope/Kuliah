<html>
<head>
<title>Koneksi Database MySQL</title>
</head>
<body>
<h1>Koneksi database dengan mysql_fetch_assoc</h1>
<?php

$conn=mysqli_connect ("localhost","root","") or die ("koneksi gagal");

mysqli_select_db($conn, "prak9");

$hasil = mysqli_query($conn, "SELECT * FROM liga"); 

while ($row=mysqli_fetch_assoc($hasil)) {
  echo "Liga " . $row["negara"];
  echo " mempunyai " . $row["champion"];
  echo " wakil di liga champion <br>";
};

?>
</body>
</html