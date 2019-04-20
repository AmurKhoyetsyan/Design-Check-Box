/**
 * create by Amur
 * DesignCheckBox. Create Style tag in HTML document
 * https://github.com/AmurKhoyetsyan/Design-Check-Box
 */

function setStyle(){
    let head = document.head || document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerText = "YOUR SELECTOR{YOUR STYLE};";
    head.append(style);
}

setStyle();