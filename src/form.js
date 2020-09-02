class Form {
    constructor(parent, callb){
        this.images = {}
        this.parent = parent;
        this.callb = callb;
        this.form = document.createElement('form');
    }

    renderForm = () => {
        let inps = this.createInputs(3);
        this.appendToForm(inps);
        this.parent.appendChild(this.form);
    }

    appendToForm = (children) => {
        let fm = this.form;
        children.map(c => fm.appendChild(c));
    }

    saveData = (e) => {
        this.images[`${e.target.name}`] =`${e.target.value}` 
    }

    createInputs(num){
        let inputs = [];
        for (let n = 0; n < num; n++){
            let input = document.createElement('input');
            input.name = `img${n}`;
            input.type = 'text';
            input.addEventListener('change', (event) => this.saveData(event))
            inputs.push(input)
        }
        let submit = document.createElement('button');
        submit.innerText = "Submit";
        submit.style.background = 'green';
        submit.addEventListener('click', () => this.callb(this.images));
        inputs.push(submit);
        return inputs;
        }
}