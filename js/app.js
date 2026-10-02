        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    },
                    colors: {
                        // Health Green & Hospital Blue Custom Palette
                        health: {
                            50: '#f0fdf4',
                            100: '#dcfce7',
                            200: '#bbf7d0',
                            300: '#86efac',
                            400: '#4ade80',
                            500: '#10b981', // Emerald Health Green
                            600: '#059669',
                            700: '#047857',
                            800: '#065f46',
                            900: '#064e3b',
                        },
                        hospblue: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            200: '#bae6fd',
                            300: '#7dd3fc',
                            400: '#38bdf8',
                            500: '#0284c7', // Hospital Cyan/Blue
                            600: '#0369a1',
                            700: '#075985',
                            800: '#0c4a6e',
                            900: '#0f172a', // Deep Navy
                        },
                        mint: {
                            100: '#ccfbf1',
                            500: '#14b8a6',
                            600: '#0d9488',
                        }
                    }
                }
            }
        }
        // Kiosk Global State Object
        const state = {
            currentStep: 0,
            currentLang: 'pt',
            serviceType: '',
            rawCpf: '',
            patientData: {
                name: 'Maria das Graças Silva',
                cpf: '123.456.789-00',
                insurance: 'SUS / Unimed'
            },
            selectedSpecialty: 'Clínica Geral',
            priorityLevel: 'CONVENCIONAL',
            urgencyLevel: 'MILD',
            ticketCode: '',
            
            // Accessibility Flags
            isHighContrast: false,
            voiceEnabled: false,
            fontScaleState: 1, // 0 = sm, 1 = normal, 2 = lg, 3 = xl

            // Timers
            finishTimer: null,
            finishCountdownSeconds: 15
        };

        // Multi-Language Dictionary
        const i18nDict = {
            pt: {
                accessibilityBar: "Recursos de Acessibilidade:",
                contrast: "Contraste",
                voiceOff: "Voz: OFF",
                voiceOn: "Voz: ON",
                kioskLocation: "Unidade Central • Totem de Autoatendimento",
                btnHome: "Início",
                welcomeTag: "Atendimento Digital Rápido & Seguro",
                welcomeTitle1: "Retire sua Senha ou Faça seu",
                welcomeDesc: "Agilize seu atendimento no hospital com poucos toques na tela.",
                touchToStart: "TOCAR PARA INICIAR",
                feature1: "Ambiente Seguro",
                feature2: "Prioridade Legal",
                feature3: "Fila Inteligente",
                step1Label: "Identificação",
                step2Label: "Serviço",
                step3Label: "Confirmação",
                step4Label: "Prioridade",
                step1Title: "Como deseja se identificar?",
                step1Sub: "Digite seu CPF ou aproxime o QR Code do seu agendamento no leitor abaixo:",
                tabCPF: "Digite o CPF",
                tabQR: "Escanear Cartão / QR",
                cpfLabel: "Número do CPF",
                cpfHelp: "Digite apenas os 11 números do documento.",
                demoCPF: "Usar CPF de Exemplo (Simulação)",
                btnLimpar: "Limpar",
                btnConfirmID: "AVANÇAR COM ESTE CPF",
                scanPrompt: "Aproxime seu Cartão SUS ou QR Code do Leitor",
                scanSub: "O leitor óptico fica situado logo abaixo desta tela.",
                btnSimulateScan: "Simular Leitura do Cartão",
                step2Title: "Qual o motivo do seu atendimento hoje?",
                step2Sub: "Selecione uma das opções abaixo tocando na caixa correspondente:",
                serv1Title: "Pronto Atendimento / Urgência",
                serv1Desc: "Para sintomas recentes, dores fortes, febre ou situações de emergência sem agendamento.",
                serv2Title: "Consulta Agendada (Check-in)",
                serv2Desc: "Confirme sua chegada para consultas ou exames já marcados previamente.",
                serv3Title: "Retirada de Exames / Laudos",
                serv3Desc: "Imprimir resultados de exames de laboratório ou exames de imagem no balcão.",
                serv4Title: "Informações e Setores",
                serv4Desc: "Visitas a pacientes internados, dúvidas gerais e guichê de autorizações.",
                triageHeader: "Triagem Primária de Sintomas",
                triageSub: "Selecione o nível que melhor descreve seu estado atual:",
                triageMild: "Sintomas Leves ou Sintomáticos Simples",
                triageMildDesc: "Gripe leve, dor muscular baixa, curativos ou renovação de receita.",
                triageMod: "Sintomas Moderados",
                triageModDesc: "Febre alta, enxaqueca forte, mal-estar generalizado, pequenas fraturas.",
                triageUrg: "Urgência / Dor Intensa",
                triageUrgDesc: "Dor no peito, falta de ar intensa, sangramento ativo, queimaduras severas.",
                step3Title: "Confirme seus dados e escolha a Especialidade",
                step3Sub: "Localizamos os seguintes dados em nosso sistema:",
                foundPatient: "Paciente Cadastrado",
                btnNotYou: "Não é você? Alterar",
                selectSpecLabel: "Selecione o Setor / Especialidade Desejada:",
                step4Title: "Você possui direito a Atendimento Prioritário?",
                step4Sub: "Selecione uma das opções prioritárias garantidas pela legislação vigente:",
                prioGeneral: "Atendimento Geral / Convencional",
                prioGeneralDesc: "Não me enquadro em categorias de prioridade legal.",
                prioElderly: "Idoso (60+ anos)",
                prioElderlyDesc: "Prioridade especial para 80+ anos.",
                prioPregnant: "Gestante / Lactante",
                prioPregnantDesc: "Com bebês de colo ou gestantes.",
                prioPCD: "Pessoa com Deficiência",
                prioPCDDesc: "Mobilidade reduzida ou limitações PCD.",
                prioTEA: "Espectro Autista (TEA)",
                prioTEADesc: "Direito garantido por lei prioritária.",
                prioOther: "Outras Prioridades",
                prioOtherDesc: "Doadores de sangue, obesidade severa, etc.",
                ticketSuccess: "Sua Senha foi Gerada com Sucesso!",
                ticketSub: "Retire o comprovante impresso na abertura do totem ou acompanhe no celular pelo QR Code:",
                receiptSubtitle: "Comprovante de Atendimento Digital",
                yourNumber: "SUA SENHA",
                lblPatient: "Paciente:",
                lblSpec: "Especialidade:",
                lblLoc: "Local:",
                lblWait: "Tempo Estimado:",
                mobileTrack: "Acompanhar no Celular",
                tvPrompt: "Fique atento aos painéis de TV espalhados pela recepção.",
                btnPrint: "IMPRIMIR VIA EM PAPEL",
                resetCountdown: "Reiniciando em",
                seconds: "segundos...",
                statusReception: "Recepção: Fluxo Normal",
                ticketsCalled: "Senhas chamadas agora:",
                btnMap: "Mapa de Setores",
                btnCallHelp: "Chamar Atendente",
                btnBack: "Voltar",
                mapTitle: "Guia e Mapa dos Setores Hospitalares",
                mapSub: "Localização das recepções, blocos de exames e consultórios",
                assistantCalledTitle: "Atendente Solicitado!",
                assistantCalledDesc: "Um profissional da recepção foi notificado e já está a caminho deste totem (#03) para lhe auxiliar."
            },
            en: {
                accessibilityBar: "Accessibility Tools:",
                contrast: "Contrast",
                voiceOff: "Voice: OFF",
                voiceOn: "Voice: ON",
                kioskLocation: "Main Unit • Self-Service Kiosk",
                btnHome: "Home",
                welcomeTag: "Fast & Safe Digital Check-In",
                welcomeTitle1: "Get Your Ticket or Complete",
                welcomeDesc: "Speed up your hospital service with just a few touches on screen.",
                touchToStart: "TOUCH TO START",
                feature1: "Safe Environment",
                feature2: "Legal Priority",
                feature3: "Smart Queue",
                step1Label: "ID",
                step2Label: "Service",
                step3Label: "Confirm",
                step4Label: "Priority",
                step1Title: "How would you like to identify yourself?",
                step1Sub: "Enter your ID/CPF or scan your appointment QR Code below:",
                tabCPF: "Enter ID / CPF",
                tabQR: "Scan Card / QR",
                cpfLabel: "ID Number",
                cpfHelp: "Enter digits only.",
                demoCPF: "Use Demo ID (Simulation)",
                btnLimpar: "Clear",
                btnConfirmID: "CONTINUE WITH THIS ID",
                scanPrompt: "Hold your Card or QR Code near the scanner",
                scanSub: "The optical scanner is located right below this screen.",
                btnSimulateScan: "Simulate Card Scan",
                step2Title: "What is the reason for your visit today?",
                step2Sub: "Select one of the options below by tapping the card:",
                serv1Title: "Urgent Care / ER",
                serv1Desc: "For acute symptoms, severe pain, fever, or emergency situations.",
                serv2Title: "Scheduled Appointment",
                serv2Desc: "Confirm your arrival for previously booked doctor appointments.",
                serv3Title: "Test Results Pick-up",
                serv3Desc: "Print lab or imaging test results at the counter.",
                serv4Title: "Information & Orientation",
                serv4Desc: "Inpatient visits, general inquiries, and authorization counter.",
                triageHeader: "Primary Symptom Triage",
                triageSub: "Select the level that best describes your current state:",
                triageMild: "Mild Symptoms",
                triageMildDesc: "Mild flu, light muscle ache, dressing changes, or prescription renewal.",
                triageMod: "Moderate Symptoms",
                triageModDesc: "High fever, severe migraine, general malaise, minor fractures.",
                triageUrg: "Urgent / Intense Pain",
                triageUrgDesc: "Chest pain, severe shortness of breath, active bleeding, severe burns.",
                step3Title: "Confirm details & select Specialty",
                step3Sub: "We found the following records in our system:",
                foundPatient: "Registered Patient",
                btnNotYou: "Not you? Change",
                selectSpecLabel: "Select desired Department / Specialty:",
                step4Title: "Do you have Priority Access rights?",
                step4Sub: "Select one of the priority options guaranteed by law:",
                prioGeneral: "General / Standard Access",
                prioGeneralDesc: "I do not belong to legal priority categories.",
                prioElderly: "Senior (60+ years)",
                prioElderlyDesc: "Special priority for 80+ years.",
                prioPregnant: "Pregnant / Nursing",
                prioPregnantDesc: "Pregnant women or mothers with infants.",
                prioPCD: "Disabled Person",
                prioPCDDesc: "Reduced mobility or disability limitations.",
                prioTEA: "Autism Spectrum (ASD)",
                prioTEADesc: "Priority access guaranteed by law.",
                prioOther: "Other Priorities",
                prioOtherDesc: "Blood donors, severe obesity, etc.",
                ticketSuccess: "Your Ticket Was Generated Successfully!",
                ticketSub: "Take your printed ticket below or track queue status on your phone via QR:",
                receiptSubtitle: "Digital Service Receipt",
                yourNumber: "YOUR NUMBER",
                lblPatient: "Patient:",
                lblSpec: "Specialty:",
                lblLoc: "Location:",
                lblWait: "Est. Wait Time:",
                mobileTrack: "Track on Mobile",
                tvPrompt: "Please watch the TV monitors in the waiting area.",
                btnPrint: "PRINT PAPER TICKET",
                resetCountdown: "Resetting in",
                seconds: "seconds...",
                statusReception: "Reception: Normal Flow",
                ticketsCalled: "Now calling:",
                btnMap: "Sector Map",
                btnCallHelp: "Call Assistant",
                btnBack: "Back",
                mapTitle: "Hospital Sector Guide & Map",
                mapSub: "Locations of receptions, lab blocks, and consultation rooms",
                assistantCalledTitle: "Staff Notified!",
                assistantCalledDesc: "A reception staff member has been notified and is coming to kiosk #03 to help you."
            },
            es: {
                accessibilityBar: "Herramientas de Accesibilidad:",
                contrast: "Contraste",
                voiceOff: "Voz: DES",
                voiceOn: "Voz: ACT",
                kioskLocation: "Unidad Central • Totem de Autoatención",
                btnHome: "Inicio",
                welcomeTag: "Atención Digital Rápida y Segura",
                welcomeTitle1: "Obtenga su Turno o Haga su",
                welcomeDesc: "Agilice su atención en el hospital con pocos toques en la pantalla.",
                touchToStart: "TOCAR PARA INICIAR",
                feature1: "Entorno Seguro",
                feature2: "Prioridad Legal",
                feature3: "Fila Inteligente",
                step1Label: "Identificación",
                step2Label: "Servicio",
                step3Label: "Confirmar",
                step4Label: "Prioridad",
                step1Title: "¿Cómo desea identificarse?",
                step1Sub: "Ingrese su documento o acerque el código QR de su cita:",
                tabCPF: "Ingresar Documento",
                tabQR: "Escanear Tarjeta / QR",
                cpfLabel: "Número de Documento",
                cpfHelp: "Ingrese solo números.",
                demoCPF: "Usar Documento Ejemplo",
                btnLimpar: "Limpiar",
                btnConfirmID: "CONTINUAR CON ESTE NÚMERO",
                scanPrompt: "Acerque su Tarjeta o Código QR al Lector",
                scanSub: "El lector óptico está situado justo debajo de esta pantalla.",
                btnSimulateScan: "Simular Lectura de Tarjeta",
                step2Title: "¿Cuál es el motivo de su visita hoy?",
                step2Sub: "Seleccione una de las siguientes opciones tocando la casilla:",
                serv1Title: "Urgencias / Emergencia",
                serv1Desc: "Para síntomas agudos, dolores fuertes, fiebre o emergencias sin cita.",
                serv2Title: "Cita Programada (Check-in)",
                serv2Desc: "Confirme su llegada para consultas médicas marcadas previamente.",
                serv3Title: "Retiro de Exámenes",
                serv3Desc: "Imprimir resultados de laboratorio o imágenes en el mostrador.",
                serv4Title: "Información y Orientación",
                serv4Desc: "Visitas a pacientes, consultas generales y ventanilla de autorizaciones.",
                triageHeader: "Triaje Primario de Síntomas",
                triageSub: "Seleccione el nivel que mejor describe su estado actual:",
                triageMild: "Síntomas Leves",
                triageMildDesc: "Gripe leve, dolor muscular leve, curaciones o renovación de receta.",
                triageMod: "Síntomas Moderados",
                triageModDesc: "Fiebre alta, migraña fuerte, malestar general, pequeñas fracturas.",
                triageUrg: "Urgencia / Dolor Intenso",
                triageUrgDesc: "Dolor de pecho, dificultad respiratoria severa, sangrado activo.",
                step3Title: "Confirme datos y elija la Especialidad",
                step3Sub: "Encontramos los siguientes registros en nuestro sistema:",
                foundPatient: "Paciente Registrado",
                btnNotYou: "¿No es usted? Cambiar",
                selectSpecLabel: "Seleccione el Sector / Especialidad Deseada:",
                step4Title: "¿Tiene derecho a Atención Prioritaria?",
                step4Sub: "Seleccione una opción prioritaria garantizada por la ley:",
                prioGeneral: "Atención General / Convencional",
                prioGeneralDesc: "No me encuentro en categorías de prioridad legal.",
                prioElderly: "Adulto Mayor (60+ años)",
                prioElderlyDesc: "Prioridad especial para mayores de 80 años.",
                prioPregnant: "Embarazada / Lactante",
                prioPregnantDesc: "Mujeres embarazadas o con lactantes.",
                prioPCD: "Persona con Discapacidad",
                prioPCDDesc: "Movilidad reducida o limitaciones de discapacidad.",
                prioTEA: "Espectro Autista (TEA)",
                prioTEADesc: "Derecho garantizado por ley prioritaria.",
                prioOther: "Otras Prioridades",
                prioOtherDesc: "Donantes de sangre, obesidad severa, etc.",
                ticketSuccess: "¡Su Turno Fue Generado con Éxito!",
                ticketSub: "Retire su comprobante impreso abajo o siga su turno en el móvil con el código QR:",
                receiptSubtitle: "Comprobante de Atención Digital",
                yourNumber: "SU TURNO",
                lblPatient: "Paciente:",
                lblSpec: "Especialidad:",
                lblLoc: "Lugar:",
                lblWait: "Tiempo Est.:",
                mobileTrack: "Seguir en el Móvil",
                tvPrompt: "Por favor, esté atento a las pantallas de TV en la sala de espera.",
                btnPrint: "IMPRIMIR EN PAPEL",
                resetCountdown: "Reiniciando en",
                seconds: "segundos...",
                statusReception: "Recepción: Flujo Normal",
                ticketsCalled: "Llamando ahora:",
                btnMap: "Mapa de Sectores",
                btnCallHelp: "Llamar Asistente",
                btnBack: "Volver",
                mapTitle: "Guía y Mapa de Sectores Hospitalarios",
                mapSub: "Ubicación de recepciones, bloques de exámenes y consultorios",
                assistantCalledTitle: "¡Personal Notificado!",
                assistantCalledDesc: "Un miembro del personal fue notificado y se dirige al totem #03 para ayudarle."
            }
        };

        const specialtiesList = [
            { name: 'Clínica Geral', icon: 'stethoscope', wait: '12 min' },
            { name: 'Pediatria', icon: 'baby', wait: '10 min' },
            { name: 'Ortopedia', icon: 'bone', wait: '18 min' },
            { name: 'Cardiologia', icon: 'heart-pulse', wait: '25 min' },
            { name: 'Ginecologia', icon: 'user-check', wait: '15 min' },
            { name: 'Exames / Lab', icon: 'flask-conical', wait: '5 min' }
        ];

        // Init Lifecycle
        window.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            startLiveClock();
            renderSpecialties();
        });

        function startLiveClock() {
            function update() {
                const now = new Date();
                const clockEl = document.getElementById('kiosk-clock');
                const dateEl = document.getElementById('kiosk-date');
                if (clockEl) clockEl.innerText = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                if (dateEl) {
                    const options = { weekday: 'short', day: '2-digit', month: 'short' };
                    dateEl.innerText = now.toLocaleDateString('pt-BR', options);
                }
            }
            update();
            setInterval(update, 1000);
        }

        function startWizard() {
            goToStep(1);
            playAudioTone(600, 0.1);
            speakText(i18nDict[state.currentLang].step1Title);
        }

        function goToStep(stepNum) {
            state.currentStep = stepNum;

            // Hide all step screens
            document.getElementById('screen-welcome').classList.add('hidden');
            for (let i = 1; i <= 5; i++) {
                const el = document.getElementById(`step-${i}`);
                if (el) el.classList.add('hidden');
            }

            const btnHome = document.getElementById('btn-global-home');
            const stepperBar = document.getElementById('wizard-stepper');
            const btnBack = document.getElementById('btn-wizard-back');

            if (stepNum === 0) {
                document.getElementById('screen-welcome').classList.remove('hidden');
                btnHome.classList.add('hidden');
                stepperBar.classList.add('hidden');
                btnBack.classList.add('hidden');
            } else if (stepNum === 5) {
                document.getElementById('step-5').classList.remove('hidden');
                btnHome.classList.remove('hidden');
                stepperBar.classList.add('hidden');
                btnBack.classList.add('hidden');
                startFinishCountdown();
            } else {
                document.getElementById(`step-${stepNum}`).classList.remove('hidden');
                btnHome.classList.remove('hidden');
                stepperBar.classList.remove('hidden');
                btnBack.classList.remove('hidden');
                updateStepperProgress(stepNum);
            }

            lucide.createIcons();
        }

        function goToPreviousStep() {
            if (state.currentStep > 1) {
                goToStep(state.currentStep - 1);
            } else {
                resetToWelcomeScreen();
            }
        }

        function updateStepperProgress(step) {
            const progressBar = document.getElementById('stepper-progress-bar');
            const percentage = ((step - 1) / 3) * 100;
            if (progressBar) progressBar.style.width = `${percentage}%`;

            for (let i = 1; i <= 4; i++) {
                const node = document.getElementById(`step-node-${i}`);
                if (!node) continue;

                if (i < step) {
                    node.className = 'w-12 h-12 rounded-2xl bg-health-500 text-white font-black text-lg flex items-center justify-center shadow-md';
                    node.innerHTML = '<i data-lucide="check" class="w-6 h-6"></i>';
                } else if (i === step) {
                    node.className = 'w-12 h-12 rounded-2xl bg-health-600 text-white font-black text-lg flex items-center justify-center shadow-md ring-4 ring-health-100';
                    node.innerText = i;
                } else {
                    node.className = 'w-12 h-12 rounded-2xl bg-slate-200 text-slate-500 font-black text-lg flex items-center justify-center';
                    node.innerText = i;
                }
            }
            lucide.createIcons();
        }

        function switchIdMethod(method) {
            const btnCpf = document.getElementById('tab-btn-cpf');
            const btnQr = document.getElementById('tab-btn-qr');
            const viewCpf = document.getElementById('view-cpf-keypad');
            const viewQr = document.getElementById('view-qr-scanner');

            if (method === 'cpf') {
                btnCpf.className = "flex-1 py-3 px-4 rounded-2xl text-xs sm:text-sm font-extrabold bg-health-600 text-white shadow-md transition-all flex items-center justify-center gap-2";
                btnQr.className = "flex-1 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold bg-white text-slate-700 hover:bg-slate-50 border border-slate-300 transition-all flex items-center justify-center gap-2 hc-btn-secondary";
                viewCpf.classList.remove('hidden');
                viewQr.classList.add('hidden');
            } else {
                btnQr.className = "flex-1 py-3 px-4 rounded-2xl text-xs sm:text-sm font-extrabold bg-health-600 text-white shadow-md transition-all flex items-center justify-center gap-2";
                btnCpf.className = "flex-1 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold bg-white text-slate-700 hover:bg-slate-50 border border-slate-300 transition-all flex items-center justify-center gap-2 hc-btn-secondary";
                viewQr.classList.remove('hidden');
                viewCpf.classList.add('hidden');
            }
            playAudioTone(700, 0.05);
        }

        function pressKey(key) {
            playAudioTone(800, 0.05);
            if (key === 'CLEAR') {
                state.rawCpf = '';
            } else if (key === 'BACKSPACE') {
                state.rawCpf = state.rawCpf.slice(0, -1);
            } else {
                if (state.rawCpf.length < 11) {
                    state.rawCpf += key;
                }
            }
            updateKeypadDisplay();
        }

        function updateKeypadDisplay() {
            const inputEl = document.getElementById('kiosk-id-input');
            if (!inputEl) return;

            let val = state.rawCpf;
            let formatted = val;

            if (val.length > 3 && val.length <= 6) {
                formatted = `${val.slice(0, 3)}.${val.slice(3)}`;
            } else if (val.length > 6 && val.length <= 9) {
                formatted = `${val.slice(0, 3)}.${val.slice(3, 6)}.${val.slice(6)}`;
            } else if (val.length > 9) {
                formatted = `${val.slice(0, 3)}.${val.slice(3, 6)}.${val.slice(6, 9)}-${val.slice(9, 11)}`;
            }

            inputEl.value = formatted;
        }

        function autoFillDemoCPF() {
            state.rawCpf = '12345678900';
            updateKeypadDisplay();
            playAudioTone(900, 0.1);
        }

        function confirmPatientIdentification() {
            if (state.rawCpf.length < 11) {
                autoFillDemoCPF();
            }
            state.patientData.cpf = document.getElementById('kiosk-id-input').value || '123.456.789-00';
            document.getElementById('confirm-patient-cpf').innerText = state.patientData.cpf;
            goToStep(2);
            speakText(i18nDict[state.currentLang].step2Title);
        }

        function openUrgencyTriageModal() {
            state.serviceType = 'URGENCIA';
            document.getElementById('modal-urgency-triage').classList.remove('hidden');
            playAudioTone(700, 0.1);
        }

        function closeUrgencyTriageModal() {
            document.getElementById('modal-urgency-triage').classList.add('hidden');
        }

        function selectUrgencyLevel(level) {
            state.urgencyLevel = level;
            closeUrgencyTriageModal();
            goToStep(3);
            speakText(i18nDict[state.currentLang].step3Title);
        }

        function selectService(type) {
            state.serviceType = type;
            playAudioTone(700, 0.1);
            goToStep(3);
            speakText(i18nDict[state.currentLang].step3Title);
        }

        function renderSpecialties() {
            const container = document.getElementById('specialties-grid');
            if (!container) return;

            container.innerHTML = specialtiesList.map(s => `
                <button onclick="selectSpecialty('${s.name}')" class="hc-card bg-white hover:bg-health-50 border-2 border-slate-200 hover:border-health-500 rounded-2xl p-4 shadow-sm text-left flex flex-col justify-between space-y-3 transition-all group active:scale-95">
                    <div class="p-3 bg-health-100 text-health-700 rounded-xl w-fit group-hover:scale-110 transition-transform">
                        <i data-lucide="${s.icon}" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h4 class="font-black text-slate-800 text-sm hc-text">${s.name}</h4>
                        <span class="text-[11px] text-slate-400 font-semibold">Espera: ${s.wait}</span>
                    </div>
                </button>
            `).join('');
        }

        function selectSpecialty(spec) {
            state.selectedSpecialty = spec;
            playAudioTone(700, 0.1);
            goToStep(4);
            speakText(i18nDict[state.currentLang].step4Title);
        }

        function selectPriority(priority) {
            state.priorityLevel = priority;
            generateFinalTicket();
            goToStep(5);
            speakText(i18nDict[state.currentLang].ticketSuccess);
        }

        function generateFinalTicket() {
            let prefix = 'N';
            if (state.serviceType === 'URGENCIA') {
                prefix = state.urgencyLevel === 'URGENT' ? 'U' : 'P';
            } else if (state.priorityLevel !== 'CONVENCIONAL') {
                prefix = 'P';
            }

            const randomNum = Math.floor(Math.random() * 80) + 10;
            state.ticketCode = `${prefix}-0${randomNum}`;

            document.getElementById('ticket-number-display').innerText = state.ticketCode;
            document.getElementById('ticket-patient-name').innerText = state.patientData.name;
            document.getElementById('ticket-specialty-name').innerText = state.selectedSpecialty;

            const badgeEl = document.getElementById('ticket-priority-badge');
            if (state.priorityLevel !== 'CONVENCIONAL' || prefix === 'U') {
                badgeEl.innerText = `ATENDIMENTO PRIORITÁRIO (${state.priorityLevel})`;
                badgeEl.className = 'inline-block px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 border border-amber-300';
            } else {
                badgeEl.innerText = 'ATENDIMENTO CONVENCIONAL';
                badgeEl.className = 'inline-block px-3 py-1 rounded-full text-xs font-black bg-slate-100 text-slate-700 border border-slate-300';
            }

            playAudioTone(1000, 0.3);
        }

        function simulatePrintButton() {
            const btn = document.getElementById('btn-print-action');
            btn.innerHTML = `<i data-lucide="loader-2" class="w-6 h-6 animate-spin"></i><span>IMPRIMINDO...</span>`;
            playAudioTone(400, 0.4);

            setTimeout(() => {
                btn.innerHTML = `<i data-lucide="check" class="w-6 h-6 text-emerald-300"></i><span>SENHA IMPRESSA!</span>`;
                btn.classList.remove('from-health-600', 'to-hospblue-600');
                btn.classList.add('bg-slate-800');
            }, 1200);
        }

        function startFinishCountdown() {
            clearInterval(state.finishTimer);
            state.finishCountdownSeconds = 15;
            const el = document.getElementById('finish-countdown');

            state.finishTimer = setInterval(() => {
                state.finishCountdownSeconds--;
                if (el) el.innerText = state.finishCountdownSeconds;

                if (state.finishCountdownSeconds <= 0) {
                    clearInterval(state.finishTimer);
                    resetToWelcomeScreen();
                }
            }, 1000);
        }

        function resetToWelcomeScreen() {
            clearInterval(state.finishTimer);
            state.rawCpf = '';
            state.currentStep = 0;
            state.serviceType = '';
            state.priorityLevel = 'CONVENCIONAL';

            const btnPrint = document.getElementById('btn-print-action');
            if (btnPrint) {
                btnPrint.innerHTML = `<i data-lucide="printer" class="w-6 h-6"></i><span>IMPRIMIR VIA EM PAPEL</span>`;
                btnPrint.className = "w-full bg-health-600 hover:bg-health-700 text-white font-extrabold py-4 px-6 rounded-2xl text-lg shadow-lg flex items-center justify-center gap-3 transition-all active:scale-95 hc-btn-primary";
            }

            goToStep(0);
        }

        // Sector Map & Assistant Modals
        function openSectorMapModal() {
            document.getElementById('modal-sector-map').classList.remove('hidden');
            playAudioTone(700, 0.1);
        }
        function closeSectorMapModal() {
            document.getElementById('modal-sector-map').classList.add('hidden');
        }

        function callHumanAssistant() {
            document.getElementById('modal-call-assistant').classList.remove('hidden');
            playAudioTone(900, 0.2);
        }
        function closeCallAssistantModal() {
            document.getElementById('modal-call-assistant').classList.add('hidden');
        }

        // Accessibility Functions
        function toggleHighContrast() {
            state.isHighContrast = !state.isHighContrast;
            document.getElementById('kiosk-body').classList.toggle('high-contrast', state.isHighContrast);
            playAudioTone(500, 0.1);
        }

        function changeFontSize(action) {
            const body = document.getElementById('kiosk-body');
            body.classList.remove('scale-sm', 'scale-lg', 'scale-xl');

            if (action === 'plus') {
                state.fontScaleState = Math.min(3, state.fontScaleState + 1);
            } else if (action === 'minus') {
                state.fontScaleState = Math.max(0, state.fontScaleState - 1);
            } else {
                state.fontScaleState = 1;
            }

            if (state.fontScaleState === 0) body.classList.add('scale-sm');
            if (state.fontScaleState === 2) body.classList.add('scale-lg');
            if (state.fontScaleState === 3) body.classList.add('scale-xl');

            playAudioTone(600, 0.05);
        }

        function toggleVoiceAssistant() {
            state.voiceEnabled = !state.voiceEnabled;
            const icon = document.getElementById('icon-voice');
            const label = document.getElementById('text-voice-state');

            if (state.voiceEnabled) {
                label.innerText = i18nDict[state.currentLang].voiceOn;
                icon.className = "w-3.5 h-3.5 text-emerald-400 animate-pulse";
                speakText("Leitor de áudio ativado.");
            } else {
                label.innerText = i18nDict[state.currentLang].voiceOff;
                icon.className = "w-3.5 h-3.5 text-emerald-300";
            }
        }

        function speakText(text) {
            if (!state.voiceEnabled || !('speechSynthesis' in window)) return;
            window.speechSynthesis.cancel(); // Stop previous
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = state.currentLang === 'pt' ? 'pt-BR' : (state.currentLang === 'es' ? 'es-ES' : 'en-US');
            window.speechSynthesis.speak(utterance);
        }

        function setLanguage(lang) {
            state.currentLang = lang;
            ['pt', 'en', 'es'].forEach(l => {
                const btn = document.getElementById(`lang-${l}`);
                if (l === lang) {
                    btn.className = "px-2 py-0.5 rounded font-extrabold bg-health-500 text-white transition-all";
                } else {
                    btn.className = "px-2 py-0.5 rounded font-bold hover:bg-white/20 transition-all text-slate-200";
                }
            });

            // Update i18n text tags across page
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (i18nDict[lang] && i18nDict[lang][key]) {
                    el.innerText = i18nDict[lang][key];
                }
            });

            playAudioTone(700, 0.1);
        }

        // Web Audio Tone Feedback
        function playAudioTone(freq, duration) {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (!AudioContext) return;
                const ctx = new AudioContext();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, ctx.currentTime);
                gain.gain.setValueAtTime(0.12, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start();
                osc.stop(ctx.currentTime + duration);
            } catch (e) {
                // Browser audio autoplay constraint handler
            }
        }
