import Element from "./element.js";

class CrudLocalStorage {

    constructor() {
        this.createLayoutCrud();
    }

    aDataCrudCountry = () => {
        let aDado = {
            "sData": [{
                    "sName": 'Brasil',
                    "value": 1,
                    "sSigla": 'BR'
                },
                {
                    "sName": 'Estados Unidos',
                    "value": 2,
                    "sSigla": 'USA'
                }
            ]
        };

        return aDado;
    }

    aDataCrudState = () => {
        let aDado = {
            "sData": [{
                    "sName": 'Santa Catarina',
                    "value": 1,
                    "sSigla": 'BR'
                },
                {
                    "sName": 'Rio Grande do Sul',
                    "value": 2,
                    "sSigla": 'BR'
                },
                {
                    "sName": 'Texas',
                    "value": 3,
                    "sSigla": 'USA'
                },
                {
                    "sName": 'Nevada',
                    "value": 4,
                    "sSigla": 'USA'
                }
            ]
        }

        return aDado;
    }

    aDataCrudCity = () => {
        let aDado = {
            "sData": [{
                "sName": 'Witmarsum',
                "value": 1,
                "sSigla": 'SC'
            },
            {
                "sName": 'Rio do Sul',
                "value": 2,
                "sSigla": 'SC'
            },
            {
                "sName": 'Caxias do Sul',
                "value": 3,
                "sSigla": 'RS'
            },
            {
                "sName": 'Rio Grande do Sul',
                "value": 4,
                "sSigla": 'RS'
            },
            {
                "sName": 'Las Vegas',
                "value": 5,
                "sSigla": 'NV'
            },
            {
                "sName": 'Reno',
                "value": 6,
                "sSigla": 'NV'
            },
            {
                "sName": 'Dallas',
                "value": 7,
                "sSigla": 'TX'
            },
            {
                "sName": 'Austin',
                "value": 8,
                "sSigla": 'TX'
            }]
        }

        return aDado;
    }

    createSelectOption = (sClass, aOption) => {
        var newSelect = document.createElement('select');

        var aNewOption = [];
        sClass != false ? newSelect.setAttribute('class', sClass) : null;

        this.setSelectPadrao(newSelect);
        
        for (var i = 0; i < aOption.sData.length; i++) {

            var newOption = document.createElement('option');
            var currentOption = aOption.sData[i];
            newOption.setAttribute('value', currentOption.value);
            newOption.innerText = currentOption.sName;
            
            aNewOption.push(newOption);
        }
        
        aNewOption.forEach(function (oNewOption) {
            newSelect.appendChild(oNewOption);
        });
        
        
        return newSelect;
    }

    setSelectPadrao = (oSelect) => {
        var newOptionPadrao = document.createElement('option');
        newOptionPadrao.setAttribute('value', 0);
        newOptionPadrao.innerText = 'Selecione...';
    
        oSelect.appendChild(newOptionPadrao);
    }

    createLayoutCrud = () => {
        var oDivContainer = this.getDivContainer();
        var oDivForm = new Element('div', 'class-fomr', 'id-form', false, false);

        var oInputName = new Element('input', 'input-group-text class-name', 'id-name', 'text', 'Nome: ');
        var oInputDateBirth = new Element('input', 'input-group-text class-dateBirth', 'id-dateBirth', 'date', 'Nascimento: ');
        var oInputStreet = new Element('input', 'input-group-text class-street', 'id-street', 'text', 'Rua: ');
        var oInputNumber = new Element('input', 'input-group-text class-number', 'id-number', 'number', 'Número: ');

        var oSelectCountry = new Element('select', 'input-group-text class-select-country', 'id-select-country', false, 'País: ', this.aDataCrudCountry());
        var oSelectState = new Element('select', 'input-group-text class-select-state', 'id-select-state', false, 'Estado: ', this.aDataCrudState());
        var oSelectCity = new Element('select', 'input-group-text class-select-city', 'id-select-city', false, 'Cidade: ', this.aDataCrudCity());

        
        /* Montagem do Layout */
        oDivForm.objectElement.addElement(oDivContainer, oDivForm.htmlElement);
        oInputName.objectElement.addElement(oDivForm.htmlElement, oInputName.htmlElement);
        oInputDateBirth.objectElement.addElement(oDivForm.htmlElement, oInputDateBirth.htmlElement);
        oInputStreet.objectElement.addElement(oDivForm.htmlElement, oInputStreet.htmlElement);
        oInputNumber.objectElement.addElement(oDivForm.htmlElement, oInputNumber.htmlElement);
        oSelectCountry.objectElement.addElement(oDivForm.htmlElement, oSelectCountry.htmlElement);
        oSelectState.objectElement.addElement(oDivForm.htmlElement, oSelectState.htmlElement);
        oSelectCity.objectElement.addElement(oDivForm.htmlElement, oSelectCity.htmlElement);
        
        oSelectState.objectElement.setDisabled(true, oSelectState.htmlElement.id);
        oSelectCity.objectElement.setDisabled(true, oSelectCity.htmlElement.id);

        /* Estilo do Layout */
        this.setStyleDivForm(oDivForm.htmlElement);
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