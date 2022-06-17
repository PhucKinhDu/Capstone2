
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
              <td>${sp.screen}</td>
              <td>${sp.backCamera}</td>
              <td>${sp.frontCamera}</td>
              <td>${sp.img}</td>
              <td>${sp.desc}</td>
              <td>${sp.type}</td>
              <td>
                  <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="xemChiTiet('${sp.id}')">Xem</button>
                  <button onclick="deleteProduct('${sp.id}')" class="btn btn-danger">Xóa</button>
              </td>
          </tr>
      `
  })

  // data-toggle="modal" data-target="#myModal"  =>> 2 thuộc tính để mở "pop-up Modal" || QUAN TRỌNG ||

  document.querySelector("#tblDanhSachSP").innerHTML = content;
}

// DOM tới html để thêm "button thêm mới"
document.querySelector("#btnThemSP").addEventListener("click",function(){
  document.querySelector("#myModal .modal-footer").innerHTML = `
      <button class="btn btn-success" onclick="addProduct()">Thêm</button>
  `

  //Gọi từ cha tới con || querySelectorAll("#myModal .form-control") || để clear dữ liệu cũ đã ghi trong ô input (nằm trong button thêm mới)
  var controlELE = document.querySelectorAll("#myModal .form-control");
  // console.log(controlELE);
  // Dùng querySelectorAll thì sẽ trả về mảng NodeList (f12 lên xem mảng có NodeList(8) hay k?)

  //Map => chỉ dùng với kiểu mảng (Array) và k dùng đc với NodeList
  // Nên dùng for: kiểu dữ liệu danh sách chạy đc hết

  for(var i = 0; i < controlELE.length; i++)
  {
    // console.log(controlELE[i]);
    controlELE[i].value = ""; // dòng code này là clear giá trị cũ đã ghi trước đó
  }

  /**
   * Tình huống Clear này có khả năng gặp
   * 
   * Nếu có thẻ form bên ngoài thì DOM tới thẻ form đó (id, class) => gọi thẻ form đó .reset tự động Clear các dữ liệu bên trong
   */

});

function addProduct()
{
  var name = document.querySelector("#TenSP").value;
  var price = document.querySelector("#GiaSP").value;
  var screen = document.querySelector("#ManHinhSP").value;
  var backCamera = document.querySelector("#CameraSauSP").value;
  var frontCamera = document.querySelector("#CameraTruocSP").value;
  var img = document.querySelector("#HinhSP").value;
  var desc = document.querySelector("#MoTa").value;
  var type = document.querySelector("#LoaiDienThoaiSP").value;

  var sp = new SanPham(name,price,screen,backCamera,frontCamera,img,desc,type);

  const promise = spService.addItem(sp);

  promise.then(function(result){
      // console.log(result);
      getProductList();


      //tự động tắt pop-up khi thêm thành công, DOM tới nút X trên pop-up => gọi từ cha tới con ("#myModal .close")
      // .class => là class của nút X
      document.querySelector("#myModal .close").click(); // gọi sự kiện click có sẵn của thẻ để tự động tắt pop-up
      // alert("Thêm thành công!");


  }).catch(function(error){
      console.log(error);
  });

}

function deleteProduct(id)
{
  /**
   * Khi xóa => hiển thị pop-up xác nhận vs user có thực sự xóa hay k?
   * 
   * + button Xóa ở table => gắn hàm gọi modal(pop-up) xác nhận
   * + pop-up hiển thị trc khi gọi API để delete
   * + pop-up chứa 2 button (cancel, confirm)
   * + khi click cancel => chỉ tắt pop-up
   * + khi click confirm => gọi chức năng xóa của BE => gọi deleteProduct
   */


  // console.log(id);
  const promise = spService.deleteItem(id);

  promise.then(function(result){
    // console.log(result);
    getProductList();

  }).catch(function(error){
    console.log(error);
  });
}

function xemChiTiet(id)
{
  // console.log(id);

  const promise = spService.getProductItem(id);

  promise.then(function(result){
    // console.log(result);
    console.log(result.data);

    document.querySelector("#TenSP").value = result.data.name;
    document.querySelector("#GiaSP").value = result.data.price;
    document.querySelector("#ManHinhSP").value = result.data.screen;
    document.querySelector("#CameraSauSP").value = result.data.backCamera;
    document.querySelector("#CameraTruocSP").value = result.data.frontCamera;
    document.querySelector("#HinhSP").value = result.data.img;
    document.querySelector("#MoTa").value = result.data.desc;
    document.querySelector("#LoaiDienThoaiSP").value = result.data.type;

    // DOM tới button "thêm" -> sửa thành "cập nhật"
    document.querySelector("#myModal .modal-footer").innerHTML = `
      <button class="btn btn-success" onclick="capNhat('${result.data.id}')">Cập Nhật</button>
    `
    // ('${result.data.id}') =>> truyền id ngầm bên dưới, khách hàng k thể thấy (qua ReactJS sẽ gặp nhiều)
    // onclick="capNhat('${result.data.id}') =>> cái này là gọi hàm rồi truyền, nhớ: khai báo cũng phải truyền (dòng code 137: thêm id cho hàm capNhat)

    // innerHTML => bản chất là ghi đè nội dung của thẻ

  }).catch(function(error){
    console.log(error);
  });
}


// + Nghiệp vụ từ client (doc, UI)
// + Dữ liệu từ BE 
// => suy luận viết code FE


function capNhat(id)
{
  console.log(id);
  var name = document.querySelector("#TenSP").value;
  var price = document.querySelector("#GiaSP").value;
  var screen = document.querySelector("#ManHinhSP").value;
  var backCamera = document.querySelector("#CameraSauSP").value;
  var frontCamera = document.querySelector("#CameraTruocSP").value;
  var img = document.querySelector("#HinhSP").value;
  var desc = document.querySelector("#MoTa").value;
  var type = document.querySelector("#LoaiDienThoaiSP").value;

  var sp = new SanPham(name,price,screen,backCamera,frontCamera,img,desc,type);
  console.log(sp);

  const promise = spService.updateProduct(id, sp);

  promise.then(function(result){
    // console.log(result);
    getProductList();


    //tự động tắt pop-up khi cập nhật thành công, DOM tới nút X trên pop-up => gọi từ cha tới con ("#myModal .close")
    // .class => là class của nút X
    document.querySelector("#myModal .close").click(); // gọi sự kiện click có sẵn của thẻ để tự động tắt pop-up
    // alert("Cập nhật thành công!");


  }).catch(function(error){
    console.log(error)
  });
}



// Bắt đầu P2 - 0:33:10