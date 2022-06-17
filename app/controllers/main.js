
var spService = new SanPhamService();

function getProductList() 
{ //Pending
  const promise = spService.getList();

  promise.then(function(result){
    // Resolve
    // console.log(result);
    // console.log(result.data);
    hienThiTable(result.data);

  });
  promise.catch(function(error){
    // Reject
    console.log(error);
  });
}

getProductList();

function hienThiTable(mangSP)
{
  var content = "";
  var stt = 0;
  mangSP.map(function(sp){
      content +=`
          <tr>
              <td>${++stt}</td>
              <td>${sp.name}</td>
              <td>${sp.price}</td>
              <td>${sp.img}</td>
              <td>${sp.desc}</td>
              <td>
                  <button class="btn btn-info">Xem</button>
                  <button class="btn btn-danger">Xóa</button>
              </td>
          </tr>
      `
  })

  document.querySelector("#tblDanhSachSP").innerHTML = content;
}

// DOM tới html để thêm "button thêm mới"
document.querySelector("#btnThemSP").addEventListener("click",function(){
  document.querySelector("#myModal .modal-footer").innerHTML = `
      <button class="btn btn-success" onclick="addProduct()">Thêm</button>
  `
});

function addProduct()
{
  var name = document.querySelector("#TenSP").value;
  var price = document.querySelector("#GiaSP").value;
  var img = document.querySelector("#HinhSP").value;
  var desc = document.querySelector("#MoTa").value;

  var sp = new SanPham(name,price,img,desc);

  const promise = spService.addItem(sp);

  promise.then(function(result){
      console.log(result);
  }).catch(function(error){
      console.log(error);
  });

}