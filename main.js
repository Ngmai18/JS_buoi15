document.getElementById("tinhDiem").onclick = function(){
    var diemChuan = document.getElementById("diemChuan");
    var toan = document.getElementById("toan");
    var van = document.getElementById("van");
    var anh = document.getElementById("anh");
    var diemKhuVuc = document.getElementById("khuVuc");
    var diemDoiTuong = document.getElementById("doiTuong");
    var result = "";

    var diemTong = parseFloat(toan.value)  + parseFloat(van.value) + parseFloat(anh.value) + parseFloat(diemDoiTuong.value) + parseFloat(diemKhuVuc.value);

    if(diemTong >= diemChuan) {
        result = "Thí sinh đạt. Tổng điểm: " + diemTong;
    } else {
        result = "Thí sinh trượt. Tổng điểm: " + diemTong;
    }

    document.getElementById("footerCard1").innerHTML =  result;
}

console.log(document.getElementById("tinhTien"));
document.getElementById("tinhTien").onclick = function(){
    var name = document.getElementById("name");
    
    var soKw = document.getElementById("kw");

    var result2 = "";

    // Đươc rnhes b , b xem lại đoạn tính tổng tiề đi nhé , nó bị NaN

    // Do đoạn if else này cảu bạn bị lỗi này nên bạn phải sửa lại mấy cái toán tử <= kia
    if(parseFloat(soKw.value) <= 50){
        var tongTien = 500 * parseFloat(soKw.value);
    } else if(50 < parseFloat(soKw.value)  &&  parseFloat(soKw.value) <= 100){
        var tongTien = 500 * 50 + (parseFloat(soKw.value) - 50) * 650 ;
    } else if(100 < parseFloat(soKw.value)  &&  parseFloat(soKw.value) <= 200){
        var tongTien = 500 * 50 + 50 * 650 + (parseFloat(soKw.value) - 100) * 850 ;
    }else if(200 < parseFloat(soKw.value)  &&  parseFloat(soKw.value) <= 350){
        var tongTien = 500 * 50 + 50 * 650 + 100 * 850 + (parseFloat(soKw.value) - 200) * 1100 ;
    }else if(parseFloat(soKw.value) > 350){
        var tongTien = 500 * 50 + 50 * 650 + 100 * 850 + 150 * 1100 + (parseFloat(soKw.value) - 350) * 1300 ;
    }

    result2 = "Người dùng " + name.value + " phải trả: " + tongTien;

    document.getElementById("footerCard2").innerHTML = result2;
}