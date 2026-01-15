class Mahasiswa:
  def __init__(self, nama, semester):
    self.nama = nama
    self.semester = semester

  def tampilkan_data(self):
    print("Nama:", self.nama)
    print("Semester:", self.semester)

mhs = Mahasiswa("Diaz", "8")
mhs.tampilkan_data()