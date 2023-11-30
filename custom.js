// updating year copyright

class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-fullyear", YearElement);

// custom footer content

class FooterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        `<div style="color:DarkRed; text-align:center; font-family: Roboto, sans-serif;">${this.innerHTML}</div>`;
    }
}

customElements.define("x-footer", FooterElement);
