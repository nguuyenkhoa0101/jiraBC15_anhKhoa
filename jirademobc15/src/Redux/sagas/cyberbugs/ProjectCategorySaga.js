import {call, put, takeLatest} from"redux-saga/effects"
import {STATUS_CODE} from "../../../utils/constants"
import { GET_ALL_PROJECT_CATEGORY, GET_ALL_PROJECT_CATEGORY_SAGA } from "../../constants/Cyberbugs/Cyberbugs";
function * getAllProjectCategorySaga (action){  
    console.log('actionSaga',action);
    try{

    // gọi api lấy dữ liệu về
    console.log('actionsaga', action);
    const {data, status} = yield call(()=> cyberbugsService.getAllProjectCategory()) ;
    console.log(data);

    // Gọi api thành công thì dispatch lên reducer thông qua put
    if(status === STATUS_CODE.SUCCESS){
    yield put({
    type:GET_ALL_PROJECT_CATEGORY, 
    data:data.content
    })}
    console.log( 'data', data);
    }catch(err){
        console.log(err.response.data);
    }
}
export function* theoDoigetAllProjectCategory() {
    yield takeLatest(GET_ALL_PROJECT_CATEGORY_SAGA, getAllProjectCategorySaga);
}
