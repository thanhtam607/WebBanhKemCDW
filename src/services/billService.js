import axios from "../axios";
// gett all cart by id user

const createBill = (data) => {
    return axios.post(`/api/createBill`,data);
};
const getDistricts = (provinceId) => {
    const url = `https://api.mysupership.vn/v1/partner/areas/district?province=${provinceId}`;

    return fetch(url)
        .then(async response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            var data = await response.json()
            // console.log(data)
            return data;
        })

};
const getCommunes = (districtId) => {
    return fetch(`https://api.mysupership.vn/v1/partner/areas/commune?district=${districtId}`)
        .then(async response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            var data = await response.json()
            // console.log(data)
            return data;
        })
};
let getBillByUser=(id_user)=>{
    return axios.get(`/api/getAllBillsByIdUser?id_user=${id_user}`)
}
let updateStatusBill = (id, status)=>{
    return axios.post("/api/updateStatusBill", {id: id, status: status})
}
export {
    createBill, getDistricts, getCommunes, getBillByUser, updateStatusBill
};
