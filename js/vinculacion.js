document.addEventListener('DOMContentLoaded', () => {
    // --- STEP NAVIGATION LOGIC ---
    let currentStep = 1;
    const totalSteps = 6;
    const form = document.getElementById('kycForm');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    const btnSubmit = document.getElementById('btn-submit');
    const progressBarFill = document.getElementById('progress-bar-fill');
    
    // UI Elements
    const tipoPersonaSelect = document.getElementById('tipo_persona');
    const boxCamara = document.getElementById('box-camara');
    const docCamaraInput = document.getElementById('doc_camara');

    function updateStepUI() {
        // Update Progress Bar
        const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
        progressBarFill.style.width = `${progressPercentage}%`;

        // Update Step Indicators
        document.querySelectorAll('.step-indicator').forEach(indicator => {
            const stepNum = parseInt(indicator.getAttribute('data-step'));
            const circle = indicator.querySelector('div');
            
            if (stepNum < currentStep) {
                // Completed
                circle.className = 'w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg ring-4 ring-background-light dark:ring-background-dark transition-colors duration-300';
            } else if (stepNum === currentStep) {
                // Active
                circle.className = 'w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg ring-4 ring-background-light dark:ring-background-dark transition-colors duration-300';
            } else {
                // Pending
                circle.className = 'w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 flex items-center justify-center font-bold ring-4 ring-background-light dark:ring-background-dark transition-colors duration-300';
            }
        });

        // Show/Hide form steps
        for (let i = 1; i <= totalSteps; i++) {
            const stepEl = document.getElementById(`step-${i}`);
            if (stepEl) {
                if (i === currentStep) {
                    stepEl.classList.remove('hidden');
                    stepEl.classList.add('active');
                } else {
                    stepEl.classList.add('hidden');
                    stepEl.classList.remove('active');
                }
            }
        }

        // Update Buttons
        btnPrev.disabled = currentStep === 1;
        
        if (currentStep === totalSteps) {
            btnNext.classList.add('hidden');
            btnSubmit.classList.remove('hidden');
        } else {
            btnNext.classList.remove('hidden');
            btnSubmit.classList.add('hidden');
        }
    }

    // Validation function for current step
    function validateStep(step) {
        const stepEl = document.getElementById(`step-${step}`);
        if (!stepEl) return true;

        const requiredInputs = stepEl.querySelectorAll('input[required], select[required]');
        let isValid = true;

        requiredInputs.forEach(input => {
            // Remove previous error styles
            input.classList.remove('ring-2', 'ring-red-500', 'border-red-500');

            if (!input.value.trim()) {
                // Only validate visible inputs (handles dynamic logic)
                if (input.offsetParent !== null) {
                    isValid = false;
                    input.classList.add('ring-2', 'ring-red-500', 'border-red-500');
                }
            }
            
            // Checkbox validation
            if(input.type === 'checkbox' && !input.checked && input.offsetParent !== null) {
                isValid = false;
                input.parentElement.classList.add('ring-2', 'ring-red-500');
                setTimeout(() => { input.parentElement.classList.remove('ring-2', 'ring-red-500'); }, 2000);
            }
        });

        return isValid;
    }

    btnNext.addEventListener('click', () => {
        if (validateStep(currentStep)) {
            // Logic for Persona Natural skipping Step 2 and 4
            if (tipoPersonaSelect.value === 'Natural') {
                if (currentStep === 1) currentStep = 3; // Skip 2 (Contactos)
                else if (currentStep === 3) currentStep = 5; // Skip 4 (Beneficiarios)
                else currentStep++;
            } else {
                currentStep++;
            }
            
            if (currentStep > totalSteps) currentStep = totalSteps;
            updateStepUI();
        } else {
            alert('Por favor, complete todos los campos obligatorios de este paso.');
        }
    });

    btnPrev.addEventListener('click', () => {
        // Logic for Persona Natural skipping Step 2 and 4
        if (tipoPersonaSelect.value === 'Natural') {
            if (currentStep === 5) currentStep = 3; 
            else if (currentStep === 3) currentStep = 1; 
            else currentStep--;
        } else {
            currentStep--;
        }
        
        if (currentStep < 1) currentStep = 1;
        updateStepUI();
    });

    // --- DYNAMIC LOGIC ---
    tipoPersonaSelect.addEventListener('change', (e) => {
        const isJuridica = e.target.value === 'Juridica';
        
        // Hide/Show Cámara de Comercio in Step 6
        if (isJuridica) {
            boxCamara.style.display = 'block';
            docCamaraInput.setAttribute('required', 'required');
        } else {
            boxCamara.style.display = 'none';
            docCamaraInput.removeAttribute('required');
        }
    });

    // File name update logic
    ['doc_selfie', 'doc_id', 'doc_rut', 'doc_camara'].forEach(id => {
        const input = document.getElementById(id);
        const textSpan = document.getElementById(`file-name-${id.split('_')[1]}`);
        if(input && textSpan) {
            input.addEventListener('change', (e) => {
                if (e.target.files.length > 0) {
                    textSpan.textContent = e.target.files[0].name;
                    textSpan.classList.add('text-primary', 'font-bold');
                } else {
                    textSpan.textContent = 'Seleccionar archivo';
                    textSpan.classList.remove('text-primary', 'font-bold');
                }
            });
        }
    });

    // Dynamic Beneficiarios Table (Step 4)
    const btnAddBeneficiario = document.getElementById('btn-add-beneficiario');
    const tableBody = document.querySelector('#beneficiarios-table tbody');

    if(btnAddBeneficiario && tableBody) {
        btnAddBeneficiario.addEventListener('click', () => {
            const newRow = document.createElement('tr');
            newRow.className = 'bg-white dark:bg-surface-dark border-b dark:border-gray-700';
            newRow.innerHTML = `
                <td class="p-2"><input type="text" name="bf_tipo[]" class="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"></td>
                <td class="p-2"><input type="text" name="bf_num[]" class="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"></td>
                <td class="p-2"><input type="text" name="bf_nombre[]" class="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"></td>
                <td class="p-2"><input type="number" name="bf_porc[]" class="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600" min="5" max="100"></td>
                <td class="p-2"><label class="flex items-center gap-1"><input type="checkbox" name="bf_pep[]" class="rounded"> Si</label></td>
                <td class="p-2 text-center">
                    <button type="button" class="btn-remove-row text-red-500 hover:text-red-700"><span class="material-symbols-outlined">delete</span></button>
                </td>
            `;
            tableBody.appendChild(newRow);

            // Add listener to new remove button
            newRow.querySelector('.btn-remove-row').addEventListener('click', () => {
                tableBody.removeChild(newRow);
            });
        });
    }

    // --- FORM SUBMISSION ---
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateStep(currentStep)) {
            btnSubmit.disabled = true;
            btnSubmit.innerHTML = '<span class="material-symbols-outlined animate-spin mr-2">refresh</span> Enviando...';
            
            // Collect Form Data
            const formData = new FormData(form);
            
            // Simulation
            setTimeout(() => {
                form.style.display = 'none';
                document.getElementById('kycSuccess').classList.remove('hidden');
                document.getElementById('kycSuccess').style.display = 'flex';
                
                // Reset form completely
                btnSubmit.disabled = false;
                btnSubmit.innerHTML = 'Enviar Solicitud';
                form.reset();
            }, 2000);
        }
    });

    // Initialize UI
    updateStepUI();
    // Trigger change event to set initial dynamic state
    tipoPersonaSelect.dispatchEvent(new Event('change'));
});
