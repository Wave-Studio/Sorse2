// TODO: @quick007 use this for colors
import {} from "https://deno.land/std@0.166.0/fmt/colors.ts";
import { join } from "https://deno.land/std@0.166.0/path/mod.ts";
import copyTemplate from "./copy.ts";

switch (Deno.args[0]) {
	case "create": {
		const name = Deno.args[1] ?? prompt("Project name (sorse-game):") ??
			"sorse-game";
		const cwd = Deno.cwd();
		// new URL() is stupid
		const projectPath = join(cwd, name);
		try {
			await Deno.mkdir(projectPath);
		} catch {
			console.error("Path already exists!");
			//Deno.exit(0);
		}
		console.log("Creating project...");
		copyTemplate(name, projectPath);
		break;
	}

	default: {
		console.log("Help message");
		break;
	}
}
