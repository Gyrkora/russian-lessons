// document.addEventListener('DOMContentLoaded', () => {
// 	const words = document.querySelectorAll('.word');
// 	words.forEach((word) => {
// 		word.addEventListener('click', () => {
// 			const utterance = new SpeechSynthesisUtterance(word.textContent);
// 			utterance.lang = 'ru-RU'; // Set language to Russian
// 			window.speechSynthesis.speak(utterance);
// 		});
// 	});
// });

// document.addEventListener('DOMContentLoaded', () => {
// 	const elements = document.body.querySelectorAll('*');
// 	elements.forEach((element) => {
// 		element.childNodes.forEach((node) => {
// 			if (node.nodeType === Node.TEXT_NODE) {
// 				const words = node.textContent.trim().split(/\s+/);
// 				if (words.length > 0) {
// 					const fragment = document.createDocumentFragment();
// 					words.forEach((word, index) => {
// 						const span = document.createElement('span');
// 						span.textContent = word;
// 						span.classList.add('word');
// 						span.addEventListener('click', () => {
// 							const utterance = new SpeechSynthesisUtterance(word);
// 							utterance.lang = 'ru-RU'; // Set language to Russian
// 							window.speechSynthesis.speak(utterance);
// 						});
// 						fragment.appendChild(span);
// 						if (index < words.length - 1) {
// 							fragment.appendChild(document.createTextNode(' '));
// 						}
// 					});
// 					node.replaceWith(fragment);
// 				}
// 			}
// 		});
// 	});
// });

// document.addEventListener('DOMContentLoaded', () => {
// 	const elements = document.body.querySelectorAll('*');
// 	const russianRegex = /[\u0400-\u04FF]+/; // Regex to match Cyrillic characters

// 	elements.forEach((element) => {
// 		element.childNodes.forEach((node) => {
// 			if (node.nodeType === Node.TEXT_NODE) {
// 				const words = node.textContent.trim().split(/\s+/);
// 				if (words.length > 0) {
// 					const fragment = document.createDocumentFragment();
// 					words.forEach((word, index) => {
// 						const span = document.createElement('span');
// 						span.textContent = word;
// 						if (russianRegex.test(word)) {
// 							span.classList.add('word');
// 							span.addEventListener('click', () => {
// 								const utterance = new SpeechSynthesisUtterance(word);
// 								utterance.lang = 'ru-RU'; // Set language to Russian
// 								window.speechSynthesis.speak(utterance);
// 							});
// 						}
// 						fragment.appendChild(span);
// 						if (index < words.length - 1) {
// 							fragment.appendChild(document.createTextNode(' '));
// 						}
// 					});
// 					node.replaceWith(fragment);
// 				}
// 			}
// 		});
// 	});
// });

document.addEventListener('DOMContentLoaded', () => {
	const russianRegex = /[\u0400-\u04FF]+/g; // Regex to match Cyrillic characters

	function wrapRussianWords(node) {
		if (node.nodeType === Node.TEXT_NODE) {
			const fragment = document.createDocumentFragment();
			let lastIndex = 0;

			node.textContent.replace(russianRegex, (match, index) => {
				// Append text before the Russian word
				fragment.appendChild(
					document.createTextNode(node.textContent.slice(lastIndex, index))
				);

				// Create and append the span for the Russian word
				const span = document.createElement('span');
				span.textContent = match;
				span.classList.add('word');
				span.addEventListener('click', () => {
					const utterance = new SpeechSynthesisUtterance(match);
					utterance.lang = 'ru-RU'; // Set language to Russian
					window.speechSynthesis.speak(utterance);
				});
				fragment.appendChild(span);

				lastIndex = index + match.length;
			});

			// Append the remaining text
			fragment.appendChild(
				document.createTextNode(node.textContent.slice(lastIndex))
			);
			node.replaceWith(fragment);
		} else if (node.nodeType === Node.ELEMENT_NODE) {
			node.childNodes.forEach((child) => wrapRussianWords(child));
		}
	}

	wrapRussianWords(document.body);
});
