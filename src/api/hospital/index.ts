// 引入二次封装axious
import request from "@/utils/request";
import type {HosPitalDetail} from './type'
// 枚举请求地址
enum API{
     HOSPITALDETAIL_URL='/hosp/hospital/'
}
// 获取医院详情的接口
export const reqHospitalDetail=(hoscode:string)=>request.get<any,HosPitalDetail>(API.HOSPITALDETAIL_URL+hoscode);
