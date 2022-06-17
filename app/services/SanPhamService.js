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

    this.deleteItem = function(id) {
        return axios({
            method: "delete",
            url: `https://62a2fbb921232ff9b214f77e.mockapi.io/Capstone2/${id}`
        });
    }
    
    this.getProductItem = function(id) {
        return axios({
            method: "get",
            url: `https://62a2fbb921232ff9b214f77e.mockapi.io/Capstone2/${id}`
        });
    }

    this.updateProduct = function(id, sp) {
        return axios({
            method: "put",
            url: `https://62a2fbb921232ff9b214f77e.mockapi.io/Capstone2/${id}`,
            data: sp
        });
    }





}


// Hướng dẫn làm bài Capstone. P2 - 2:30:00

// Qua tới ES6: P2 - 2:38:20