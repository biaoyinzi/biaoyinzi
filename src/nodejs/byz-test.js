const byz = require('./byz.js');

function main() {
  console.log("Mandarin");
  console.log(byz.getByz("zhong"));
  console.log(byz.getByz("guo2"));

  console.log("Cantonese");
  console.log(byz.getByz("zung7")); // Jyutping: zung3
  console.log(byz.getByz("guok7")); // Jyutping: gwok3

  console.log("Korean");
  console.log(byz.getByz("zhung"));
  console.log(byz.getByz("gug"));
}

main();
