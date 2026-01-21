// Project Categories and Data
const projectCategories = {
    ai: {
        name: "ARTIFICIAL INTELLIGENCE",
        label: "SECTOR_AI",
        color: "cyan",
        icon: "presets/ai_folder.png",
        projects: [
            {
                id: "jarvis",
                name: "J.A.R.V.I.S.",
                image: "presets/jarvis.png",
                description: "Built an autonomous AI agent framework inspired by Iron Man's J.A.R.V.I.S. The system features multi-agent orchestration with hierarchical task planning, self-directed reasoning capabilities, and seamless LLM integration. Implements advanced prompt engineering for chain-of-thought reasoning and can execute complex multi-step tasks autonomously. Currently in beta testing with promising results in task decomposition and execution accuracy.",
                tech: "Python // Multi-Agent // LLM",
                status: "TOP SECRET",
                tags: ["NEURAL", "BETA"],
                link: "https://github.com/KrishnaSrinivas-24/JARVIS",
                btnText: "INITIATE",
                btnIcon: "zap"
            },
            {
                id: "floatchat",
                name: "FLOATCHAT",
                image: "presets/floatchat.png",
                description: "Developed an innovative RAG-powered text-to-SQL platform specifically designed for ocean and environmental data analysis. Users can query complex oceanographic datasets using natural language, which the system converts to optimized SQL queries. Features real-time data visualization with interactive charts and maps, making scientific data accessible to non-technical stakeholders. Built during the SIH finals as a solution for INCOIS data accessibility challenges.",
                tech: "TypeScript // React // RAG",
                status: "CONFIDENTIAL",
                tags: ["SQL-CORE", "LIVE"],
                link: "https://github.com/KrishnaSrinivas-24/FLOATCHAT",
                btnText: "ACCESS FILE",
                btnIcon: "arrow-right"
            },
            {
                id: "learnmate",
                name: "LearnMate",
                image: "presets/learnmate.png",
                description: "Created an adaptive learning platform powered by IBM Watsonx AI capabilities. The system analyzes student learning patterns and dynamically generates personalized curricula tailored to individual strengths and weaknesses. Features AI-driven tutoring that provides contextual explanations, practice problems, and progress tracking. Utilizes advanced NLP for understanding student queries and providing accurate, helpful responses.",
                tech: "Watsonx // AI Tutor // JS",
                status: "ACTIVE PROJECT",
                tags: ["IBM", "WATSONX"],
                link: "https://github.com/KrishnaSrinivas-24/LearnMate",
                btnText: "VIEW SOURCE",
                btnIcon: "code"
            }
        ]
    },
    ml: {
        name: "MACHINE LEARNING",
        label: "SECTOR_ML",
        color: "yellow",
        icon: "presets/ml_folder.png",
        projects: [
            {
                id: "amazon_ml",
                name: "Amazon ML Challenge",
                image: "presets/amazon_ml.png",
                description: "Competed in the 2025 Amazon Machine Learning Challenge, developing a high-accuracy predictive model for product attribute extraction from images. Implemented advanced feature engineering techniques including image preprocessing, data augmentation, and ensemble methods. Utilized XGBoost and neural network architectures to achieve competitive accuracy. The project showcases skills in handling large-scale datasets and optimizing model performance under competition constraints.",
                tech: "Python // Modeling // AWS",
                status: "COMPETITION",
                tags: ["COMP", "AWS"],
                link: "https://github.com/KrishnaSrinivas-24/Amazon_ML-Challenge_2025",
                btnText: "ANALYZE",
                btnIcon: "bar-chart-2"
            },
            {
                id: "ml_term",
                name: "ML Term Project",
                image: "presets/ml_term.png",
                description: "Comprehensive deep learning project for my MLA-CSEN3261 course at GITAM University. Implemented and analyzed various neural network architectures including CNNs, RNNs, and Transformers. The project explores hyperparameter tuning, regularization techniques, and architectural optimizations. Includes detailed documentation and Jupyter notebooks explaining each model's performance characteristics and use cases.",
                tech: "Python // TensorFlow // Neural",
                status: "ACADEMIC",
                tags: ["NEURAL", "RESEARCH"],
                link: "https://github.com/KrishnaSrinivas-24/ML_TERM-PROJECT",
                btnText: "EXPLORE",
                btnIcon: "search"
            },
            {
                id: "ml_projects",
                name: "ML Projects Collection",
                image: "presets/ml_projects.png",
                description: "Curated collection of machine learning projects completed during my internship at CODTECH IT SOLUTIONS. Includes implementations of classification algorithms, regression models, clustering techniques, and recommendation systems. Each project features clean, well-documented code with comprehensive analysis of model performance metrics. Technologies include scikit-learn, pandas, and matplotlib for end-to-end ML pipelines.",
                tech: "Jupyter // Scikit-learn // Pandas",
                status: "INTERNSHIP",
                tags: ["CODTECH", "NOTEBOOK"],
                link: "https://github.com/KrishnaSrinivas-24/ML-Projects",
                btnText: "BROWSE",
                btnIcon: "folder"
            }
        ]
    },
    fullstack: {
        name: "FULL STACK APPS",
        label: "SECTOR_WEB",
        color: "purple",
        icon: "presets/fullstack_folder.png",
        projects: [
            {
                id: "campus_pulse",
                name: "Campus Pulse",
                image: "presets/campus_pulse.png",
                description: "Built a comprehensive university event management mobile application using React Native and TypeScript. The app serves as a centralized hub for all campus events, club activities, and announcements. Features include real-time push notifications, event RSVP system, interactive campus maps, and social sharing capabilities. Implements a Node.js backend with MongoDB for scalable data management and real-time updates via WebSockets.",
                tech: "TypeScript // React Native // Node",
                status: "NETWORK NODE",
                tags: ["NODE", "REALTIME"],
                link: "https://github.com/KrishnaSrinivas-24/CAMPUS-PULSE",
                btnText: "CONNECT",
                btnIcon: "wifi"
            },
            {
                id: "oceangate",
                name: "OceanGate",
                image: "presets/oceangate.png",
                description: "Developed a sophisticated ocean data visualization platform as part of the SIH (Smart India Hackathon) challenge for INCOIS. The application processes and displays complex oceanographic data through interactive dashboards, maps, and charts. Built with Next.js 14 and deployed on Vercel for optimal performance. Features include real-time data streaming, customizable visualization widgets, and export capabilities for research purposes.",
                tech: "TypeScript // Next.js // Vercel",
                status: "DEPLOYED",
                tags: ["LIVE", "ENV"],
                link: "https://github.com/KrishnaSrinivas-24/OceanGate",
                btnText: "LAUNCH",
                btnIcon: "external-link"
            }
        ]
    },
    tools: {
        name: "TOOLS & UTILITIES",
        label: "SECTOR_UTIL",
        color: "green",
        icon: "presets/tools_folder.png",
        projects: [
            {
                id: "content_audit",
                name: "Content Audit Tool",
                image: "presets/content_audit.png",
                description: "Developed an intelligent content auditing system that analyzes documents for quality, consistency, and SEO optimization. The tool uses NLP techniques to identify issues like duplicate content, readability problems, and missing metadata. Features automated report generation with actionable insights and recommendations. Built with Python and integrates with popular CMS platforms for seamless workflow integration.",
                tech: "Python // NLP // Analysis",
                status: "UTILITY",
                tags: ["AUDIT", "NLP"],
                link: "https://github.com/KrishnaSrinivas-24/Content_Audit_Tool",
                btnText: "EXECUTE",
                btnIcon: "play"
            },
            {
                id: "magic_code",
                name: "Magic with Code",
                image: "presets/magic_code.png",
                description: "A growing collection of Python utilities and automation scripts designed to streamline everyday development workflows. Includes tools for file organization, data processing, API testing, and code generation. Each utility is designed with extensibility in mind, featuring clean interfaces and comprehensive documentation. Perfect for developers looking to boost productivity and automate repetitive tasks.",
                tech: "Python // Automation // Scripts",
                status: "TOOLKIT",
                tags: ["PYTHON", "AUTO"],
                link: "https://github.com/KrishnaSrinivas-24/Magic_with_Code",
                btnText: "CAST SPELL",
                btnIcon: "sparkles"
            }
        ]
    }
};

