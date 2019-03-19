/**
 * create by Amur
 * DesignCheckBox
 * https://github.com/AmurKhoyetsyan/Design-Check-Box
 */

const setStyleArmCheckBox = () => {
    let armCheckBoxStyle = document.createElement('style');
    armCheckBoxStyle.setAttribute('type', 'text/css');
    let head = document.querySelectorAll('head')[0] || document.head;

    armCheckBoxStyle.innerText = ".arm-checkbox{display:none}.arm-checkbox-parent,.arm-checkbox-parent>.arm-checkbox-cubic-parent{display:-webkit-box;display:-ms-flexbox;display:flex}.arm-checkbox-parent{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.arm-checkbox-parent>.arm-checkbox-cubic-parent>.arm-checkbox-cubic,.arm-checkbox-parent>.arm-checkbox-title-parent>.arm-checkbox-title{cursor:pointer;margin-bottom:0}.arm-checkbox-parent>.arm-checkbox-title-parent>.arm-checkbox-title{padding:0 5px;font-size:14px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.arm-checkbox-parent>.arm-checkbox-cubic-parent>.arm-checkbox-cubic{border-style:solid;border-width:1px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;width:17px;height:17px;position:relative}.arm-checkbox-parent>.arm-checkbox-cubic-parent{-webkit-align-items:center;align-items:center}.arm-checkbox:checked~.arm-checkbox-parent>.arm-checkbox-cubic-parent>.arm-checkbox-cubic::before{content:'';width:6px;height:11px;left:4.4px;top:1px;border-style:solid;border-width:0 3px 3px 0;position:absolute;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.arm-checkbox-parent,.arm-checkbox-parent>.arm-checkbox-cubic-parent,.arm-checkbox-parent>.arm-checkbox-cubic-parent>.arm-checkbox-cubic,.arm-checkbox-parent>.arm-checkbox-title-parent>.arm-checkbox-title,.arm-checkbox:checked~.arm-checkbox-parent>.arm-checkbox-cubic-parent>.arm-checkbox-cubic::before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}"

    head.appendChild(armCheckBoxStyle);
};

setStyleArmCheckBox();

class OtherFunctionsCheckBox{
    /**
     * replace All in String
     * @param elem
     * @param search
     * @param replace
     * @returns {string}
     */

    static replaceAll = (elem, search, replace) => {
        return elem.split(search).join(replace);
    };

    /**
     * replace options
     * @param option
     * @param newOption
     */

    static expendOption = (option, newOption) => {
        for(let key in option){
            if(newOption.hasOwnProperty(key)){
                option[key] = newOption[key];
            }
        }
    };

    /**
     * set design CheckBox
     * @param id
     * @param option
     * @returns {*}
     */

    static setDesignCheckBox = (id, option) => {
        let style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerText = `.${id}{background-color: ${option.checkBackground};}.${id}{border-color: ${option.boxBorderColor};},.${id}::before{border-color: ${option.checkMarkColor};}`;
        return style;
    };
}

class DesignCheckBox extends OtherFunctionsCheckBox{
    /**
     * constructor
     * @param elem
     */

    constructor(elem){
        super();
        this.elem = elem;
        this.defaultOption = {
            checkboxPosition: 'left',
            checkMarkColor: '#A4A4A4',
            boxBorderColor: '#A4A4A4',
            checkBackground: '#FFFFFF',
            label: true,
            labelColor: '#A4A4A4'
        }
    }

    /**
     * create check box
     * @param id
     * @param option
     * @returns {Element}
     */

    static createCheckBox = (id, option) => {
        let getClassThis = `${id}_cub_style`;
        let style = this.setDesignCheckBox(getClassThis, option);
        let div = document.createElement('div');
        div.classList.add('arm-checkbox-cubic-parent');
        let check = document.createElement('label');
        check.setAttribute('for', id);
        check.classList.add('arm-checkbox-cubic');
        check.classList.add(getClassThis);
        div.appendChild(style);
        div.appendChild(check);
        return div;
    };

    /**
     * create title label
     * @param elem
     * @param id
     * @param option
     * @returns {Element}
     */

    static createTitle = (elem, id, option) => {
        let title = document.createElement('label');
        let text = document.createTextNode((elem.getAttribute('data-label'))?(elem.getAttribute('data-label')):(''));
        let div = document.createElement('div');
        div.classList.add('arm-checkbox-title-parent');
        title.setAttribute('for', id);
        title.appendChild(text);
        title.style.color = option.labelColor;
        title.classList.add('arm-checkbox-title');
        div.appendChild(title);
        return div;
    };

    /**
     * create checkbox parent
     * @param elem
     * @param id
     * @param option
     * @returns {Element}
     */

    static chreateArmCheckBoxParent = (elem, id, option) => {
        let check = this.createCheckBox(id, option);
        let title = (option.label)?(this.createTitle(elem, id, option)):('');

        let checkBoxParent = document.createElement('div');
        checkBoxParent.classList.add('arm-checkbox-parent');

        if(option.checkboxPosition === 'right'){
            if(option.label){
                checkBoxParent.append(title);
            }
            checkBoxParent.append(check);
        }

        if(option.checkboxPosition === 'left'){
            checkBoxParent.append(check);
            if(option.label){
                checkBoxParent.append(title);
            }
        }

        return checkBoxParent;
    };

    /**
     * add new id and new component checkbox
     * @param elem
     * @param index
     * @param option
     */

    static newDesign = (elem, index, option) => {
        let elClass = this.replaceAll(elem.classList.value, ' ', '');
        let id = `id_${elClass}_${index}_${Math.floor(Math.random() * 1000000)}`;
        if(elem.hasAttribute('id')){
            elem.removeAttribute('id');
            elem.setAttribute('id', id);
        }else{
            elem.setAttribute('id', id);
        }
        elem.classList.add('arm-checkbox');

        let div = document.createElement('div');
        div.classList.add('arm-checkbox-parent-component');

        let armCheckBox = this.chreateArmCheckBoxParent(elem, id, option);

        let parent = elem.parentNode;

        div.appendChild(elem);
        div.appendChild(armCheckBox);

        parent.appendChild(div);
    };

    /**
     * run design
     * @param option
     */

    design = (option = {}) => {
        this.constructor.expendOption(this.defaultOption, option);
        if(this.elem){
            let len = this.elem.length;
            for(let i = 0; i < len; i++){
                if(this.elem[i].getAttribute('type') === 'checkbox'){
                    this.constructor.newDesign(this.elem[i], i, this.defaultOption);
                }
            }
        }
    };
}