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

        var oInputName = new Element('input', 'class-name', 'id-name', 'text', 'Nome: ');
        var oInputDateBirth = new Element('input', 'class-dateBirth', 'id-dateBirth', 'date', 'Nascimento: ');
        var oInputStreet = new Element('input', 'class-street', 'id-street', 'text', 'Rua: ');
        var oInputNumber = new Element('input', 'class-number', 'id-number', 'number', 'Número: ');

        /* Montagem do Layout */
        oDivContainer.appendChild(oDivForm);
        oInputName.objectElement.addElement(oDivForm, oInputName.htmlElement);
        oInputDateBirth.objectElement.addElement(oDivForm, oInputDateBirth.htmlElement);
        oInputStreet.objectElement.addElement(oDivForm, oInputStreet.htmlElement);
        oInputNumber.objectElement.addElement(oDivForm, oInputNumber.htmlElement);

        /* Estilo do Layout */
        this.setStyleDivForm(oDivForm);
    }

    createDiv = (sClass = false, sId = false) => {
        var newDiv = document.createElement('div');
        sClass != false ? newDiv.setAttribute('class', sClass) : null;
        sId != false ? newDiv.setAttribute('id', sId) : null;

        return newDiv;
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