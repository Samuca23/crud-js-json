class CrudLocalStorage {

    constructor() {
        this.createLayoutCrud();
    }

    createLayoutCrud = () => {
        
    }

    createDiv = (sClass = false, sId = false) => {
        var oDivContainer = document.getElementsByClassName('container');

        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', sClass);
        newDiv.setAttribute('id', sId);
    }
}
let teste = new CrudLocalStorage();