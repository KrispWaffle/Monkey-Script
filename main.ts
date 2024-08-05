import Parser from "./frontOfMonkey/parser.ts";
import { createGlobalEnv } from "./monkeyRuntime/env.ts";
import { evaluate } from "./monkeyRuntime/interpreter.ts";

runMonkey("./main.bs");

async function runMonkey(filename: string) {
	const parser = new Parser();
	const env = createGlobalEnv();

	const input = await Deno.readTextFile(filename);
	const program = parser.produceAST(input);

	const result = evaluate(program, env);
}
