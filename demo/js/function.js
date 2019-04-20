window.onload = function(event){
    let input = document.querySelectorAll('.design-check');

    let input1 = document.querySelectorAll('.design-check-1');

    new DesignCheckBox(input).design({
        checkboxPosition: 'left',
        checkMarkColor: '#000000',
        boxBorderColor: '#000000',
        checkBackground: '#8bd8ff',
        label: true,
        labelColor: '#000000'
    });

    new DesignCheckBox(input1).design();
};