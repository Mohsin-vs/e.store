import axios from "axios";

export const filterData = (id, setData) => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        setData(res.data);
    })
}

export const getAllCategories = (setCategory) => {
    axios.get(`https://fakestoreapi.com/products/categories`).then((navCategory) => {
        setCategory(navCategory);
    })
}


export const passingFuntionToChild = (x, setData) => {
    axios.get(`https://fakestoreapi.com/products/category/${x}`).then((res) => {
        setData(res)
    }).catch((err) => {
        console.log(err);
    });
}

export const getData = (setData) => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
        setData(res)

    }).catch((err) => {
        console.log(err);
    });
}