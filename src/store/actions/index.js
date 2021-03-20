import axios from 'axios';
export const PEOPLE_DATA ="PEOPLE_DATA";
const baseUrl = "https://randomuser.me/api/?";

export const peopleList = (page)=>{
    return async(dispatch)=>{
        try {
            const response = axios.get(baseUrl+`page=${page}&results=10&seed=abc`);
            const data = (await response).data
            dispatch({
                type:PEOPLE_DATA,
                payload:data
            })
        } catch (error) {
            console.log(error)
        }
    }
}