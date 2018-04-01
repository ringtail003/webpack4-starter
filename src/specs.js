Error.stackTraceLimit = Infinity;

global.jQuery = require('jquery');
require('bootstrap/dist/js/bootstrap');

var testContext = require.context('./', true, /\.spec\.ts$/);

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

var modules = requireAll(testContext);
