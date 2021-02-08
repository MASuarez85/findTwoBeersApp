export interface Error {
    status: number;
    message: string;
    request?: Request;
}

interface Request {
    headers: object;
    params: object;
    query: object;
    body: object;
}