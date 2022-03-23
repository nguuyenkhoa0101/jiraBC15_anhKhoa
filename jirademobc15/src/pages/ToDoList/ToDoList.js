import React, { Component } from 'react'
//cấu hình axios
/**
 * import Axios from 'axios
 */
 import Axios from 'axios'
export default class ToDoList extends Component {
    state = {
        taskList:[]
    }
    getTaskList =()=>{
        let promise = Axios({
            url:'abc',
            method:'GET'
        });
        promise.then();
        promise.catch();
    }
  render() {
    return (
      <div>ToDoList</div>
    )
  }
}
