

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

  this.loaiDT = function(sp) {
    if(loai == "apple") {
      document.querySelector("#products .card").innerHTML = `
        <div class"card">
          <img src="${sp.img}" class="card-img-top"
          <div class="card-body">
            <div class="card-title">${sp.name}</div>
            <div class="card-text">${sp.desc}</div>
            <div class="price-btn">${sp.price}</div>
          </div>
        </div>
      `;
    }else if(loai == "samsung") {
      document.querySelector("#products .card").innerHTML = `
        <div class"card">
          <img src="${sp.img}" class="card-img-top"
          <div class="card-body">
            <div class="card-title">${sp.name}</div>
            <div class="card-text">${sp.desc}</div>
            <div class="price-btn">${sp.price}</div>
          </div>
        </div>
      `;
    }else{
      alert("Loại đt chưa hợp lệ!");
    }
  }
}