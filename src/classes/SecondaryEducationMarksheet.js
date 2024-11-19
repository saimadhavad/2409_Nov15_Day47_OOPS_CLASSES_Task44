class SecondaryEducationMarksheet{


    constructor(name,teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks) {

        console.log("Inside the SecondaryEducationMarksheet construtor");
        console.log(name,teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks);
        this.name = name;
        this.teluguMarks = teluguMarks;
        this.hindiMarks = hindiMarks;
        this.englishMarks = englishMarks;
        this.mathsMarks = mathsMarks;
        this.scienceMarks = scienceMarks;
        this.socialMarks = socialMarks;

    }

    classSEMSCalculateResult = () =>{
        let passMarks = 35;
        if (this.teluguMarks >= passMarks &&
            this.hindiMarks >= passMarks &&
            this.englishMarks >= passMarks &&
            this.mathsMarks >= passMarks &&
            this.teluguMarks >= passMarks &&
            this.scienceMarks >= passMarks){
                console.log(`${this.name} passed in Secondary Education`);
                
            }else {
                console.log(`${this.name} failed in Secondary Education`);
                
            }
    }

}

export default SecondaryEducationMarksheet