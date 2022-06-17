const prlist = new ProductList();


function getELE(id){
    return document.getElementById(id);
}

function themProducts(){
    //lay thong tin
    var name = getELE("txt").value;
    var price = getELE("txt").value;
    var screen = getELE("txt").value;
    var backCam = getELE("txt").value;
    var frontCam = getELE("txt").value;
    var img = getELE("txt").value;
    var desc = getELE("txt").value;
    var type = getELE("txt").value;
    console.log(name,price,screen,backCam,frontCam,img,desc,type);

    //Tạo thể hiện lớp Products
    var pr = new Products(name,price,screen,backCam,frontCam,img,desc,type);
    console.log(pr);

    //thêm products vào mảng
    prlist.themPr(pr);

    hienThiTable();

}

function hienThiTable(){
    var content = "";

    prlist.mangPr(function(pr){
        var trELE = `<tr>
            
        </tr>`
    })
}