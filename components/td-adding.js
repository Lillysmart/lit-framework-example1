//@ts-check
import { LitElement, html } from "../libs/lit-html.js";

console.log(LitElement);
class Adding extends LitElement {
  static properties = {
   open: {type:"boolean",
    state: true,}
  };

  constructor(){
    super()
    this.open=false
  }
  toogleOpen (){
    this.open =!this.open
  }

  /**
   *
   * @returns {any}
   */
  render() {
    console.log(this.open)
    return html`<div>
      <sl-button @click=${this.toogleOpen}>Add Task</sl-button>
      <sl-dialog label="New Task" class="dialog-overview" .open=${this.open}>
        <form >
          <td-spacing bottom="XL">
            <sl-input filled name="title" label="Title" required></sl-input>

            <td-spacing bottom="S">
              <sl-input
                type="Date"
                filled
                name="due"
                label="Due Date"
                required
              ></sl-input>
            </td-spacing>

            <td-spacing bottom="S">
              <sl-select label="urgency" value="Normal" filled>
                <sl-option value="High">High </sl-option>
                <sl-option value="Normal">Normal</sl-option>
                <sl-option value="Low">Low</sl-option>
              </sl-select>
            </td-spacing>
          </td-spacing>

          <div slot="footer">
            <sl-button type="button">Cancel</sl-button>
            <sl-button type="submit" variant="primary">Save</sl-button>
          </div>
        </form>
      </sl-dialog>

      <header>
        <h1>Todo App</h1>
        <sl-button variant="primary">Add Task</sl-button>
      </header>
      <main>
        <ul></ul>
      </main>
      <h2>Task()</h2>
    </div>`;
  }
}

customElements.define("td-adding", Adding);

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
