import request from "@/utils/request";

export interface EditCartItem {
    id: string;
    increment?: number;
    count?: number;
}

export async function editCart(params: EditCartItem): Promise<any> {
    return request("/api/cart/edit", {
        method: "POST",
        data: params
    });
}