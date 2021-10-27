const { parse, parseMultiple, parseAllInDir } = require('../lib/main');

const map = parse('tests/lang/linebreak_en_US.lang');
console.log(map);

const multiple = parseMultiple([ 'tests/lang/linebreak_en_ES.lang', 'tests/lang/linebreak_en_US.lang' ]);
console.log(multiple);

const dir = parseAllInDir('tests/lang');
console.log(dir);