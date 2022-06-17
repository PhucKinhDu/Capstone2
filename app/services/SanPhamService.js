// Các phương thức
function SanPhamService() {
    this.getList = function() {
        return axios({
            method: "get",
            url: "https://62a2fbb921232ff9b214f77e.mockapi.io/Capstone2",
        });
    };

    this.addItem = function(sp) {
        return axios({
            method: "post",
            url: "https://62a2fbb921232ff9b214f77e.mockapi.io/Capstone2",
            data: sp
        });
    }


    // Axios P1 - 1:51:10



}
