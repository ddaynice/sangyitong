// 定义详情模块数据类型
export interface ResponseData{
    code:number,
    message:string,
    ok:boolean
}
// 代表医院详情的数据
export interface HosPitalDetail{
    
        "bookingRule": {
          "cycle": number,
          "releaseTime": string,
          "stopTime": string,
          "quitDay": number,
          "quitTime": string,
          "rule": string[]
        },
        "hospital": {
          "id": string,
          "createTime": string,
          "updateTime": string,
          "isDeleted": number,
          "param": {
            "hostypeString": string,
            "fullAddress": string
          },
          "hoscode": string,
          "hosname": string,
          "hostype": string,
          "provinceCode": string,
          "cityCode": string,
          "districtCode": string,
          "address": string,
          "logoData": string,
          "intro": string,
          "route": string,
          "status": number,
          "bookingRule": null
        }
      }

// 医院详情接口返回、
export interface HosPitalDetail extends ResponseData{
    data:HosPitalDetail
}
