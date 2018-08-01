
import config from "../../config";

export const GetCustomers = async (customerId,q) => {
    const url = `${config._domain}customers${q ? `?name__regex=/${q}/i` : ""}`
    return await fetch(url);
}

export const PutCustomers = async (customer) => {

    return await fetch(`${config._domain}customers`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: customer
    });
}


export const GetCategories = async (q) => {

    const url = `${config._domain}categories${q ? `?description__regex=/${q}/i` : ""}`
    return await fetch(url);
}


export const PutItem = async (item) => {

    return await fetch(`${config._domain}itens`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: item
    });
}


export const GetItens = async (p) => {

    const {query,customerId,categoryId} = p
    
    const url = `${config._domain}itens${customerId ? `?customerId=${customerId}` : ""}${categoryId ? `&categoryId=${categoryId}` : ""}${query ? `&title__regex=/${query}/i` : ""}`
    return await fetch(url);
}

