

function SanPham(ten,gia,manHinh,camSau,camTruoc,hinh,mota,loai)
{
  this.name = ten;
  this.price = gia;
  this.screen = manHinh;
  this.backCamera = camSau;
  this.frontCamera = camTruoc;
  this.img = hinh;
  this.desc = mota;
  this.type = loai;
}