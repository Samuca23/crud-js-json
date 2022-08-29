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
                    "sSigla": 'BR'
                },
                {
                    "sName": 'Rio Grande do Sul',
                    "sSigla": 'BR'
                },
                {
                    "sName": 'Texas',
                    "sSigla": 'USA'
                },
                {
                    "sName": 'Nevada',
                    "sSigla": 'USA'
                }
            ]
        }

        localStorage.setItem('aState', JSON.stringify(aDado));

        return localStorage.getItem('aCity');
    }

    aDataCrudCity = () => {
        let aDado = {
            "sData": [{
                    "sName": 'Witmarsum',
                    "sSigla": 'SC'
                },
                {
                    "sName": 'Rio do Sul',
                    "sSigla": 'SC'
                },
                {
                    "sName": 'Caxias do Sul',
                    "sSigla": 'RS'
                },
                {
                    "sName": 'Rio Grande do Sul',
                    "sSigla": 'RS'
                },
                {
                    "sName": 'Las Vegas',
                    "sSigla": 'NV'
                },
                {
                    "sName": 'Reno',
                    "sSigla": 'NV'
                },
                {
                    "sName": 'Dallas',
                    "sSigla": 'TX'
                },
                {
                    "sName": 'Austin',
                    "sSigla": 'TX'
                }
            ]
        }

        // this.localStorage.setItem('');
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

        /*  Aqui tentei criar elementos de uima forma diferente, porém vai precisar de mais tempo para 
        aprimorar isso*/
        var oInputName = new Element('input', 'input-group-text class-name', 'id-name', 'text', 'Nome: ');
        var oInputDateBirth = new Element('input', 'input-group-text class-dateBirth', 'id-dateBirth', 'date', 'Nascimento: ');
        var oInputStreet = new Element('input', 'input-group-text class-street', 'id-street', 'text', 'Rua: ');
        var oInputNumber = new Element('input', 'input-group-text class-number', 'id-number', 'number', 'Número: ');

        /* Criando elementos de Select com a função dinâmica */
        var oSelectCountry = this.createSelect('pais', this.aDataCrudCountry(), 'pais');
        var oSelectState = this.createSelect('estado', false, 'estado');
        var oSelectCity = this.createSelect('cidade', false, 'cidade');

        /* Montagem do Layout */
        oDivForm.objectElement.addElement(oDivContainer, oDivForm.htmlElement);
        oInputName.objectElement.addElement(oDivForm.htmlElement, oInputName.htmlElement);
        oInputDateBirth.objectElement.addElement(oDivForm.htmlElement, oInputDateBirth.htmlElement);
        oInputStreet.objectElement.addElement(oDivForm.htmlElement, oInputStreet.htmlElement);
        oInputNumber.objectElement.addElement(oDivForm.htmlElement, oInputNumber.htmlElement);
        oDivForm.htmlElement.appendChild(oSelectCountry);
        oDivForm.htmlElement.appendChild(oSelectState);
        oDivForm.htmlElement.appendChild(oSelectCity);

        /* Estilo do Layout */
        this.setStyleDivForm(oDivForm.htmlElement);
    }

    createSelect = (sName, xValueOption = false, sId) => {
        var newSelect = document.createElement('select');
        newSelect.setAttribute('name', sName);
        newSelect.setAttribute('id', sId);

        this.setSelectPadrao(newSelect);

        if (xValueOption) {

            var aOption = this.createOptionSelect(xValueOption);
            aOption.forEach(function (oOption) {
                newSelect.appendChild(oOption);
            })
        }

        return newSelect;
    }

    createOptionSelect = (xValue) => {
        let aOption = [];
        for (var i = 0; i < xValue.sData.length; i++) {
            var newOption = document.createElement('option');
            newOption.setAttribute('value', xValue.sData[i].sSigla);
            newOption.innerText = xValue.sData[i].sName;
            
            newOption.addEventListener('click', function () {
                let aDadoState = JSON.parse(localStorage.getItem('aCity'));
                let oSelectState = document.getElementById('estado');

                for (var iOption = 0; iOption <= oSelectState.options.length; iOption++) {
                    oSelectState.options[iOption] = null;
                }

                if (oSelectState.options.length == 0) {

                    for (let j = 0; j < aDadoState.sData.length; j++) {
                        if (aDadoState.sData[j].sSigla == this.value) {
                            var newOption = document.createElement('option');
                            newOption.setAttribute('value', aDadoState.sData[j].sSigla);
                            newOption.innerText = aDadoState.sData[j].sName;
                            oSelectState.appendChild(newOption);
                        }
                    }
                }
            });

            aOption.push(newOption);
        }

        return aOption;
    }

    functionClickOption = (oOption, oSelect) => {
        let valueOption = oOption.value;

        let aDadoState = this.aDataCrudState();

        for (let i = 0; i < aDadoState.sData.length; i++) {
            if (aDadoState.sData[i].sSigla == valueOption) {
                var newOption = document.createElement('option');
                newOption.setAttribute('value', aDadoState.sData[i].sSigla);
                newOption.innerText = aDadoState.sData[i].sName;
                oSelect.appendChild(newOption);
            }
        }
        return;
    }

    setSelectPadrao = (oSelect) => {
        var newOptionPadrao = document.createElement('option');
        newOptionPadrao.setAttribute('value', 0);
        newOptionPadrao.innerText = 'Selecione...';

        oSelect.appendChild(newOptionPadrao);
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