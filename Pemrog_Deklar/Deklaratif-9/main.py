def menu():
  print(
    " =======MENU=======\n",
    "1. Data Mahasiswa\n",
    "2. Data Dosen\n",
    "3. Keluar"
  )

menu()

pilihan = input("Pilih menu (1/2/3): ")

match pilihan:
  case "1":
    print(
      "Nama Mahasiswa : Noverianus\n",
      "NIM            : 22220027"
    )
  case "2":
    print(
      "Nama Dosen     : Putra Wanda, S.Kom.,M.Eng.,Ph.D\n",
      "Mata Kuliah    : Pemrograman Deklaratif"
    )
  case "3":
    print(
      "Terima kasih, program selesai."
    )
  case _:
    print("Pilihan tidak valid!")