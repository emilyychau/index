// updating year copyright

class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-fullyear", YearElement);

// custom footer content

class CopyrightElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "designed with ♡ on treaty 4 & treaty 14 land";
    }
}

customElements.define("x-footer", CopyrightElement);

// custom land acknowledgement message

class AcknowledgementElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "I want to acknowledge the privilege I have to live and study on the territories traditionally occupied and cared for by Indigenous Peoples across Turtle Island. Laurier's campuses are located on the traditional territories of the Anishinabeg, Haudenosaunee and Attawandaron peoples. I am deeply grateful for the opportunity that I have to learn and grow on this land, which continues to be cared for by the First Peoples of Canada.";
    }
}

customElements.define("x-landback", AcknowledgementElement);

// custom line footer formatting

class LineElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="color: #333; font-size: 0.8em; text-align: center;">${this.innerHTML}</div>`
      
    }
}

customElement.define("x-formatline", LineElement);

// custom paragraph footer formatting

class ParagraphElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="color: #333; font-size: 0.8em; text-align: left;">${this.innerHTML}</div>`
      
    }
}

customElement.define("x-formatpara", FormatElement);

