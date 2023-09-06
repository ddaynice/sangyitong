import {defineStore} from 'pinia'
// pinia写法有两种：组合式API写法，选择API写法
import {reqHospitalDetail} from '@/api/hospital'
// 引入详情数据ts类型
import type {HosPitalDetail} from '@/api/hospital/type'
import type{DetailState} from './interface'

const useDetailStore = defineStore('Detail',{
    state:():DetailState=>{
        return{
            // 医院详情的数组
            hospitalInfo:({} as HosPitalDetail)
        }
    },
    actions:{
        // 获取医院详情的方法
        async getHospital(hoscode:string){
           let res:HosPitalDetail = await reqHospitalDetail(hoscode)
           if(res.code==200){
            this.hospitalInfo=res.data
           }
        }
    },
    getters:{

    }
})

// 获取仓库的方法对外暴露
export default useDetailStore