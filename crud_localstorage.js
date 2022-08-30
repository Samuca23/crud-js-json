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

        var oButtonCadastro = this.createButtonCadastro();
        var oButtonListar = this.createButtonListar();

        /* Montagem do Layout */
        oDivForm.objectElement.addElement(oDivContainer, oDivForm.htmlElement);
        oInputName.objectElement.addElement(oDivForm.htmlElement, oInputName.htmlElement);
        oInputDateBirth.objectElement.addElement(oDivForm.htmlElement, oInputDateBirth.htmlElement);
        oInputStreet.objectElement.addElement(oDivForm.htmlElement, oInputStreet.htmlElement);
        oInputNumber.objectElement.addElement(oDivForm.htmlElement, oInputNumber.htmlElement);
        // oDivForm.htmlElement.appendChild(oSelectCountry);
        // oDivForm.htmlElement.appendChild(oSelectState);
        // oDivForm.htmlElement.appendChild(oSelectCity);
        oDivForm.htmlElement.appendChild(oButtonCadastro);
        oDivForm.htmlElement.appendChild(oButtonListar);
        /* Estilo do Layout */
        this.setStyleDivForm(oDivForm.htmlElement);
    }

    /**
     * Button de cadastrar
     * 
     * @returns 
     */
    createButtonCadastro = () => {
        var newButton = document.createElement('button');
        newButton.innerText = 'Cadastrar';
        newButton.setAttribute('class', 'btn btn-success');

        newButton.addEventListener('click', function () {
            var oNome = document.getElementById('id-name');
            var oDataNascimento = document.getElementById('id-dateBirth');
            var oRua = document.getElementById('id-street');
            var oNumero = document.getElementById('id-number');

            var sNome = oNome.value;
            var sDataNascimento = oDataNascimento.value;
            var sRua = oRua.value;
            var iNumero = oNumero.value;

            /* Verifica se realmente tem valor nos campos */
            if (sNome && sDataNascimento && sRua && iNumero) {
                let aDado = [{
                    "name": sNome,
                    "date": sDataNascimento,
                    "rua": sRua,
                    "numero": iNumero,
                    "pais": null,
                    "estado": null,
                    "cidade": null
                }];


                /* Gera um ID aleatório */
                let iRandom = localStorage.length;

                if (localStorage.getItem(iRandom)) {
                    iRandom = iRandom + 1;
                } else {
                    localStorage.setItem(iRandom, JSON.stringify(aDado));
                }

            } else {
                alert('Verifique os dados do cadastro!');
            }

            /* Limpa os campos */
            [oNome, oDataNascimento, oRua, oNumero].forEach(function(oCampo) {
                oCampo.value = '';
            });

        });

        return newButton;
    }

    /**
     * Button de Listar
     * @returns 
     */
    createButtonListar = () => {
        var newButton = document.createElement('button');
        newButton.innerText = 'Listar';
        newButton.setAttribute('class', 'btn btn-info');

        newButton.addEventListener('click', function () {
            if (localStorage.length) {
                let body = document.body;
                body.innerHTML = '';

                for (var i = 0; i < localStorage.length; i++) {
                    var oLocal = JSON.parse(localStorage.getItem(i));
                    var sName = oLocal[0].name;
                    var sData = oLocal[0].date;
                    var sRua = oLocal[0].rua;
                    var iNumero = oLocal[0].numero;

                    var newTable = document.createElement('table');
                    var newTr = document.createElement('tr');

                    newTable.appendChild(newTr);
                    var newSpan = document.createElement('span');
                    newSpan.innerText = " Nome: " + sName + " Data de Nascimento: " + sData + " Rua: " + sRua + " Número: " + iNumero;
                    newTr.appendChild(newSpan);

                    body.appendChild(newTr);

                }

            } else {
                alert('Não existe cadastros!');
            }

        });

        return newButton;
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

                for (var iOption = 0; iOption <= oSelectState.children.length; iOption++) {
                    if (oSelectState.children[iOption]) {
                        oSelectState.removeChild(oSelectState.children[iOption]);
                    }
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