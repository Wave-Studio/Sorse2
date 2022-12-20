import { copy } from "https://deno.land/std@0.166.0/fs/copy.ts";
import { join } from "https://deno.land/std@0.166.0/path/mod.ts";

export default async function copyTemplate(name: string, projectPath: string) {
	const templatePath = join(import.meta.url, "../template");
	await copy(new URL(templatePath), projectPath, { overwrite: true });
	await copy(
		new URL(join(templatePath, "../../lib")),
		join(projectPath, "./.sorse/library"),
		{ overwrite: true },
	);
	console.log(
		`Created project! Run \`cd ${name}\` and \`deno task run\` to get started!`,
	);
}