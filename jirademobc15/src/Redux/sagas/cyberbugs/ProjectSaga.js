import {call, delay, put, takeLatest} from"redux-saga/effects"
import { cyberbugsService } from "../../../services/CyberbugsService";
import {STATUS_CODE} from "../../../utils/constants"
import {DISPLAY_LOADING,HIDE_LOADING} from '../../constants/LoadingConst'
import {history} from '../../../utils/libs/history'

function * createProjectSaga (action){  

    yield put({
        type:DISPLAY_LOADING
    })
    yield delay(500);
    console.log('actionSaga',action);
    try{

    // gọi api lấy dữ liệu về
    console.log('actionsaga', action);
    const {data, status} = yield call(()=> cyberbugsService.createProject(action.newProject)) ;
    console.log(data);

    // Gọi api thành công thì dispatch lên reducer thông qua put
    if(status === STATUS_CODE.SUCCESS){
        console.log(data);
        history.push('/projectmanagement');

   }
   
    }catch(err){
        console.log(err.response.data);
    }
    yield put({
        type:HIDE_LOADING
    })
}
export function* theoDoicreateProjectSaga() {
    yield takeLatest('CREATE_PROJECT_SAGA', createProjectSaga);
}

// Saga dùng để get all projecttừ api
function *getListProjectSaga(action){
    try{
        const {data, status} = yield call( ()=> cyberbugsService.getListProject());
        // sau khi lấy dữ liệu từ api  về thành công

        if(status === STATUS_CODE.SUCCESS){
            yield put({
                type:'GET_LIST_PROJECT',
                projectList:data.content
            })
        }
    } catch(err){
        console.log(err);
    }
}

export function* theoDoiGetListProjectSaga() {
    yield takeLatest('GET_LIST_PROJECT_SAGA', getListProjectSaga);
}
