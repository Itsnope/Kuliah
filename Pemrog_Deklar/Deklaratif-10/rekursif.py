def pangkat(m, n):
  if n == 0:
    return 1
  else :
    return m * pangkat(m, n-1)

basis = int(input("Masukkan nilai basis : "))
eksponen = int(input("Masukkan nilai eksponen : "))

print(f"{basis}^{eksponen} = {pangkat(basis, eksponen)}")