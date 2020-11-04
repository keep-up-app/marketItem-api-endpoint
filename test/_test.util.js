/**
 * Specify which tests run first
 */

init([
    'server',
    'get'
]);


/**
 * Helper function to cycle through specified tests in array in order
 * 
 * @param {Array} tests 
 */

function init(tests) {
    for(test in tests)
        require(`./${tests[test]}.test`);
}