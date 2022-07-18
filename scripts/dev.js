const minimist = require('minimist');
const execa = require('execa');
const args = minimist(process.argv.slice(2));

const target = args._.length ? args._[0] : 'reactivity';
const formats = args.f || 'global';
const sourceMap = args.s || false; 
console.log(args);


execa('rollup', [
  '-wc', // --watch --config
  '--environment',
  [
    `TARGET:${target}`,
    `FORMATS:${formats}`,
    sourceMap ? `SOURCE_MAP:true`: ``
  ].filter(Boolean).join(',')
], {
  stdio: 'inherit', // 这个子进程的输出是在当前命令行中输出
});
// 44