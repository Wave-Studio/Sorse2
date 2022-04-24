// Imo fs is much more jank than deno's file stuff - Blocks
import { readFileSync, mkdirSync, writeFileSync, readdirSync } from "fs";

const docStructure: Record<string, Record<string, string>> = {};

for (const file of readdirSync("./docs/")) {
	docStructure[file] = {};
	const verData = docStructure[file];
	for (const page of readdirSync(`./docs/${file}`)) {
		const content = readFileSync(`./docs/${file}/${page}`, "utf8");
		verData[page] = content;
	}
}

try {
	mkdirSync("./public/docs", { recursive: true });
} catch {
	// Ignore
}

writeFileSync("./public/docs/structure.json", JSON.stringify(docStructure));
