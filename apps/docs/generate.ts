// Imo fs is much more jank than deno's file stuff - Blocks
import { readFileSync, mkdirSync, writeFileSync, readdirSync } from "fs";

const docStructure: Record<string, unknown> = {};

for (const file of readdirSync("./docs/")) {
	docStructure[file] = {};
	const verData = docStructure[file];
	for (const page of readdirSync(`./docs/${file}`)) {
		const crawlDir = (path: string) => {
			const sections = path.split("/").slice(1);
			let data = verData;
			for (const section of sections) {
				// @ts-expect-error
				if (!data[section]) {
					// @ts-expect-error
					data[section] = {};
				}
				// @ts-expect-error
				data = data[section];
			}

			for (const file of readdirSync(`./docs/${path}`)) {
				if (file.endsWith(".md")) {
					// @ts-expect-error
					data[file] = readFileSync(`./docs/${path}/${file}`, "utf8");
				} else {
					crawlDir(`${path}/${file}`);
				}
			}
		}

		if (page.endsWith(".md")) {
			// @ts-expect-error
			verData[page] = readFileSync(`./docs/${file}/${page}`, "utf8");
		} else {
			crawlDir(`${file}/${page}`);
		}
	}
}

try {
	mkdirSync("./public/docs", { recursive: true });
} catch {
	// Ignore
}

writeFileSync("./public/docs/structure.json", JSON.stringify(docStructure, null, 4));
