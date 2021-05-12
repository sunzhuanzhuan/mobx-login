import { observable,makeObservable } from "mobx";

class Todo {
  constructor({ id, title }) {
    makeObservable(this);
  
    this.title = title
  }
    id = Math.random();
    @observable title = "";
    @observable finished = false;
}
export default Todo