window.onload = function(){
    // -------------Đọc chọn xe -----------------
function readSelectRad(){
    var radUber = document.getElementsByName('selector');
    var radValue = '';
        for(var i=0;i<radUber.length;i++){
            if(radUber[i].checked == true){
                radValue=radUber[i].value;
            }
        }
        if(radValue === '')
            return alert("Mời bạn chọn loại xe");
        else
            return radValue; 
}


// ------------------Đọc và kiểm tra định dạng số km------------
function readSoKm(){
    var soKm = Number(document.getElementById('so-km').value);
    if(isNaN(soKm))
        return alert("vui lòng nhập đúng định dạng số km");
    else
        return soKm;
}


// -----------------Đọc và kiểm tra định dạng thời gian-----------------
function readThoiGian(){
    var thoiGian = Number(document.getElementById('thoi-gian').value);
    if(isNaN(thoiGian))
        return alert("Vui lòng nhập đúng định dạng thời gian");
    else
        return thoiGian;
}


//---------- Khai báo biến cho các button và bảng giá
var btnTinhTien= document.getElementById('tinh-tien');

const GIA_1KM_X = 8000;
const GIA_20KM_X = 12000;
const GIA_21KM_X = 10000;

const GIA_1KM_SUV = 9000;
const GIA_20KM_SUV = 14000;
const GIA_21KM_SUV = 12000;

const GIA_1KM_BL = 10000;
const GIA_20KM_BL = 16000;
const GIA_21KM_BL = 14000; 

const THOI_GIAN_X =2000;
const THOI_GIAN_SUV =3000;
const THOI_GIAN_BL =4000;

function tinhTien(){
// input
var loaiXe=readSelectRad();
var soKm=readSoKm();
var thoiGian=readThoiGian();
var hoadon={
    loaiXe:"",
    soKm:"",
    thoiGian:"",
    tongTien:"",
    gia1km:"",
    thanhtien1km:"",
    gia20km:"",
    thanhtien20km:"",
    gia21km:"",
    thanhtien21km:"",
    tiencho:"",
    thanhtiencho:""
}
// output
var tongTien=0;
if(Number.isFinite(soKm) && Number.isFinite(thoiGian)){
    if(loaiXe === "uber-x"){
        hoadon.gia1km=GIA_1KM_X;
        hoadon.gia20km=GIA_20KM_X;
        hoadon.gia21km=GIA_21KM_X;
        hoadon.tiencho=THOI_GIAN_X;
        hoadon.thanhtiencho=THOI_GIAN_X*thoiGian;
        if(soKm<1){
            tongTien=soKm*GIA_1KM_X+thoiGian*THOI_GIAN_X;
            hoadon.thanhtien1km=soKm*GIA_1KM_X;
        }
        else if(1 <= soKm && soKm <= 20){
            tongTien=GIA_1KM_X + (soKm-1)*GIA_20KM_X + thoiGian*THOI_GIAN_X;
            hoadon.thanhtien1km=GIA_1KM_X;
            hoadon.thanhtien20km=(soKm-1)*GIA_20KM_X;
        }
        else{
            tongTien=GIA_1KM_X + 19*GIA_20KM_X + (soKm-20)*GIA_21KM_X+thoiGian*THOI_GIAN_X;
            hoadon.thanhtien1km=GIA_1KM_X;
            hoadon.thanhtien20km= 19*GIA_20KM_X;
            hoadon.thanhtien21km=(soKm-20)*GIA_21KM_X;
        }
    }
    else if(loaiXe === "uber-suv"){
        hoadon.gia1km=GIA_1KM_SUV;
        hoadon.gia20km=GIA_20KM_SUV;
        hoadon.gia21km=GIA_21KM_SUV;
        hoadon.tiencho=THOI_GIAN_SUV;
        hoadon.thanhtiencho=THOI_GIAN_SUV*thoiGian;
        if(soKm<1){
            tongTien=soKm*GIA_1KM_SUV+thoiGian*THOI_GIAN_SUV;
            hoadon.thanhtien1km=soKm*GIA_1KM_SUV;
        }
        else if(1 <= soKm && soKm <= 20){
            tongTien=GIA_1KM_SUV + (soKm-1)*GIA_20KM_SUV + thoiGian*THOI_GIAN_SUV;
            hoadon.thanhtien1km=GIA_1KM_SUV;
            hoadon.thanhtien20km=(soKm-1)*GIA_20KM_SUV;
        }
        else{
            tongTien=GIA_1KM_SUV + 19*GIA_20KM_SUV + (soKm-20)*GIA_21KM_SUV+thoiGian*THOI_GIAN_SUV;
            hoadon.thanhtien1km=GIA_1KM_SUV;
            hoadon.thanhtien20km= 19*GIA_20KM_SUV;
            hoadon.thanhtien21km=(soKm-20)*GIA_21KM_SUV;
        }
    }
    else{
        hoadon.gia1km=GIA_1KM_BL;
        hoadon.gia20km=GIA_20KM_BL;
        hoadon.gia21km=GIA_21KM_BL;
        hoadon.tiencho=THOI_GIAN_BL;
        hoadon.thanhtiencho=THOI_GIAN_BL*thoiGian;
        if(soKm<1){
            tongTien=soKm*GIA_1KM_BL+thoiGian*THOI_GIAN_BL;
            hoadon.thanhtien1km=soKm*GIA_1KM_BL;
        }
        else if(1 <= soKm && soKm <= 20){
            tongTien=GIA_1KM_BL + (soKm-1)*GIA_20KM_BL + thoiGian*THOI_GIAN_BL;
            hoadon.thanhtien1km=GIA_1KM_BL;
            hoadon.thanhtien20km=(soKm-1)*GIA_20KM_BL;
        }
        else{
            tongTien=GIA_1KM_BL + 19*GIA_20KM_BL + (soKm-20)*GIA_21KM_BL+thoiGian*THOI_GIAN_BL;
            hoadon.thanhtien1km=GIA_1KM_BL;
            hoadon.thanhtien20km= 19*GIA_20KM_BL;
            hoadon.thanhtien21km=(soKm-20)*GIA_21KM_BL;
        }
    }
    }  
    hoadon.loaiXe=loaiXe;
    hoadon.thoiGian=thoiGian;
    hoadon.soKm=soKm;
    hoadon.tongTien=tongTien
    return hoadon;
}

btnTinhTien.onclick = function (){
    var hoadon = tinhTien();
    document.getElementById('xuatTien').innerHTML=hoadon.tongTien;
    document.getElementById('divThanhTien').style.display='block';
};

// -------------sự kiện click button in hóa đơn --------------
var btnHoaDon = document.getElementById('hoa-don');
btnHoaDon.onclick = function(){
    var modal =document.querySelector('.modal');
    var hoadon = tinhTien();
    document.getElementById('xuatTien').innerHTML=hoadon.tongTien;
    document.getElementById('divThanhTien').style.display='block';
    if(hoadon.soKm<1)
    {
        document.querySelector('.modal-body').innerHTML=
        `
        <div class="col-3 fw-bold">Chi tiết</div>
        <div class="col-3 fw-bold">Sử dụng</div>
        <div class="col-3 fw-bold">Đơn giá </div>
        <div class="col-3 fw-bold">Thành tiền</div>
    
        <div class="col-3 ">${hoadon.loaiXe}</div>
        <div class="col-3 ">${hoadon.soKm} km</div>
        <div class="col-3 ">${hoadon.gia1km}</div>
        <div class="col-3 ">${hoadon.thanhtien1km}</div>
        
        <div class="col-3 ">Thời gian chờ</div>
        <div class="col-3 ">${hoadon.thoiGian} phút</div>
        <div class="col-3 ">${hoadon.tiencho}</div>
        <div class="col-3 ">${hoadon.thanhtiencho}</div>

        <div class="col-3 bg-success">Total</div>
        <div class="col-3 bg-success"></div>
        <div class="col-3 bg-success"></div>
        <div class="col-3 bg-success">${hoadon.tongTien}</div>
        `;
    }

    //quãng đường hơn 20 km
    else if(hoadon.soKm>20){
        document.querySelector('.modal-body').innerHTML=
        `
        <div class="col-3 fw-bold">Chi tiết</div>
        <div class="col-3 fw-bold">Sử dụng</div>
        <div class="col-3 fw-bold">Đơn giá </div>
        <div class="col-3 fw-bold">Thành tiền</div>
    
        <div class="col-3 ">${hoadon.loaiXe}</div>
        <div class="col-3 ">1 km</div>
        <div class="col-3 ">${hoadon.gia1km}</div>
        <div class="col-3 ">${hoadon.thanhtien1km}</div>
        
        <div class="col-3 ">${hoadon.loaiXe}</div>
        <div class="col-3 ">19 km</div>
        <div class="col-3 ">${hoadon.gia20km} km</div>
        <div class="col-3 ">${hoadon.thanhtien20km}</div>

        <div class="col-3 ">${hoadon.loaiXe}</div>
        <div class="col-3 ">${(hoadon.soKm-20)} km</div>
        <div class="col-3 ">${hoadon.gia21km}</div>
        <div class="col-3 ">${hoadon.thanhtien21km}</div>

        <div class="col-3 ">Thời gian chờ</div>
        <div class="col-3 ">${hoadon.thoiGian} phút</div>
        <div class="col-3 ">${hoadon.tiencho}</div>
        <div class="col-3 ">${hoadon.thanhtiencho}</div>

        <div class="col-3 bg-success">Total</div>
        <div class="col-3 bg-success"></div>
        <div class="col-3 bg-success"></div>
        <div class="col-3 bg-success">${hoadon.tongTien}</div>
        
        `;
    }
    // ----quãng đường đi lớn hơn 1 nhỏ hơn bằng 20
    else{
        document.querySelector('.modal-body').innerHTML=
        `
        <div class="col-3 fw-bold">Chi tiết</div>
        <div class="col-3 fw-bold">Sử dụng</div>
        <div class="col-3 fw-bold">Đơn giá </div>
        <div class="col-3 fw-bold">Thành tiền</div>
    
        <div class="col-3 ">${hoadon.loaiXe}</div>
        <div class="col-3 ">1 km</div>
        <div class="col-3 ">${hoadon.gia1km}</div>
        <div class="col-3 ">${hoadon.thanhtien1km}</div>

        <div class="col-3 ">${hoadon.loaiXe}</div>
        <div class="col-3 ">${hoadon.soKm-1} km</div>
        <div class="col-3 ">${hoadon.gia20km}</div>
        <div class="col-3 ">${hoadon.thanhtien20km}</div>
        
        <div class="col-3 ">Thời gian chờ</div>
        <div class="col-3 ">${hoadon.thoiGian} phút</div>
        <div class="col-3 ">${hoadon.tiencho}</div>
        <div class="col-3 ">${hoadon.thanhtiencho}</div>

        <div class="col-3 bg-success">Total</div>
        <div class="col-3 bg-success"></div>
        <div class="col-3 bg-success"></div>
        <div class="col-3 bg-success">${hoadon.tongTien}</div>
        `;
    }
    modal.style.display="block";

}

//------------sự kiện đóng form---------------
function closeModal(){
    var modal =document.querySelector('.modal');
    modal.style.display='none';
}
var btn1 = document.getElementById('close-1');
var btn2 = document.getElementById('close-2');
btn1.onclick = function (){
    var modal =document.querySelector('.modal');
    modal.style.display='none';
}
btn2.onclick = function (){
    var modal =document.querySelector('.modal');
    modal.style.display='none';
}
}
