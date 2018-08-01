
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


