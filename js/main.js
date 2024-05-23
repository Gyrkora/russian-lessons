document.addEventListener('DOMContentLoaded', () => {
	const words = document.querySelectorAll('.word');
	words.forEach((word) => {
		word.addEventListener('click', () => {
			const utterance = new SpeechSynthesisUtterance(word.textContent);
			utterance.lang = 'ru-RU'; // Set language to Russian
			window.speechSynthesis.speak(utterance);
		});
	});
});

// document.addEventListener('DOMContentLoaded', () => {
//     const elements = document.body.querySelectorAll('*');
//     elements.forEach(element => {
//         element.childNodes.forEach(node => {
//             if (node.nodeType === Node.TEXT_NODE) {
//                 const words = node.textContent.trim().split(/\s+/);
//                 if (words.length > 0) {
//                     const fragment = document.createDocumentFragment();
//                     words.forEach((word, index) => {
//                         const span = document.createElement('span');
//                         span.textContent = word;
//                         span.classList.add('word');
//                         span.addEventListener('click', () => {
//                             const utterance = new SpeechSynthesisUtterance(word);
//                             utterance.lang = 'ru-RU'; // Set language to Russian
//                             window.speechSynthesis.speak(utterance);
//                         });
//                         fragment.appendChild(span);
//                         if (index < words.length - 1) {
//                             fragment.appendChild(document.createTextNode(' '));
//                         }
//                     });
//                     node.replaceWith(fragment);
//                 }
//             }
//         });
//     });
// });
