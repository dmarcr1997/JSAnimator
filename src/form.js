class Form {
    constructor(parent, callb){
        this.images = [];
        this.parent = parent;
        this.callb = callb;
        this.form = document.createElement('form');
    }

    render = () => {

    }

    renderForm = () => {
        let inps = this.createInputs(3);
        this.appendToForm(inps);
        this.form.addEventListener('submit', (event) => this.callb(event));
        this.parent.appendChild(this.form);
    }

    appendToForm = (children) => {
        let fm = this.form;
        children.map(c => fm.appendChild(c));
    }

    createInputs = (num) => {
        let inputs = [];
        for (let n = 0; n < num; n++){
            let input = document.createElement('input');
            input.name = `img${n}`;
            input.type = 'text';
            inputs.push(input)
        }
        let submit = document.createElement('submit');
        inputs.push(submit);
        return inputs;
    }
}