
	function riscaModal(modalID) {
		const modal = document.getElementById(modalID);
		modal.classList.add('riscar');
	}
	
	function desriscaModal(modalIDD) {
		const modal = document.getElementById(modalIDD);
		modal.classList.remove('riscar');
	}
	
	var checkbox = document.querySelector("input[name=carne]");

	checkbox.addEventListener('change', function() {
		if (this.checked) {
			riscaModal('carne');
		} else {
			desriscaModal('carne');
		}
	});


