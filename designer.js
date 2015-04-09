(function(KendoNumericTextBox) {
	'use strict';
	
	KendoNumericTextBox.setWidth('130');
	KendoNumericTextBox.setHeight('22');
	
    KendoNumericTextBox.addLabel({
        'defaultValue': 'Label',
        'position': 'left'
    });
    
    KendoNumericTextBox.setPanelStyle({
	        'fClass': true,
	        'text': true,
	        'background': true,
	        'border': true,
	        'sizePosition': true,
	        'label': true,
	        'disabled': ['border-radius']
    });
    
});
