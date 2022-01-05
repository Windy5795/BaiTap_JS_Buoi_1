//QUY ĐỔI TIỀN

/**
 * Khối 1:input
 * giaUsd, soUsd, soTien
 * 
 * Khối 2:
 * _tạo biến và lấy giá trị từ form
 * soTien = soUsd * giaUsd
 * _hiển thị kết quả
 * 
 * Khối 3:
 * soTien
 */

function soTien(){
    var giaDola = document.getElementById("giausd").value;
    var soDola = document.getElementById("inputusd").value;
    console.log(giaDola, soDola);
    var soTien = giaDola * soDola;
    document.getElementById("sotien").innerHTML="Số tiền là:" +soTien.toLocaleString() +"vnđ";
}


//TÍNH DIỆN TÍCH VÀ CHU VI HÌNH CHỮ NHẬT

/**
 * Khối 1: input
 * chieuDai, chieuRong, chuVi, dienTich
 * 
 * Khối 2:
 * -tạo biến và lấy giá trị từ form
 * chuVi = (chieuDai + chieuRong) * 2
 * dienTich = chieuDai * chieuRong
 * -hiển thị kết quả
 * 
 * Khối 3:
 * chuVi
 * dienTich
 * 
 */

function chuVi(){
    var chieuDai = document.getElementById("chieudai").value;
    var chieuRong = document.getElementById("chieurong").value;
    var chuVi = ( Number(chieuDai) + Number(chieuRong)) * 2;
    document.getElementById("chuvi").innerHTML="Chu vi là:" +chuVi;
}

function dienTich(){
    var chieuDai = document.getElementById("chieudai").value;
    var chieuRong = document.getElementById("chieurong").value;
    var dienTich = chieuDai * chieuRong;
    document.getElementById("dientich").innerHTML="Diện tích là:" +dienTich;
}

//TỔNG 2 KÍ SỐ

/**
 * Khối 1: input
 * số có 2 chữ số
 * soNguyenDuong
 * 
 * Khối 2:
 * -tạo biến và lấy giá trị từ form 
 * soNguyenDuong, phanChuc, donVi, tinhTong
 * -lấy sô hàng chục và đơn vị
 * -tính tổng
 * -hiển thị kết quả
 * 
 * Khối 3:
 * tinhTong
 */

function tinhTong(){
    var soNguyenDuong = document.getElementById("nhapso").value;
    var phanChuc = Math.floor(soNguyenDuong/10);
    var donVi = soNguyenDuong % 10;
    var tinhTong = phanChuc + donVi;
    document.getElementById("ketqua").innerHTML= "Tổng 2 kí số của số vừa nhập là:" +tinhTong;
}