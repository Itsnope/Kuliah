<?php
    class Biodata{
        var $nama;

        function setnama($namamhs){
            $this->nama = $namamhs;
        }
        function getnama(){
            echo "Nama : ", $this->nama;
        }
        function setnim($nimmhs){
            $this->nim = $nimmhs;
        }
        function getnim(){
            echo "NIM : ", $this->nim;
        }
        function setalamat($alamatmhs){
            $this->alamat = $alamatmhs;
        }
        function getalamat(){
            echo "Alamat : ",$this->alamat;
        }
        function settgllahir($tgllahirmhs){
            $this->tgllahir = $tgllahirmhs;
        }
        function gettgllahir(){
            echo "Tanggal Lahir : ", $this->tgllahir;
        }
    }

    $mhs1 = new Biodata();

    $mhs1->setnama("Your Name");
    echo $mhs1->getnama()."</br>";
    $mhs1->setnim("22220000");
    echo $mhs1->getnim()."</br>";
    $mhs1->setalamat("Your Address");
    echo $mhs1->getalamat()."</br>";
    $mhs1->settgllahir("Your date of birth");
    echo $mhs1->gettgllahir()."</br>";          
    
?>