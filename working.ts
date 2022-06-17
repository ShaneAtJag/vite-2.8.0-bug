const testBoolean = false;

/*
This is correctly being interpreted as "esbuild".
*/
const testComparisonResult = !testBoolean && 'esbuild';
