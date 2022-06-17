function ProductList(){
    this.getList = function () {
        // const promise = axios
        return axios({
            method: 'https://62a2fc9e21232ff9b2151283.mockapi.io/Products_Capstone'
        })

        // return promise;
    }

    this.deleteItem = function (id) {
        return axios({
            method: 'delete',
            url: `https://62a2fc9e21232ff9b2151283.mockapi.io/Products_Capstone/${id}`
        })
    }

    this.addItem = function (sp) {
        // data: loại dữ liệu đối tượng
        return axios({
            method: 'post',
            url: 'https://62a2fc9e21232ff9b2151283.mockapi.io/Products_Capstone',
            data: sp
        });
    }
    
}