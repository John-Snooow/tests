import http from "node:http";

const products = [
    { id: 1, name: "Camiseta 1", price: 100 },
    { id: 2, name: "Jaqueta 2", price: 200 },
    { id: 3, name: "sapato 3", price: 300 },
];

const app = http.createServer((request, response) => {
    if (request.method === "GET" && request.url === "/products") {
        response.end(JSON.stringify(products));
    }
});

export{ app }