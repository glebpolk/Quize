class Controller{
    constructor(reader){
        
    }

    async run() {
        const themes = await this.reader.readThemes();
        
    }
}