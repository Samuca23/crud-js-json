import Element from "./element.js";
import Principal from "./principal.js";

class CrudLocalStorage {

    constructor() {
        this.createLayoutCrud();
    }

    aDataCrud = () => {
        let aDados = {
            "sCountry": [{
                    "sCountryName": 'Brasil',
                    "value": 1,
                    "sState": [{
                            "sStateName": 'Santa Catarina',
                            "value": 1,
                            "sCity": [{
                                    "sCityName": 'Rio do Sul',
                                    "value": 1
                                },
                                {
                                    "sCityName": 'Witmarsum',
                                    "value": 2
                                },
                                {
                                    "sCityName": 'Lontras',
                                    "value": 3
                                }
                            ],
                        },
                        {
                            "sStateName": 'Rio Grande do Sul',
                            "value": 2,
                            "sCity": [{
                                    "sCityName": 'Caxia do Sul',
                                    "value": 1
                                },
                                {
                                    "sCityName": 'Porto Alegre',
                                    "value": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "sCountryName": 'Estados Unidos',
                    "value": 2,
                    "sState": [{
                            "sStateName": 'Texas',
                            "value": 1,
                            "sCity": [{
                                    "sCityName": 'Dallas',
                                    "value": 1
                                },
                                {
                                    "sCityName": 'Austin',
                                    "value": 2
                                }
                            ]
                        },
                        {
                            "sStateName": 'Nevada',
                            "value": 2,
                            "sCity": [{
                                    "sCityName": 'Las Vegas',
                                    "value": 1
                                },
                                {
                                    "sCityName": 'Reno',
                                    "value": 2
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        return aDados;
    }

    createSelectOption = (sClass, aOption) => {
        var newSelect = document.createElement('select');

        var aNewOption = [];
        sClass != false ? newSelect.setAttribute('class', sClass) : null;

        for(var i = 0; i < aOption.sCountry.length; i ++) {

            var newOption = document.createElement('option');
            var currentOption = aOption.sCountry[i];
            newOption.setAttribute('value', currentOption.value);
            newOption.innerText = currentOption.sCountryName;
            
            aNewOption.push(newOption);
        }
        
        aNewOption.forEach(function (oNewOption) {
            newSelect.appendChild(oNewOption);
        });
           

        return newSelect;
    }

    createLayoutCrud = () => {
        var oDivContainer = this.getDivContainer();
        var oDivForm = new Element('div', 'class-fomr', 'id-form', false, false);

        var oInputName = new Element('input', 'input-group-text class-name', 'id-name', 'text', 'Nome: ');
        var oInputDateBirth = new Element('input', 'input-group-text class-dateBirth', 'id-dateBirth', 'date', 'Nascimento: ');
        var oInputStreet = new Element('input', 'input-group-text class-street', 'id-street', 'text', 'Rua: ');
        var oInputNumber = new Element('input', 'input-group-text class-number', 'id-number', 'number', 'Número: ');

        var oSelectCountry = this.createSelectOption('select-country', this.aDataCrud());
        var oSelectState = this.createSelectOption('select-state', this.aDataCrud());
        var oSelectCity = this.createSelectOption('select-city', this.aDataCrud());

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

    getDivContainer = () => {
        return document.getElementById('container');
    }

    setStyleDivForm = (oDivForm) => {
        oDivForm.style.display = 'flex';
        oDivForm.style.flexDirection = 'column';
    }
}

let crud = new CrudLocalStorage();