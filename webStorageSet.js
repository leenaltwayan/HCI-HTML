

function storeValues() {

    if ('localStorage' in window && window['localStorage'] !== null) {
        
		const name = document.querySelector('#name').value;
		const choice = document.querySelector('input[name="choice"]:checked').value;
		const interest = getSelectedCheckboxValues()

		function getSelectedCheckboxValues() {
		    const checkboxes = document.querySelectorAll(`input[name="interest"]:checked`);
		    let values = [];
		    checkboxes.forEach((checkbox) => {
		        values.push(checkbox.value);
		    });
		    return values;
		}

		localStorage.setItem('name', name);
		localStorage.setItem('choice', choice);
		localStorage.setItem('interest', interest);

	} else {
		alert('Cannot store user preferences as your browser do not support local storage');
	}
}


const submitBtn = document.querySelector('#sBtn');
submitBtn.addEventListener('click', storeValues);
