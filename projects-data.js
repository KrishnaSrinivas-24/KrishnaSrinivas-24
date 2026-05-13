// Project Categories and Data
const projectCategories = {
    ai: {
        name: "ARTIFICIAL INTELLIGENCE",
        label: "SECTOR_AI",
        color: "cyan",
        icon: "presets/ai_folder.png",
        projects: [
            {
                id: "vyuha_mind",
                name: "Vyuha-Mind",
                image: "presets/vyuha_mind.png",
                description: "Autonomous Multi-Agent Product Strategy Simulator. An intelligent engine powered by multi-agent AI reasoning using Claude, Grok, and Gemini to simulate product market dynamics, competitive landscapes, and investor sentiment in real-time. Features scenario-based simulation, real-time KPI visualization, risk evaluation, and resilient API fallback orchestration.",
                tech: "Python // FastAPI // React // Multi-Agent",
                status: "ACTIVE PROJECT",
                tags: ["AI", "MULTI-AGENT", "SIMULATION"],
                link: "https://github.com/KrishnaSrinivas-24/Vyuha-Mind.git",
                btnText: "INITIATE SIMULATION",
                btnIcon: "zap"
            },
            {
                id: "floatchat",
                name: "Float-Chat AI",
                image: "presets/floatchat.png",
                description: "Full-stack, AI-powered geospatial visualization platform to track, analyze, and interact with real-time oceanographic data. Integrates global Argo Float telemetry with Gemini LLM to transform raw oceanic metrics into interactive, human-readable insights using RAG. Built on a containerized microservices architecture with pgvector.",
                tech: "React // FastAPI // Gemini // PostgreSQL",
                status: "V1 PRODUCTION",
                tags: ["AI", "GEOSPATIAL", "RAG"],
                link: "https://github.com/KrishnaSrinivas-24/FLOATCHAT",
                btnText: "ACCESS PLATFORM",
                btnIcon: "map"
            }
        ]
    },
    data: {
        name: "DATA & ANALYTICS",
        label: "SECTOR_DATA",
        color: "yellow",
        icon: "presets/ml_folder.png",
        projects: [
            {
                id: "aadhaar_insights",
                name: "Aadhaar Insights",
                image: "presets/aadhaar_insights.png",
                description: "A production-grade data analytics dashboard developed for UIDAI that transforms Aadhaar datasets into actionable intelligence. Features ML-powered 30-day demand forecasting, an anomaly detection system for fraud patterns, and interactive geographic heatmaps for policy-grade insights. Scalable to support 100+ concurrent users with < 3s load times.",
                tech: "Python // Streamlit // Pandas // Scikit-learn",
                status: "LIVE SYSTEM",
                tags: ["DATA", "ML", "ANALYTICS"],
                link: "https://github.com/KrishnaSrinivas-24/Aadhaar-Insights-Analytics",
                btnText: "VIEW DASHBOARD",
                btnIcon: "bar-chart-2"
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
                name: "CampusPulse",
                image: "presets/campus_pulse_gen.png",
                description: "A comprehensive, gamified campus event ecosystem designed to connect students and organizations. Features frictionless QR ticketing, a real-time event discovery feed, and a psychological rewards-driven gamification loop to maximize student engagement and attendance. Engineered as a seamless cross-platform monorepo integrating Next.js and React Native.",
                tech: "Next.js // React Native // Firebase",
                status: "DEVELOPMENT",
                tags: ["FULLSTACK", "GAMIFICATION"],
                link: "https://github.com/KrishnaSrinivas-24/CAMPUS-PULSE",
                btnText: "CONNECT HUB",
                btnIcon: "smartphone"
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
