class Render{
    constructor(parent){
        this.form = false;
        this.image = true;
        this.images = [];
        this.parent = parent;
    }

    render = () =>{
        debugger
        if (this.form === true){
           this.renderForm();
        } else {
            this.images = fwimages
            this.renderImages();
        }
    }

    renderImages(){
        let animator = new Animator(this.images)
        animator.animate()
    }

    renderForm(){
        let formContainer = document.createElement('div');
        formContainer.name='form-container';
        this.parent.appendChild(formContainer);
        let fm = new Form(formContainer, this.setImage);
        fm.renderForm();
    }

    setImage = (images) =>{
        
        this.form = false
        this.image = true
         
        this.images = images
        this.render()
        debugger

    }
}

document.addEventListener('DOMContentLoaded', (e) => { 
    let mainC = document.getElementById('content_location');
    console.log(mainC);
    let mR = new Render(mainC);
    mR.render();
});