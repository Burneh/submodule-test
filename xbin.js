/**
 * @NApiVersion 2.1
 * @NModuleScope Public
 */
 define(
	[
		'./lodash',		
		'N/record',
	],
	function (_, nsRecord) {
		var exports = {
			testExport: testExport
		};

        function testExport (str) {
            return _.toLower(str);
        }

		return exports;
	}
);