// State
let activeCategory = null;
let activeProject = null;

// Color mappings
const colorClasses = {
    cyan: { border: '#00f3ff', glow: 'rgba(0, 243, 255, 0.5)', text: '#00f3ff' },
    yellow: { border: '#facc15', glow: 'rgba(250, 204, 21, 0.5)', text: '#facc15' },
    purple: { border: '#a855f7', glow: 'rgba(168, 85, 247, 0.5)', text: '#a855f7' },
    green: { border: '#4ade80', glow: 'rgba(74, 222, 128, 0.5)', text: '#4ade80' }
};

// Open Category
function openCategory(element) {
    const categoryKey = element.dataset.category;
    const category = projectCategories[categoryKey];

    // Toggle if same category
    if (activeCategory === categoryKey) {
        closeCategory();
        return;
    }

    // Remove active from all folders
    document.querySelectorAll('.category-folder').forEach(f => f.classList.remove('active'));

    // Mark this folder as active
    element.classList.add('active');
    activeCategory = categoryKey;
    activeProject = null;

    // Get panels
    const projectsList = document.getElementById('projectsList');
    const projectDetailView = document.getElementById('projectDetailView');
    const detailPanel = document.getElementById('categoryDetailPanel');

    // Hide project detail
    projectDetailView.innerHTML = '';
    projectDetailView.classList.remove('active');

    // Build projects list
    const colors = colorClasses[category.color];

    let projectsHTML = `
        <div class="projects-list-header" style="border-color: ${colors.border}">
            <div class="projects-list-tab" style="border-color: ${colors.border}; color: ${colors.text}">
                📁 ${category.name}
            </div>
            <button class="projects-list-close" onclick="closeCategory()" style="border-color: ${colors.border}; color: ${colors.text}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div class="projects-list-items">
    `;

    category.projects.forEach(project => {
        projectsHTML += `
            <div class="project-list-item" data-project="${project.id}" data-category="${categoryKey}" onclick="openProject('${categoryKey}', '${project.id}')">
                <div class="project-list-icon">
                    <img src="${project.image}" alt="${project.name}">
                </div>
                <div class="project-list-info">
                    <span class="project-list-name">${project.name}</span>
                    <span class="project-list-status" style="color: ${colors.text}">${project.status}</span>
                </div>
                <div class="project-list-arrow" style="color: ${colors.text}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
            </div>
        `;
    });

    projectsHTML += '</div>';

    projectsList.innerHTML = projectsHTML;
    projectsList.classList.add('active');
    detailPanel.classList.add('has-content');

    // Reinitialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Close Category
function closeCategory() {
    document.querySelectorAll('.category-folder').forEach(f => f.classList.remove('active'));

    const projectsList = document.getElementById('projectsList');
    const projectDetailView = document.getElementById('projectDetailView');
    const detailPanel = document.getElementById('categoryDetailPanel');

    projectsList.classList.remove('active');
    projectDetailView.classList.remove('active');
    detailPanel.classList.remove('has-content');

    setTimeout(() => {
        projectsList.innerHTML = '';
        projectDetailView.innerHTML = '';
    }, 300);

    activeCategory = null;
    activeProject = null;
}

// Open Project
function openProject(categoryKey, projectId) {
    const category = projectCategories[categoryKey];
    const project = category.projects.find(p => p.id === projectId);

    if (!project) return;

    activeProject = projectId;

    // Mark project as active
    document.querySelectorAll('.project-list-item').forEach(p => p.classList.remove('active'));
    document.querySelector(`.project-list-item[data-project="${projectId}"]`)?.classList.add('active');

    const colors = colorClasses[category.color];
    const projectDetailView = document.getElementById('projectDetailView');

    const detailHTML = `
        <div class="project-detail-content" style="border-color: ${colors.border}; box-shadow: 0 10px 40px rgba(0,0,0,0.5), 0 0 30px ${colors.glow}">
            <div class="project-detail-image">
                <img src="${project.image}" alt="${project.name}">
                <div class="project-detail-overlay" style="background: linear-gradient(135deg, ${colors.glow}, transparent 60%)"></div>
            </div>
            <div class="project-detail-info">
                <div class="project-detail-status">
                    <div class="status-dot" style="background: ${colors.text}"></div>
                    <span style="color: ${colors.text}">${project.status}</span>
                </div>
                <h3 class="project-detail-title">${project.name}</h3>
                <p class="project-detail-tech" style="color: ${colors.text}">${project.tech}</p>
                <p class="project-detail-desc">${project.description}</p>
                <div class="project-detail-tags">
                    ${project.tags.map(tag => `<span class="project-tag" style="border-color: ${colors.border}; color: ${colors.text}">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="project-detail-btn" style="border-color: ${colors.border}; color: ${colors.text}">
                    ${project.btnText}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    `;

    projectDetailView.innerHTML = detailHTML;
    projectDetailView.classList.add('active');
}

// ESC key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (activeProject) {
            // Just close project detail, keep category open
            const projectDetailView = document.getElementById('projectDetailView');
            projectDetailView.classList.remove('active');
            document.querySelectorAll('.project-list-item').forEach(p => p.classList.remove('active'));
            activeProject = null;
        } else if (activeCategory) {
            closeCategory();
        }
    }
});
