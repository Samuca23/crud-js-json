class Principal {

    constructor() {
    }

    getTela = () => {
        return document;
    }

    addElement = (sFatherElement = false, sChildElement) => {
        if (sFatherElement) {
            sFatherElement.appendChild(sChildElement);
        } else {
            this.getTela().appendChild(sFatherElement);
        }
    }
}
export default Principal;