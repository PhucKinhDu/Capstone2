
const prlist = new ProductList();

function getProductList(){
    const promise = prlist.getList();
    promise.then(function(result){
        //xử lý thành công
        // console.log(result);
        console.log(result.data);
        hienThiTable(result.data);
    });
    promise.catch(function(error){
        //Thất bại
        console.log(error);
    })
}
getProductList();