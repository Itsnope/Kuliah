def ganjil_genap(bilangan):
  if bilangan % 2 == 0:
    return "bilangan genap"
  else :
    return "bilangan ganjil"

bil = int(input("Masukkan bilangan:"))
hasil = ganjil_genap(bil)
print(f"Bilangan {bil} adalah {hasil}")