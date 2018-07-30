
import config from "../../config";

export const GetCustomers = async (q) => {
    return await fetch(`${config._domain}customers${q ? `?name__regex=/${q}/i` : null}`);
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

