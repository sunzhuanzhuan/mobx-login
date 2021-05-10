
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { observable, computed, action } from "mobx"; 
 
//待办事项
class Todo {
  id = Math.random();
  @observable title =  "";
  @observable finished = false ;
  constructor(title){
    this.title = title;
  }
}
 
//所有的待办事项数量
class TodoList{
  @observable todos = [];
  @computed
  get unfinishedTodoCount(){
      return this.todos.filter(todo => !todo.finished).length;
  }
}
 
@observer
class TodoListView extends  Component{
  render(){
    return(
        <div>
            <ul>
                {this.props.todoList.todos.map(todo => (
                    <TodoView todo = {todo} key={todo.id}/>
                ))}
            </ul>
            剩余任务:{this.props.todoList.unfinishedTodoCount}
        </div>
    );
  }
}
 
const TodoView = observer(({todo}) =>{
  const  handleClick = action(() => {
    // console.log(todo)
    todo.finished = !todo.finished
  });
  return(
      <li>
        <input type="checkbox" defaultChecked={todo.finished} onClick={handleClick}/>
          {todo.title}
      </li>
  );
});
 
const  store = new TodoList();
store.todos.push(new Todo("第一个待办事项"));
store.todos.push(new Todo("第二个待变事项"));
 
ReactDOM.render(
  <TodoListView todoList={store}/>,
  document.getElementById("root")
)
