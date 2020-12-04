import http from '../../http/http'
import CONSTS from '../../consytants/constants'
export const getAllPost=(count=10,page:number)=>{
    //`?page=${page}&results=${count}
    return async (dispatch:any)=>{
        const result=await http.get(`?page=${page}&results=${count}`)
        if(result){
            //console.log(result.data)
            const finalData=result.data;
            const resultData=finalData.results.map((re:any)=>
            {
                re.key=(Math.random()*finalData.results.length).toString();
                return re;
            })
           //console.log(resultData)
            dispatch({type:CONSTS.GET_USERS,payload:resultData})

        }
    }
}