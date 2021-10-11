import request from "@/utils/request";

export async function queryOrderList(): Promise<any> {
    return request("/api/getOList");
}