
class Animator {
    constructor(imgs){
        this.images = imgs;
        this.count = 0
        this.currentImage = imgs[0];
        this.on = false;
    }
    animate = () => {
        this.toggle();
        while (this.on === true){
            setInterval(this.setImage, 2000);
        }
    } 

    setImage = () => {
        let length = this.images.length;
        if (this.count < length){
            this.count++;
           
        } else {
            this.count = 0;
        }
        this.currentImage = this.images[count];
    }

    toggle = () => {
        let st = this.on;
        this.on = !st;
    }
}