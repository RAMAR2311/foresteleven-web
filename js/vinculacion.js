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
    const actividadEconomicaFilter = document.getElementById('actividad_economica_filter');
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
        if (progressBarFill) {
            progressBarFill.style.width = `${progressPercentage}%`;
        }

        // Update Step Indicators
        document.querySelectorAll('.step-indicator').forEach(indicator => {
            const stepNum = parseInt(indicator.getAttribute('data-step'));
            const circle = indicator.querySelector('div');
            if (!circle) return;
            
            if (stepNum <= currentStep) {
                circle.className = 'w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg ring-4 ring-background-light dark:ring-background-dark transition-colors duration-300';
            } else {
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
        
        if (btnNext && btnSubmit) {
            if (currentStep === totalSteps) {
                btnNext.classList.add('hidden');
                btnSubmit.classList.remove('hidden');
            } else {
                btnNext.classList.remove('hidden');
                btnSubmit.classList.add('hidden');
            }
        }
    }

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

    if (btnNext) {
        btnNext.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                if (tipoPersonaSelect && tipoPersonaSelect.value === 'Natural') {
                    if (currentStep === 1) currentStep = 3;
                    else if (currentStep === 3) currentStep = 5;
                    else currentStep++;
                } else {
                    currentStep++;
                }
                
                if (currentStep > totalSteps) currentStep = totalSteps;
                updateStepUI();
            }
        });
    }

    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            if (tipoPersonaSelect && tipoPersonaSelect.value === 'Natural') {
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

    // --- CIIU 503 CATALOG LOGIC ---
    function normalizeStr(str) {
        return (str || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function populateCiiuData(filterText = '') {
        if (!actividadEconomicaSelect) return;

        const rawData = window.CIIU_DATA || [];
        const normFilter = normalizeStr(filterText);

        const currentValue = actividadEconomicaSelect.value;
        actividadEconomicaSelect.innerHTML = '';

        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.disabled = true;
        placeholder.selected = !currentValue;
        placeholder.textContent = filterText 
            ? `Resultados para "${filterText}"...` 
            : `Seleccione una actividad económica (${rawData.length} disponibles)...`;
        actividadEconomicaSelect.appendChild(placeholder);

        let matchCount = 0;
        rawData.forEach(item => {
            const normName = normalizeStr(item.name);
            const normCode = normalizeStr(item.code);

            if (!normFilter || normName.includes(normFilter) || normCode.includes(normFilter)) {
                const opt = document.createElement('option');
                opt.value = item.code;
                opt.textContent = item.name;
                if (item.code === currentValue) {
                    opt.selected = true;
                }
                actividadEconomicaSelect.appendChild(opt);
                matchCount++;
            }
        });

        if (matchCount === 0) {
            const noRes = document.createElement('option');
            noRes.disabled = true;
            noRes.textContent = 'No se encontraron actividades coincidentes';
            actividadEconomicaSelect.appendChild(noRes);
        }
    }

    if (actividadEconomicaSelect) {
        populateCiiuData('');

        actividadEconomicaSelect.addEventListener('change', (e) => {
            if (codigoCiiuInput) {
                codigoCiiuInput.value = e.target.value || '';
            }
        });
    }

    if (actividadEconomicaFilter) {
        actividadEconomicaFilter.addEventListener('input', (e) => {
            populateCiiuData(e.target.value);
        });
    }

    // --- DYNAMIC CITIES & PERSONA JURIDICA LOGIC ---
    const cityOptions = {
        "Colombia": [
            "Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena",
            "Bucaramanga", "Pereira", "Cúcuta", "Manizales", "Ibagué"
        ],
        "Estados Unidos": [
            "New York", "Los Angeles", "Miami", "Houston", "Chicago",
            "Dallas", "San Francisco", "Atlanta", "Washington D.C.", "Boston"
        ],
        "Mexico": [
            "Ciudad de México", "Guadalajara", "Monterrey", "Cancún", "Mérida",
            "Tijuana", "Puebla", "Querétaro", "León", "Chihuahua"
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
            if (boxCamara && docCamaraInput) {
                if (isJuridica) {
                    boxCamara.style.display = 'block';
                    docCamaraInput.setAttribute('required', 'required');
                } else {
                    boxCamara.style.display = 'none';
                    docCamaraInput.removeAttribute('required');
                }
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
            if (sameAsRepresentative.checked) {
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
                        }
                    }
                });
            }
        });

    // --- FILE INPUT HANDLERS ---
    ['doc_selfie', 'doc_id', 'doc_rut', 'doc_camara'].forEach(id => {
        const input = document.getElementById(id);
        const textSpan = document.getElementById(`file-name-${id.split('_')[1]}`);
        if (input && textSpan) {
            input.addEventListener('change', (e) => {
                if (e.target.files && e.target.files.length > 0) {
                    textSpan.textContent = e.target.files[0].name;
                    textSpan.className = 'text-primary font-bold';
                } else {
                    textSpan.textContent = 'Ningún archivo cargado';
                    textSpan.className = 'text-gray-500 dark:text-gray-400';
                }
            });
        }
    });

    // --- QR MODAL LOGIC ---
    const qrModal = document.getElementById('qrModal');
    const qrModalDocTitle = document.getElementById('qrModalDocTitle');
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const qrDirectUrlInput = document.getElementById('qrDirectUrlInput');
    const qrCopyUrlBtn = document.getElementById('qrCopyUrlBtn');
    const qrDoneBtn = document.getElementById('qrDoneBtn');
    const qrCloseBtn = document.getElementById('qrCloseBtn');
    let qrCodeInstance = null;

    function openQrModal(docType, docTitle) {
        if (!qrModal) return;

        const baseUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
        const targetUrl = `${baseUrl}?doc=${docType}&step=6`;

        if (qrModalDocTitle) {
            qrModalDocTitle.textContent = `Escanea para adjuntar: ${docTitle}`;
        }
        if (qrDirectUrlInput) {
            qrDirectUrlInput.value = targetUrl;
        }

        if (qrCodeContainer) {
            qrCodeContainer.innerHTML = '';
            if (window.QRCode) {
                qrCodeInstance = new window.QRCode(qrCodeContainer, {
                    text: targetUrl,
                    width: 200,
                    height: 200
                });
            } else {
                qrCodeContainer.innerHTML = `<p class="text-xs text-red-500">No se pudo cargar la librería QR. Copia el enlace abajo.</p>`;
            }
        }

        qrModal.classList.remove('hidden');
        qrModal.classList.add('flex');
    }

    function closeQrModal() {
        if (!qrModal) return;
        qrModal.classList.add('hidden');
        qrModal.classList.remove('flex');
    }

    document.querySelectorAll('.btn-qr-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const docType = btn.getAttribute('data-doc-type') || 'documento';
            const docTitle = btn.getAttribute('data-doc-title') || 'Documento';
            openQrModal(docType, docTitle);
        });
    });

    if (qrCopyUrlBtn && qrDirectUrlInput) {
        qrCopyUrlBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(qrDirectUrlInput.value);
                const oldText = qrCopyUrlBtn.textContent;
                qrCopyUrlBtn.textContent = '¡Copiado!';
                qrCopyUrlBtn.classList.replace('bg-primary', 'bg-green-700');
                setTimeout(() => {
                    qrCopyUrlBtn.textContent = oldText;
                    qrCopyUrlBtn.classList.replace('bg-green-700', 'bg-primary');
                }, 2000);
            } catch (err) {
                showValidationPopup('Copia el enlace manualmente desde la caja de texto.');
            }
        });
    }

    if (qrDoneBtn) qrDoneBtn.addEventListener('click', closeQrModal);
    if (qrCloseBtn) qrCloseBtn.addEventListener('click', closeQrModal);

    // --- ENHANCED CAMERA MODAL LOGIC ---
    const cameraModal = document.getElementById('cameraModal');
    const cameraModalTitle = document.getElementById('cameraModalTitle');
    const cameraVideo = document.getElementById('cameraVideo');
    const cameraCanvas = document.getElementById('cameraCanvas');
    const cameraCaptureBtn = document.getElementById('cameraCaptureBtn');
    const cameraRetakeBtn = document.getElementById('cameraRetakeBtn');
    const cameraConfirmBtn = document.getElementById('cameraConfirmBtn');
    const cameraCancelBtn = document.getElementById('cameraCancelBtn');
    const cameraCloseBtn = document.getElementById('cameraCloseBtn');

    let activeDocType = null;
    let activeStream = null;
    let capturedBlob = null;

    async function openCameraForDoc(docType, docTitle) {
        if (!cameraModal || !cameraVideo) return;
        activeDocType = docType;
        capturedBlob = null;

        if (cameraModalTitle) {
            cameraModalTitle.innerHTML = `<span class="material-symbols-outlined text-primary">photo_camera</span> Tomar foto: ${docTitle}`;
        }

        if (cameraVideo) cameraVideo.classList.remove('hidden');
        if (cameraCanvas) cameraCanvas.classList.add('hidden');
        if (cameraCaptureBtn) cameraCaptureBtn.classList.remove('hidden');
        if (cameraRetakeBtn) cameraRetakeBtn.classList.add('hidden');
        if (cameraConfirmBtn) cameraConfirmBtn.classList.add('hidden');

        try {
            const facing = (docType === 'selfie') ? 'user' : { ideal: 'environment' };
            activeStream = await navigator.mediaDevices.getUserMedia({ 
                video: { facingMode: facing, width: { ideal: 1280 }, height: { ideal: 720 } }, 
                audio: false 
            });
            cameraVideo.srcObject = activeStream;
            cameraVideo.play();
            cameraModal.classList.remove('hidden');
            cameraModal.classList.add('flex');
        } catch (error) {
            showValidationPopup('No se pudo acceder a la cámara. Por favor permite el acceso a la cámara en tu navegador o sube una imagen.');
        }
    }

    function stopCameraStream() {
        if (activeStream) {
            activeStream.getTracks().forEach(track => track.stop());
            activeStream = null;
        }
        if (cameraVideo) {
            cameraVideo.pause();
            cameraVideo.srcObject = null;
        }
    }

    function closeCameraModal() {
        if (!cameraModal) return;
        cameraModal.classList.add('hidden');
        cameraModal.classList.remove('flex');
        stopCameraStream();
        activeDocType = null;
        capturedBlob = null;
    }

    function capturePhoto() {
        if (!cameraVideo || !cameraCanvas) return;

        cameraCanvas.width = cameraVideo.videoWidth || 640;
        cameraCanvas.height = cameraVideo.videoHeight || 480;
        const ctx = cameraCanvas.getContext('2d');
        ctx.drawImage(cameraVideo, 0, 0, cameraCanvas.width, cameraCanvas.height);

        stopCameraStream();

        cameraVideo.classList.add('hidden');
        cameraCanvas.classList.remove('hidden');

        cameraCanvas.toBlob((blob) => {
            capturedBlob = blob;
        }, 'image/jpeg', 0.92);

        if (cameraCaptureBtn) cameraCaptureBtn.classList.add('hidden');
        if (cameraRetakeBtn) cameraRetakeBtn.classList.remove('hidden');
        if (cameraConfirmBtn) cameraConfirmBtn.classList.remove('hidden');
    }

    function retakePhoto() {
        const docTitle = activeDocType === 'selfie' ? 'Selfie' : 'Documento';
        openCameraForDoc(activeDocType, docTitle);
    }

    function confirmPhoto() {
        if (!capturedBlob || !activeDocType) return;

        const targetInput = document.getElementById(`doc_${activeDocType}`);
        const textSpan = document.getElementById(`file-name-${activeDocType}`);

        if (targetInput) {
            const fileName = `${activeDocType}_foto_${Date.now()}.jpg`;
            const file = new File([capturedBlob], fileName, { type: 'image/jpeg' });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            targetInput.files = dataTransfer.files;

            if (textSpan) {
                textSpan.textContent = fileName;
                textSpan.className = 'text-primary font-bold';
            }
        }

        closeCameraModal();
    }

    document.querySelectorAll('.btn-camera-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const docType = btn.getAttribute('data-doc-type') || 'selfie';
            const docTitle = btn.getAttribute('data-doc-title') || 'Documento';
            openCameraForDoc(docType, docTitle);
        });
    });

    if (cameraCaptureBtn) cameraCaptureBtn.addEventListener('click', capturePhoto);
    if (cameraRetakeBtn) cameraRetakeBtn.addEventListener('click', retakePhoto);
    if (cameraConfirmBtn) cameraConfirmBtn.addEventListener('click', confirmPhoto);
    if (cameraCancelBtn) cameraCancelBtn.addEventListener('click', closeCameraModal);
    if (cameraCloseBtn) cameraCloseBtn.addEventListener('click', closeCameraModal);

    // --- CHECK FOR URL QUERY PARAMS (MOBILE QR REDIRECT) ---
    const urlParams = new URLSearchParams(window.location.search);
    const paramStep = urlParams.get('step');
    const paramDoc = urlParams.get('doc');

    if (paramStep) {
        const parsedStep = parseInt(paramStep);
        if (parsedStep >= 1 && parsedStep <= totalSteps) {
            currentStep = parsedStep;
        }
    }

    // --- DYNAMIC INITIALIZATION ---
    updateRepresentativeCheckboxVisibility(tipoPersonaSelect?.value === 'Juridica');
    updateCityOptions(countrySelect ? countrySelect.value : '');
    updateStepUI();

    if (tipoPersonaSelect) {
        tipoPersonaSelect.dispatchEvent(new Event('change'));
    }

    // Auto open camera if doc param provided from QR scan
    if (paramDoc) {
        setTimeout(() => {
            const docBtn = document.querySelector(`.btn-camera-option[data-doc-type="${paramDoc}"]`);
            if (docBtn) {
                docBtn.click();
            }
        }, 600);
    }

    // --- BENEFICIARIOS DYNAMIC TABLE ---
    const btnAddBeneficiario = document.getElementById('btn-add-beneficiario');
    const tableBody = document.querySelector('#beneficiarios-table tbody');

    if (btnAddBeneficiario && tableBody) {
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

            newRow.querySelector('.btn-remove-row').addEventListener('click', () => {
                tableBody.removeChild(newRow);
            });
        });
    }

    // --- SUPABASE STORAGE HELPER ---
    async function uploadFileToSupabase(fileInputId, folderName) {
        const fileInput = document.getElementById(fileInputId);
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) return null;
        if (typeof supabaseClient === 'undefined' || !supabaseClient) return null;

        const file = fileInput.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${folderName}/${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;

        try {
            const { data, error } = await supabaseClient.storage
                .from('documentos-vinculacion')
                .upload(fileName, file);

            if (error) {
                console.warn(`Error al subir ${fileInputId} a Supabase Storage:`, error.message);
                return null;
            }

            const { data: publicUrlData } = supabaseClient.storage
                .from('documentos-vinculacion')
                .getPublicUrl(fileName);

            return publicUrlData.publicUrl;
        } catch (err) {
            console.error(`Excepción al subir ${fileInputId}:`, err);
            return null;
        }
    }

    // --- FORM SUBMISSION ---
    if (validationPopupClose) {
        validationPopupClose.addEventListener('click', hideValidationPopup);
    }

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (validateStep(currentStep)) {
                if (btnSubmit) {
                    btnSubmit.disabled = true;
                    btnSubmit.innerHTML = '<span class="material-symbols-outlined animate-spin mr-2">refresh</span> Enviando...';
                }

                // If Supabase is connected, handle real storage upload and database insert
                if (typeof supabaseClient !== 'undefined' && supabaseClient) {
                    try {
                        const [urlSelfie, urlId, urlRut, urlCamara] = await Promise.all([
                            uploadFileToSupabase('doc_selfie', 'selfies'),
                            uploadFileToSupabase('doc_id', 'identificaciones'),
                            uploadFileToSupabase('doc_rut', 'ruts'),
                            uploadFileToSupabase('doc_camara', 'camaras_comercio')
                        ]);

                        const formData = new FormData(form);
                        const tipoPersonaVal = formData.get('tipo_persona') || 'Natural';
                        const rawRazonSocial = formData.get('razon_social') || '';
                        const rawNitCc = formData.get('nit_cc') || '';
                        const rawEmail = formData.get('email') || '';
                        const rawIngresos = formData.get('ingresos_anuales') || '0';
                        const rawFuente = formData.get('fuente_ingresos') || 'N/A';
                        const rawActivos = formData.get('total_activos') || '0';
                        const tipoDocVal = tipoPersonaVal === 'Juridica' ? 'NIT' : 'CC';

                        // Extract name components for natural person compatibility
                        const nameParts = rawRazonSocial.trim().split(/\s+/);
                        const pNombre = nameParts[0] || rawRazonSocial || 'N/A';
                        const sNombre = nameParts.length > 2 ? nameParts[1] : (nameParts.length === 2 ? '' : 'N/A');
                        const pApellido = nameParts.length === 2 ? nameParts[1] : (nameParts.length >= 3 ? nameParts[nameParts.length - 2] : 'N/A');
                        const sApellido = nameParts.length >= 4 ? nameParts[nameParts.length - 1] : 'N/A';

                        // Beneficiarios JSON array
                        const bfTipos = formData.getAll('bf_tipo[]');
                        const bfNums = formData.getAll('bf_num[]');
                        const bfNombres = formData.getAll('bf_nombre[]');
                        const bfPorcs = formData.getAll('bf_porc[]');
                        const bfPeps = formData.getAll('bf_pep[]');

                        const beneficiarios = [];
                        if (tipoPersonaVal === 'Juridica' && bfNombres.length > 0) {
                            for (let i = 0; i < bfNombres.length; i++) {
                                if (bfNombres[i] && bfNombres[i].trim()) {
                                    beneficiarios.push({
                                        tipo_ident: bfTipos[i] || '',
                                        numero: bfNums[i] || '',
                                        nombre: bfNombres[i] || '',
                                        porcentaje: bfPorcs[i] || '0',
                                        is_pep: bfPeps[i] === 'on'
                                    });
                                }
                            }
                        }

                        let payload = {
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

                            tipo_tramite: formData.get('tipo_tramite') || 'N/A',
                            razon_social: rawRazonSocial,
                            nit_cc: rawNitCc,
                            email_principal: rawEmail,
                            tipo_contraparte: formData.get('tipo_contraparte') || 'N/A',
                            pep_recursos: formData.get('pep_recursos') || 'NO',
                            pep_poder: formData.get('pep_poder') || 'NO',
                            pep_vinculo: formData.get('pep_vinculo') || 'NO',
                            ingresos_anuales: rawIngresos,
                            fuente_ingresos: rawFuente,
                            total_activos: rawActivos,
                            acepto_origen: formData.get('acepto_origen') === 'on',
                            acepto_datos: formData.get('acepto_datos') === 'on',
                            created_at: new Date().toISOString()
                        };

                        let { error } = await supabaseClient
                            .from('solicitudes_vinculacion')
                            .insert([payload]);

                        // Retry loop if Supabase rejects unknown columns
                        let maxRetries = 15;
                        while (error && error.message && error.message.includes('Could not find the') && maxRetries > 0) {
                            maxRetries--;
                            const match = error.message.match(/'([^']+)'/);
                            if (match && match[1]) {
                                const badCol = match[1];
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
                            if (btnSubmit) {
                                btnSubmit.disabled = false;
                                btnSubmit.innerHTML = 'Enviar Solicitud';
                            }
                            return;
                        }
                    } catch (err) {
                        console.error('Excepción en envío a Supabase:', err);
                    }
                } else {
                    await new Promise(resolve => setTimeout(resolve, 1500));
                }
                
                form.style.display = 'none';
                const successCard = document.getElementById('kycSuccess');
                const stepWrapper = document.querySelector('.step-indicators-wrapper');
                
                if (stepWrapper) stepWrapper.style.display = 'none';
                if (successCard) {
                    successCard.classList.remove('hidden');
                    successCard.style.display = 'flex';
                    successCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                
                if (btnSubmit) {
                    btnSubmit.disabled = false;
                    btnSubmit.innerHTML = 'Enviar Solicitud';
                }
            }
        });
    }

    window.resetKycForm = function() {
        if (form) form.reset();
        if (form) form.style.display = 'block';
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
});
