export function returnXMLdoc(selector) {

	const rawText = `<?xml version="1.0" encoding="UTF-8"?>
		<package>
		  <level id="l1">
			<unit id="u1">
			  <activity id="a1"></activity>
			  <activity id="a2"></activity>
			</unit>
			<unit id="u2">
			  <activity id="a3"></activity>
			</unit>
		  </level>
		  <level id="l2">
			<unit id="u3">
			  <activity id="a4"></activity>
			</unit>
		  </level>
		</package>`;

	const xmlDoc = (new (<any>window).DOMParser()).parseFromString(rawText, 'text/xml');

	if (selector) {
		return xmlDoc.getElementsByTagName(selector);
	}

	return xmlDoc;
}
