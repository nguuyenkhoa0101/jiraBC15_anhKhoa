import {combineReducers, createStore} from 'redux';
import { ProjectCategoryReducer } from '../reducers/ProjectCategoryReducer';
import { LoadingReducer } from '../reducers/LoadingReducer';
import { ProjectCyberBugsReducer } from '../reducers/ProjectCyberBugsReducer';

const rootReducer = combineReducers({
    // reducer khai báo tại đây
    ProjectCategoryReducer,
    LoadingReducer,
    ProjectCyberBugsReducer
})

const store = createStore(rootReducer);
 

export default store