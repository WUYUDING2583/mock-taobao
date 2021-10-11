import request from "@/utils/request";

export async function queryCart(): Promise<any> {
    return request("/api/getCart");
}