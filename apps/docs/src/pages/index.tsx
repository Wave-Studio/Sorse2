import { marked } from 'marked';

export default function Home() {
	const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.')
	return (
		<div className="">
			se
			<h1>testy</h1>
<raw>
	{html}
	</raw>
		</div>
	);
}
