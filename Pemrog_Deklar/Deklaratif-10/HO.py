def ke_huruf_kapital(teks):
  return teks.upper()

def konversi_ke_kapital(fungsi, data_list):
  hasil = []
  for item in data_list:
    hasil.append(fungsi(item))
  return hasil

kata = ["abcde", "Hallo", "pemrograman", "Sekolah Dasar"]
print(konversi_ke_kapital(ke_huruf_kapital, kata))