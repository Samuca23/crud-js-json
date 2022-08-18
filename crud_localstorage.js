class CrudLocalStorage {

    constructor() {
        this.createLayoutCrud();
    }

    createLayoutCrud = () => {
        var oDivContainer = this.getDivContainer();
        var oDivForm = this.createDiv('form');
        var oInputName = this.createInput('Nome: ', 'name', 'name', 'text');
        var oInputDateBirth = this.createInput('Data de Nascimento: ', 'dateBirth', 'dateBirth', 'date');
        var oInputStreet = this.createInput('Rua', '');

        oDivContainer.appendChild(oDivForm);
        oDivForm.appendChild(oInputName);
        oDivForm.appendChild(oInputDateBirth);
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

    setStyleDivContainer = (oDivForm) => {
        oDivForm = this.getDivContainer();
        oDivForm.style.display = 'flex';
    }
}
let teste = new CrudLocalStorage();