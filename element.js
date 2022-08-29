import Principal from "./principal.js";

class Element extends Principal {

    constructor(sElementType, sClass = false, sId = false, sType = false, sLabel = false, aParam = false) {
        super();
        switch (sElementType) {
            case 'input':
                return {
                    htmlElement: this.createInput(sLabel, sClass, sId, sType),
                        objectElement: this
                };
            case 'div':
                return {
                    htmlElement: this.createDiv(sClass, sId),
                        objectElement: this
                };
            case 'select':
                return {
                    htmlElement: this.createSelectOption(sClass, sId, sLabel, aParam),
                        objectElement: this
                }
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

    createDiv = (sClass = false, sId = false) => {
        var newDiv = document.createElement('div');
        sClass != false ? newDiv.setAttribute('class', sClass) : null;
        sId != false ? newDiv.setAttribute('id', sId) : null;

        return newDiv;
    }

    setSelectPadrao = (oSelect) => {
        var newOptionPadrao = document.createElement('option');
        newOptionPadrao.setAttribute('value', 0);
        newOptionPadrao.innerText = 'Selecione...';
    
        oSelect.appendChild(newOptionPadrao);
    }

    setDisabled = (bDisabled = false, sId) => {
        var oElement = document.getElementById(sId);

        oElement.disabled = bDisabled;
    }

}
export default Element;