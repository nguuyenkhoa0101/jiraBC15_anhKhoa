import { all } from 'redux-saga/effects'

import * as ProjectCategorySaga from './cyberbugs/ProjectCategorySaga'
import * as ProjectSaga from './cyberbugs/ProjectSaga'

export function* rootSaga() {
  yield all([
    // nghiệp vụ theo dõi các action saga to do list

    // nghiệp vụ cyberbugs.....
    ProjectCategorySaga.theoDoigetAllProjectCategory(),
    ProjectSaga.theoDoicreateProjectSaga(),
    ProjectSaga.theoDoiGetListProjectSaga()
  ])
}
