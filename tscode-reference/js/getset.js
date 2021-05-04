class Speaker {
    constructor(name) {
        this.name = name;
    }
    get Message() {
        if (!this.message.includes(this.name)) {
            throw Error('Speaker is missing');
        }
        return this.message;
    }
    set Message(val) {
        let tempMsg = val;
        if (!val.includes(this.name)) {
            tempMsg = `${this.name} ${val}`;
        }
        this.message = tempMsg;
    }
}
const speaker = new Speaker('Saranga');
speaker.Message = "Hello everybody";
console.log(speaker.Message);
