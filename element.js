import Principal from "./principal.js";

class Element extends Principal {

    constructor(sElementType, sClass = false, sId = false, sType = false, sLabel = false) {
        super();
        switch (sElementType) {
            case 'input':
                var oElemento = {
                    htmlElement: this.createInput(sLabel, sClass, sId, sType),
                    objectElement: this
                };
                return oElemento;
            case 'div':

            case 'select':

            case 'option':

            default:
                console.log('Esse elemento não existe. Verifique a documentação.');
        }
    }

    createInput = (sLabel, sClass = false, sId = false, sType = false) => {
        var oLabel = this.createLabel(sLabel, sId);
        var newInput = document.createElement('input');

        sClass != false ? newInput.setAttribute('class', sClass) : null;
        sId != false ? newInput.setAttribute('id', sId) : null;
        sType != false ? newInput.setAttribute('type', sType) : null;

        oLabel.innerText = sLabel;
        oLabel.appendChild(newInput);

        return oLabel;
    }

    createLabel = (sLabel, sFor) => {
        var newLabel = document.createElement('label');
        newLabel.setAttribute('id', sFor);
        newLabel.innerText = sLabel;

        return newLabel;
    }

}
export default Element;