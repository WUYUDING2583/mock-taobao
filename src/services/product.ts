import request from "@/utils/request";

export interface QueryProductItem {
    id: string;
}

export async function queryProductById(params: QueryProductItem): Promise<any> {
    return request("/api/product", {
        method: "POST",
        data: params,
    });
}