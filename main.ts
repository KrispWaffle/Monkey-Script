import Parser from "./frontOfMonkey/parser.ts";

monkeyScript();

function monkeyScript() {
  const parser = new Parser();
  console.log("\n MonkeyScript v0.1");

  while (true) {
    const input = prompt("> ");
  
    if (!input || input.includes("exit")) {
      Deno.exit(1);
    }

    const program = parser.produceAST(input);
    console.log(program);
  }
}