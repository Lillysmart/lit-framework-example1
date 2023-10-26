
import {html,LitElement}from "../libs/lit-html.js"


console.log(LitElement)
 class App extends LitElement {
  
  /**
   * 
   * @returns {any}
   */
    render(){
       return html`<div>
       <header>
         <h1>Todo App</h1>
        <td-adding></td-adding>
       </header>
       <main>
         <ul></ul>
       </main>
       <h2>Task()</h2>
     </div>
     `}

}

customElements.define("td-app" , App)





/*
import { State  } from "../model/store.js";
//import { phase } from "../model/reduces.js";


/**
 * @param {State} state
 * @returns {any}
 */

/*
export const app = (state) => {
  console.log(state);

  
  const { tasks } = State;
  const taskAsArray = Object.values(tasks);

  
  return html
};*/
