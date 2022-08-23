import Element from "./element.js";
import Principal from "./principal.js";

class CrudLocalStorage {

    constructor() {
        this.createLayoutCrud();
    }

    localStorageCountry = () => {
        var aCountry = []
    }

    localStorageState = () => {

    }

    localStorageCity = () => {

    }

    createLayoutCrud = () => {
        var oDivContainer = this.getDivContainer();
        var oDivForm = this.createDiv('form');
        var oInputName = this.createInput('Nome: ', 'name', 'name', 'text');
        // var oInputName = new Element('input', 'class-name', 'id-name', 'text', 'Nome: ');

        var oInputDateBirth = this.createInput('Data de Nascimento: ', 'dateBirth', 'dateBirth', 'date');
        var oInputStreet = this.createInput('Rua: ', 'street', 'street', 'text');
        var oInputNumber = this.createInput('Número: ', 'number', 'number', 'number');

        var sTeste = new Element('input', 'teste', 'teste', 'text', 'Teste: ');

        
        /* Montagem do Layout */
        oDivContainer.appendChild(oDivForm);
        oDivForm.appendChild(oInputName);
        oDivForm.appendChild(oInputDateBirth);
        oDivForm.appendChild(oInputStreet);
        oDivForm.appendChild(oInputNumber);
        sTeste.objectElement.addElement(oDivForm, sTeste.htmlElement);

        /* Estilo do Layout */
        this.setStyleDivForm(oDivForm);
    }

    createDiv = (sClass = false, sId = false) => {
        var newDiv = document.createElement('div');
        sClass != false ? newDiv.setAttribute('class', sClass) : null;
        sId != false ? newDiv.setAttribute('id', sId) : null;

        return newDiv;
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

    createSelect = () => {
        
    }

    getDivContainer = () => {
        return document.getElementById('container');
    }

    setStyleDivForm = (oDivForm) => {
        oDivForm.style.display = 'flex';
        oDivForm.style.flexDirection = 'column';
    }
}

let crud = new CrudLocalStorage();