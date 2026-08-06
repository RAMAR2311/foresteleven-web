document.addEventListener('DOMContentLoaded', () => {
    // --- STEP NAVIGATION LOGIC ---
    let currentStep = 1;
    const totalSteps = 6;
    const form = document.getElementById('kycForm');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    const btnSubmit = document.getElementById('btn-submit');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const validationPopup = document.getElementById('validationPopup');
    const validationPopupMessage = document.getElementById('validationPopupMessage');
    const validationPopupClose = document.getElementById('validationPopupClose');

    if (validationPopup) {
        validationPopup.hidden = true;
        validationPopup.style.display = 'none';
    }
    
    // UI Elements
    const tipoPersonaSelect = document.getElementById('tipo_persona');
    const countrySelect = document.getElementById('pais');
    const citySelect = document.getElementById('ciudad');
    const actividadEconomicaSelect = document.getElementById('actividad_economica');
    const codigoCiiuInput = document.getElementById('codigo_ciiu');
    const sameAsRepresentative = document.getElementById('sameAsRepresentative');
    const sameAsRepresentativeContainer = document.getElementById('sameAsRepresentativeContainer');
    const conNombre = document.getElementById('con_nombre');
    const conCedula = document.getElementById('con_cedula');
    const conCargo = document.getElementById('con_cargo');
    const conEmail = document.getElementById('con_email');
    const conTelefono = document.getElementById('con_telefono');
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
        if (btnPrev) {
            const showPrev = currentStep > 1;
            btnPrev.classList.toggle('hidden', !showPrev);
            btnPrev.hidden = !showPrev;
            btnPrev.disabled = !showPrev;
        }
        
        if (currentStep === totalSteps) {
            btnNext.classList.add('hidden');
            btnSubmit.classList.remove('hidden');
        } else {
            btnNext.classList.remove('hidden');
            btnSubmit.classList.add('hidden');
        }
    }

    // Validation function for current step
    function showValidationPopup(message) {
        if (!validationPopup || !validationPopupMessage) return;
        validationPopupMessage.textContent = message;
        validationPopup.hidden = false;
        validationPopup.style.display = 'flex';
        clearTimeout(window.validationPopupTimeout);
        window.validationPopupTimeout = setTimeout(() => {
            hideValidationPopup();
        }, 4200);
    }

    function hideValidationPopup() {
        if (!validationPopup) return;
        validationPopup.hidden = true;
        validationPopup.style.display = 'none';
        clearTimeout(window.validationPopupTimeout);
    }

    function validateStep(step) {
        const stepEl = document.getElementById(`step-${step}`);
        if (!stepEl) return true;

        const requiredInputs = stepEl.querySelectorAll('input[required], select[required]');
        let isValid = true;

        requiredInputs.forEach(input => {
            // Remove previous error styles
            input.classList.remove('ring-2', 'ring-red-500', 'border-red-500');
            if (input.parentElement) {
                input.parentElement.classList.remove('ring-2', 'ring-red-500');
            }

            const visible = input.offsetParent !== null;
            if (!visible) return;

            if (input.type === 'checkbox') {
                if (!input.checked) {
                    isValid = false;
                    if (input.parentElement) {
                        input.parentElement.classList.add('ring-2', 'ring-red-500');
                        setTimeout(() => {
                            input.parentElement.classList.remove('ring-2', 'ring-red-500');
                        }, 2000);
                    }
                }
            } else if (!input.value.trim()) {
                isValid = false;
                input.classList.add('ring-2', 'ring-red-500', 'border-red-500');
            }
        });

        if (!isValid) {
            const firstInvalid = Array.from(requiredInputs).find(input => {
                const visible = input.offsetParent !== null;
                if (!visible) return false;
                if (input.type === 'checkbox') return !input.checked;
                return !input.value.trim();
            });
            if (firstInvalid && typeof firstInvalid.focus === 'function') {
                firstInvalid.focus();
            }
            showValidationPopup('Por favor, complete todos los campos obligatorios de este paso.');
        }

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
        }
    });

    if (btnPrev) {
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
    }

    // --- DYNAMIC LOGIC ---
    const cityOptions = {
        "Colombia": [
            "Bogotá",
            "Medellín",
            "Cali",
            "Barranquilla",
            "Cartagena",
            "Bucaramanga",
            "Pereira",
            "Cúcuta",
            "Manizales",
            "Ibagué"
        ],
        "Estados Unidos": [
            "New York",
            "Los Angeles",
            "Miami",
            "Houston",
            "Chicago",
            "Dallas",
            "San Francisco",
            "Atlanta",
            "Washington D.C.",
            "Boston"
        ],
        "Mexico": [
            "Ciudad de México",
            "Guadalajara",
            "Monterrey",
            "Cancún",
            "Mérida",
            "Tijuana",
            "Puebla",
            "Querétaro",
            "León",
            "Chihuahua"
        ]
    };

    function updateCityOptions(country) {
        if (!citySelect) return;
        citySelect.innerHTML = '';

        if (!country || !cityOptions[country]) {
            const emptyOption = document.createElement('option');
            emptyOption.value = '';
            emptyOption.textContent = 'Seleccione un país primero...';
            citySelect.appendChild(emptyOption);
            citySelect.disabled = true;
            return;
        }

        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = 'Seleccione una ciudad...';
        placeholder.disabled = true;
        placeholder.selected = true;
        citySelect.appendChild(placeholder);

        cityOptions[country].forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });

        citySelect.disabled = false;
    }

    if (countrySelect) {
        countrySelect.addEventListener('change', (e) => {
            updateCityOptions(e.target.value);
        });
    }

    const ciiuMap = {
        '6201': '6201',
        '6202': '6202',
        '6209': '6209',
        '4651': '4651',
        '4741': '4741',
        '7310': '7310'
    };

    function updateCodigoCiiu() {
        if (!actividadEconomicaSelect || !codigoCiiuInput) return;
        const selectedValue = actividadEconomicaSelect.value;
        if (selectedValue && ciiuMap[selectedValue]) {
            codigoCiiuInput.value = ciiuMap[selectedValue];
        } else {
            codigoCiiuInput.value = '';
        }
    }

    if (actividadEconomicaSelect) {
        actividadEconomicaSelect.addEventListener('change', updateCodigoCiiu);
    }

    function isRepresentativeLegalComplete() {
        const repNombre = document.querySelector('input[name="rep_nombre"]')?.value.trim();
        const repCedula = document.querySelector('input[name="rep_cedula"]')?.value.trim();
        const repEmail = document.querySelector('input[name="rep_email"]')?.value.trim();
        const repTelefono = document.querySelector('input[name="rep_telefono"]')?.value.trim();

        return repNombre && repCedula && repEmail && repTelefono;
    }

    function syncContactPrincipalFromRepresentative() {
        if (!sameAsRepresentative?.checked) return;

        const repNombre = document.querySelector('input[name="rep_nombre"]')?.value || '';
        const repCedula = document.querySelector('input[name="rep_cedula"]')?.value || '';
        const repCargo = document.querySelector('input[name="rep_cargo"]')?.value || '';
        const repEmail = document.querySelector('input[name="rep_email"]')?.value || '';
        const repTelefono = document.querySelector('input[name="rep_telefono"]')?.value || '';

        if (conNombre) conNombre.value = repNombre;
        if (conCedula) conCedula.value = repCedula;
        if (conCargo) conCargo.value = repCargo;
        if (conEmail) conEmail.value = repEmail;
        if (conTelefono) conTelefono.value = repTelefono;
    }

    function setContactPrincipalEditable(isEditable) {
        if (conNombre) conNombre.readOnly = !isEditable;
        if (conCedula) conCedula.readOnly = !isEditable;
        if (conCargo) conCargo.readOnly = !isEditable;
        if (conEmail) conEmail.readOnly = !isEditable;
        if (conTelefono) conTelefono.readOnly = !isEditable;
    }

    function updateRepresentativeCheckboxVisibility(isJuridica) {
        if (!sameAsRepresentativeContainer) return;
        sameAsRepresentativeContainer.style.display = isJuridica ? 'flex' : 'none';
        if (!isJuridica && sameAsRepresentative) {
            sameAsRepresentative.checked = false;
            sameAsRepresentative.disabled = true;
            setContactPrincipalEditable(true);
        }
    }

    function updateRepresentativeCheckboxState() {
        if (!sameAsRepresentative) return;

        const enabled = isRepresentativeLegalComplete();
        sameAsRepresentative.disabled = !enabled;

        if (!enabled && sameAsRepresentative.checked) {
            sameAsRepresentative.checked = false;
            setContactPrincipalEditable(true);
        }
    }

    if (tipoPersonaSelect) {
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

            updateRepresentativeCheckboxVisibility(isJuridica);
            updateRepresentativeCheckboxState();
            if (isJuridica && sameAsRepresentative?.checked) {
                syncContactPrincipalFromRepresentative();
                setContactPrincipalEditable(false);
            }
        });
    }

    if (sameAsRepresentative) {
        sameAsRepresentative.addEventListener('change', () => {
            const isChecked = sameAsRepresentative.checked;

            if (isChecked) {
                if (!isRepresentativeLegalComplete()) {
                    sameAsRepresentative.checked = false;
                    showValidationPopup('Complete primero los datos del representante legal antes de usar esta opción.');
                    return;
                }

                syncContactPrincipalFromRepresentative();
                setContactPrincipalEditable(false);
            } else {
                setContactPrincipalEditable(true);
            }
        });
    }

    ['input[name="rep_nombre"]', 'input[name="rep_cedula"]', 'input[name="rep_cargo"]', 'input[name="rep_email"]', 'input[name="rep_telefono"]']
        .forEach(selector => {
            const repInput = document.querySelector(selector);
            if (repInput) {
                repInput.addEventListener('input', () => {
                    updateRepresentativeCheckboxState();
                    if (sameAsRepresentative?.checked) {
                        if (isRepresentativeLegalComplete()) {
                            syncContactPrincipalFromRepresentative();
                        } else {
                            sameAsRepresentative.checked = false;
                            setContactPrincipalEditable(true);
                            showValidationPopup('La información del representante legal debe estar completa para mantener el contacto principal igual.');
                        }
                    }
                });
            }
        });

    updateRepresentativeCheckboxVisibility(tipoPersonaSelect?.value === 'Juridica');
    updateCityOptions(countrySelect ? countrySelect.value : '');

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

    // Camera capture logic for selfie
    const openCameraBtn = document.getElementById('openCameraBtn');
    const cameraModal = document.getElementById('cameraModal');
    const cameraVideo = document.getElementById('cameraVideo');
    const cameraCaptureBtn = document.getElementById('cameraCaptureBtn');
    const cameraCancelBtn = document.getElementById('cameraCancelBtn');
    const cameraCloseBtn = document.getElementById('cameraCloseBtn');
    const selfieInput = document.getElementById('doc_selfie');
    const selfieName = document.getElementById('file-name-selfie');
    let cameraStream = null;

    async function openCameraModal() {
        if (!cameraModal || !cameraVideo) return;

        try {
            cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
            cameraVideo.srcObject = cameraStream;
            cameraVideo.play();
            cameraModal.classList.remove('hidden');
        } catch (error) {
            showValidationPopup('No se pudo acceder a la cámara. Por favor permite el uso de la cámara o selecciona una imagen.');
        }
    }

    function closeCameraModal() {
        if (!cameraModal) return;
        cameraModal.classList.add('hidden');
        if (cameraVideo) {
            cameraVideo.pause();
            cameraVideo.srcObject = null;
        }
        if (cameraStream) {
            cameraStream.getTracks().forEach(track => track.stop());
            cameraStream = null;
        }
    }

    function captureSelfie() {
        if (!cameraVideo || !selfieInput || !selfieName) return;

        const canvas = document.createElement('canvas');
        canvas.width = cameraVideo.videoWidth;
        canvas.height = cameraVideo.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(cameraVideo, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(async (blob) => {
            if (!blob) return;
            const fileName = `selfie_${Date.now()}.jpg`;
            const file = new File([blob], fileName, { type: 'image/jpeg' });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            selfieInput.files = dataTransfer.files;
            selfieName.textContent = fileName;
            selfieName.classList.add('text-primary', 'font-bold');
            closeCameraModal();
        }, 'image/jpeg', 0.95);
    }

    if (openCameraBtn) {
        openCameraBtn.addEventListener('click', openCameraModal);
    }
    if (cameraCancelBtn) {
        cameraCancelBtn.addEventListener('click', closeCameraModal);
    }
    if (cameraCloseBtn) {
        cameraCloseBtn.addEventListener('click', closeCameraModal);
    }
    if (cameraCaptureBtn) {
        cameraCaptureBtn.addEventListener('click', captureSelfie);
    }

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

    // --- FORM SUBMISSION (SUPABASE INTEGRATION) ---
    validationPopupClose.addEventListener('click', hideValidationPopup);

    // Helper: Subir archivo a Supabase Storage
    async function uploadFileToSupabase(file, folder) {
        if (!supabaseClient || SUPABASE_URL.includes('TU_PROYECTO')) return null;
        try {
            const timestamp = Date.now();
            const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
            const filePath = `${folder}/${timestamp}_${cleanName}`;
            
            const { data, error } = await supabaseClient
                .storage
                .from('documentos_kyc')
                .upload(filePath, file, { cacheControl: '3600', upsert: true });

            if (error) {
                console.error(`Error subiendo ${file.name}:`, error.message);
                return null;
            }

            const { data: urlData } = supabaseClient
                .storage
                .from('documentos_kyc')
                .getPublicUrl(filePath);

            return urlData ? urlData.publicUrl : filePath;
        } catch (err) {
            console.error('Error en uploadFileToSupabase:', err);
            return null;
        }
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (validateStep(currentStep)) {
            btnSubmit.disabled = true;
            btnSubmit.innerHTML = '<span class="material-symbols-outlined animate-spin mr-2">refresh</span> Enviando...';
            
            // Recolectar datos del formulario
            const formData = new FormData(form);
            const numDoc = formData.get('nit_cc') || formData.get('num_doc') || 'generico';

            // Archivos a subir
            const fileSelfie = document.getElementById('doc_selfie')?.files[0];
            const fileId = document.getElementById('doc_id')?.files[0];
            const fileRut = document.getElementById('doc_rut')?.files[0];
            const fileCamara = document.getElementById('doc_camara')?.files[0];

            let urlSelfie = null;
            let urlId = null;
            let urlRut = null;
            let urlCamara = null;

            // Extraer Beneficiarios Finales de la tabla
            const beneficiarios = [];
            const rows = document.querySelectorAll('#beneficiarios-table tbody tr');
            rows.forEach(row => {
                const tipo = row.querySelector('[name="bf_tipo[]"]')?.value || '';
                const num = row.querySelector('[name="bf_num[]"]')?.value || '';
                const nombre = row.querySelector('[name="bf_nombre[]"]')?.value || '';
                const porc = row.querySelector('[name="bf_porc[]"]')?.value || '';
                const pep = row.querySelector('[name="bf_pep[]"]')?.checked || false;
                if (nombre || num) {
                    beneficiarios.push({ tipo_doc: tipo, num_doc: num, nombre, porcentaje: porc, es_pep: pep });
                }
            });

            // Si Supabase está configurado con las llaves reales
            const isSupabaseConfigured = supabaseClient && typeof SUPABASE_URL === 'string' && !SUPABASE_URL.includes('TU_PROYECTO');

            if (isSupabaseConfigured) {
                try {
                    // 1. Subir Archivos a Supabase Storage
                    const folderPath = `solicitudes/${numDoc}`;
                    if (fileSelfie) urlSelfie = await uploadFileToSupabase(fileSelfie, folderPath);
                    if (fileId) urlId = await uploadFileToSupabase(fileId, folderPath);
                    if (fileRut) urlRut = await uploadFileToSupabase(fileRut, folderPath);
                    if (fileCamara) urlCamara = await uploadFileToSupabase(fileCamara, folderPath);

                    // 2. Construir objeto llenando TODOS los campos (nombres desglosados y formulario completo)
                    const rawRazonSocial = (formData.get('razon_social') || '').trim();
                    const rawNitCc = (formData.get('nit_cc') || '').trim();
                    const rawEmail = (formData.get('email_principal') || '').trim();
                    const rawIngresos = (formData.get('ingresos_anuales') || '').trim();
                    const rawFuente = (formData.get('fuente_ingresos') || '').trim();
                    const rawActivos = (formData.get('total_activos') || '').trim();
                    const tipoPersonaVal = formData.get('tipo_persona') || 'Natural';
                    const tipoDocVal = tipoPersonaVal === 'Juridica' ? 'NIT' : 'CC';

                    // Desglosar nombre en partes para llenar primer_nombre, segundo_nombre, etc.
                    const nameParts = rawRazonSocial.split(/\s+/).filter(Boolean);
                    const pNombre = nameParts[0] || rawRazonSocial || 'N/A';
                    const sNombre = nameParts.length > 2 ? nameParts[1] : (nameParts.length === 2 ? '' : 'N/A');
                    const pApellido = nameParts.length === 2 ? nameParts[1] : (nameParts.length >= 3 ? nameParts[nameParts.length - 2] : 'N/A');
                    const sApellido = nameParts.length >= 4 ? nameParts[nameParts.length - 1] : 'N/A';

                    let payload = {
                        // Schema Original (Script 1)
                        tipo_persona: tipoPersonaVal,
                        primer_nombre: pNombre,
                        segundo_nombre: sNombre,
                        primer_apellido: pApellido,
                        segundo_apellido: sApellido,
                        tipo_doc: tipoDocVal,
                        num_doc: rawNitCc,
                        fecha_expedicion: 'N/A',
                        fecha_expedición: 'N/A',
                        pais: formData.get('pais') || 'N/A',
                        país: formData.get('pais') || 'N/A',
                        ciudad: formData.get('ciudad') || 'N/A',
                        email: rawEmail,
                        telefono: formData.get('telefono') || 'N/A',
                        teléfono: formData.get('telefono') || 'N/A',
                        direccion: formData.get('direccion') || 'N/A',
                        dirección: formData.get('direccion') || 'N/A',
                        actividad_economica: formData.get('actividad_economica') || 'N/A',
                        actividad_económica: formData.get('actividad_economica') || 'N/A',
                        codigo_ciiu: formData.get('codigo_ciiu') || 'N/A',
                        código_ciiu: formData.get('codigo_ciiu') || 'N/A',
                        ingresos_mensuales: rawIngresos,
                        egresos_mensuales: rawFuente,
                        activos: rawActivos,
                        pasivos: '0',
                        rep_nombre: formData.get('rep_nombre') || 'N/A',
                        rep_cedula: formData.get('rep_cedula') || 'N/A',
                        rep_cargo: formData.get('rep_cargo') || 'N/A',
                        rep_email: formData.get('rep_email') || 'N/A',
                        rep_telefono: formData.get('rep_telefono') || 'N/A',
                        con_nombre: formData.get('con_nombre') || 'N/A',
                        con_cedula: formData.get('con_cedula') || 'N/A',
                        con_cargo: formData.get('con_cargo') || 'N/A',
                        con_email: formData.get('con_email') || 'N/A',
                        con_telefono: formData.get('con_telefono') || 'N/A',
                        beneficiarios: beneficiarios,
                        url_selfie: urlSelfie || '',
                        url_doc_id: urlId || '',
                        url_doc_rut: urlRut || '',
                        url_doc_camara: urlCamara || '',

                        // Columnas Extendidas (Script 2)
                        tipo_tramite: formData.get('tipo_tramite') || 'N/A',
                        razon_social: rawRazonSocial,
                        nit_cc: rawNitCc,
                        email_principal: rawEmail,
                        tipo_contraparte: formData.get('tipo_contraparte') || 'N/A',
                        pep_recursos: formData.get('pep_recursos') || 'NO',
                        pep_poder: formData.get('pep_poder') || 'NO',
                        pep_vinculo: formData.get('pep_vinculo') || 'NO',
                        rep_pep_recursos: formData.get('rep_pep_recursos') === 'on',
                        rep_pep_poder: formData.get('rep_pep_poder') === 'on',
                        rep_pep_vinculo: formData.get('rep_pep_vinculo') === 'on',
                        con_pep_recursos: formData.get('con_pep_recursos') === 'on',
                        con_pep_poder: formData.get('con_pep_poder') === 'on',
                        con_pep_vinculo: formData.get('con_pep_vinculo') === 'on',
                        ingresos_anuales: rawIngresos,
                        fuente_ingresos: rawFuente,
                        total_activos: rawActivos,
                        acepto_origen: formData.get('acepto_origen') === 'on',
                        acepto_datos: formData.get('acepto_datos') === 'on',
                        created_at: new Date().toISOString()
                    };

                    let { data, error } = await supabaseClient
                        .from('solicitudes_vinculacion')
                        .insert([payload]);

                    // Bucle de reintento: Si Supabase rechaza columnas no existentes en la tabla del usuario, eliminarlas y reintentar
                    let maxRetries = 15;
                    while (error && error.message && error.message.includes('Could not find the') && maxRetries > 0) {
                        maxRetries--;
                        const match = error.message.match(/'([^']+)'/);
                        if (match && match[1]) {
                            const badCol = match[1];
                            console.warn(`Eliminando columna inexistente '${badCol}' del payload y reintentando...`);
                            delete payload[badCol];
                            const retry = await supabaseClient.from('solicitudes_vinculacion').insert([payload]);
                            error = retry.error;
                        } else {
                            break;
                        }
                    }

                    if (error) {
                        console.error('Error insertando en Supabase:', error);
                        showValidationPopup('Error al guardar en Supabase: ' + error.message);
                        btnSubmit.disabled = false;
                        btnSubmit.innerHTML = 'Enviar Solicitud';
                        return;
                    }
                } catch (err) {
                    console.error('Error general en el envío a Supabase:', err);
                    showValidationPopup('Ocurrió un error inesperado al conectar con Supabase.');
                    btnSubmit.disabled = false;
                    btnSubmit.innerHTML = 'Enviar Solicitud';
                    return;
                }
            } else {
                console.info('Supabase no está configurado aún (usando llaves por defecto). Ejecutando simulación.');
                await new Promise(resolve => setTimeout(resolve, 1500));
            }

            // Éxito en la presentación del formulario
            form.style.display = 'none';
            const kycSuccess = document.getElementById('kycSuccess');
            const stepWrapper = document.querySelector('.step-indicators-wrapper');
            
            if (stepWrapper) stepWrapper.style.display = 'none';
            if (kycSuccess) {
                kycSuccess.classList.remove('hidden');
                kycSuccess.style.display = 'flex';
                kycSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            // Reset de botones del formulario
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = 'Enviar Solicitud';
        }
    });

    // Función global para reiniciar el formulario desde la pantalla de éxito
    window.resetKycForm = function() {
        form.reset();
        form.style.display = 'block';
        const kycSuccess = document.getElementById('kycSuccess');
        const stepWrapper = document.querySelector('.step-indicators-wrapper');
        
        if (kycSuccess) {
            kycSuccess.classList.add('hidden');
            kycSuccess.style.display = 'none';
        }
        if (stepWrapper) {
            stepWrapper.style.display = 'block';
        }
        currentStep = 1;
        updateStepUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Initialize UI
    updateStepUI();
    // Trigger change event to set initial dynamic state
    tipoPersonaSelect.dispatchEvent(new Event('change'));
});
