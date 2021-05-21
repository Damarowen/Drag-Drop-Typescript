class ProjectInput {
  //*properties
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      'project-input'
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    //* create clone
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;

    //* give element an id
    this.element.id = 'user-input';

    //* input selector
    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

    this.configure();
    this.attach();
  }

  //* method

  private userInput(): [string, string, number] | void {

    const title = this.titleInputElement.value;
    const description = this.descriptionInputElement.value;
    const people = this.peopleInputElement.value;

    if (title.trim().length === 0 || description.trim().length === 0 || people.trim().length === 0) {
      alert('error')
      return
    } else {
      
      console.log(title,description,people)
      return [title, description, +people]
    }

  }


  private clearInput(){
    this.element.reset();
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    this.userInput();
    this.clearInput();
  }

  private configure() {
    //* use bind to connect to this configure
    this.element.addEventListener('submit', this.submitHandler.bind(this));
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();
