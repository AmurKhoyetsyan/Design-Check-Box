/**
 * create by Amur
 * DesignCheckBox. Create Label tag in HTML document
 * https://github.com/AmurKhoyetsyan/Design-Check-Box
 */

const createLabel = () => {
    let label = document.createElement('label');
    let text = document.createTextNode("YOUR TEXT");
    let selector = document.querySelectorAll('YOUR SELECTOR')[0];
    label.setAttribute('for', 'YOUR ID');
    label.appendChild(text);
    selector.appendChild(label);
};

createLabel();