import { API } from "../config";
import queryString from "query-string";

export const getProducts = sortBy => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=8`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    };
    return fetch(`${API}/products/by/search`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const list = params => {
    const query = queryString.stringify(params);
    console.log("query", query);
    return fetch(`${API}/products/search?${query}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const read = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const read1 = () => {
    return fetch(`${API}/product`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listRelated = productId => {
    return fetch(`${API}/products/related/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getBraintreeClientToken = (userId, token) => {
    return fetch(`${API}/braintree/getToken/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const processPayment = (userId, token, paymentData) => {
    return fetch(`${API}/braintree/payment/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const createOrder = (userId, token, createOrderData) => {
    return fetch(`${API}/order/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ order: createOrderData })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



export const makeComment = (productId,userId, token, review) => {
    return new Promise((resolve, reject) => {
        fetch(`${API}/reviews/${productId}/${userId}`, {
            method: 'POST',
            headers: {
                // content type?
                "Content-Type": "application/json",
                
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(review)
        })
        .then(response => response.json())
        .then(jsonData => resolve(jsonData))
        .catch(err => resolve({error: `something went wrong err : ${err}`}));
    })
    
}
export const addToWishlist = (productId, userId,token) =>{
    return new Promise((resolve, reject) => {
        fetch(`${API}/user/wishlist/${productId}/${userId}`, {
            method: 'POST',
            headers: {
                // content type?
                "Content-Type": "application/json",
                
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ productId })
            
        })
        .then(response => response.json())
        .then(jsonData => resolve(jsonData))
        .catch(err => resolve({error: `something went wrong err : ${err}`}));
    })
}
  

export const getWishlist = (userId,token) =>{
    return new Promise((resolve, reject) => {
        fetch(`${API}/wishlist/${userId}`, {
            method: 'GET',
            headers: {
                // content type?
                "Content-Type": "application/json",
                
                "Authorization": `Bearer ${token}`,
            }
            
        })
        .then(response => response.json())
        .then(jsonData => resolve(jsonData))
        .catch(err => resolve({error: `something went wrong err : ${err}`}));
    })
}
  

export const removeWishlist = (productId,userId, token) =>{
    return new Promise((resolve, reject) => {
        fetch(`${API}/remove/wishlist/${productId}/${userId}`, {
            method: 'PUT',
            headers: {
                // content type?
                "Content-Type": "application/json",
                
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ productId })
            
        })
        .then(response => response.json())
        .then(jsonData => resolve(jsonData))
        .catch(err => resolve({error: `something went wrong err : ${err}`}));
    })
}
  