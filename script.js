const iconMap = {
  "fa-bars": "menu",
  "fa-xmark": "x",
  "fa-arrow-right": "arrow-right",
  "fa-arrow-up": "arrow-up",
  "fa-download": "download",
  "fa-location-dot": "map-pin",
  "fa-envelope": "mail",
  "fa-linkedin": "link",
  "fa-shield-halved": "shield-check",
  "fa-network-wired": "network",
  "fa-clipboard-check": "clipboard-check",
  "fa-database": "database",
  "fa-share-nodes": "share-2",
  "fa-gears": "settings",
  "fa-code": "code-2",
  "fa-certificate": "award",
  "fa-microsoft": "panels-top-left",
  "fa-chevron-left": "chevron-left",
  "fa-chevron-right": "chevron-right",
  "fa-paper-plane": "send",
  "fa-spinner": "loader-circle"
};

function renderIcons(root = document) {
  root.querySelectorAll("i[class*='fa-']").forEach((icon) => {
    const mappedClass = [...icon.classList].find((className) => iconMap[className]);
    if (mappedClass) icon.dataset.lucide = iconMap[mappedClass];
  });
  window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
}

function setIcon(container, name) {
  container.innerHTML = `<i data-lucide="${name}" aria-hidden="true"></i>`;
  renderIcons(container);
}

renderIcons();

const capabilities = {
  secure: {
    title: "Secure",
    icon: "shield-check",
    description: "I study security operations through hands-on labs, adversary frameworks, and Active Directory research.",
    items: ["MITRE ATT&CK scenario analysis", "Caldera-based controlled simulations", "Active Directory and Kerberos fundamentals", "Packet sniffing and traffic analysis", "OSSEC HIDS and defensive control labs"]
  },
  connect: {
    title: "Connect",
    icon: "share-2",
    description: "I build networking fundamentals through coursework, CCNA training, and automation practice.",
    items: ["CCNA training course practice", "Network assignments and topology study", "Firewall and VPN configuration labs", "DHCP and NAT fundamentals", "Ansible network device auto-configuration"]
  },
  operate: {
    title: "Operate",
    icon: "settings",
    description: "I practice server administration through core service configuration and documentation labs.",
    items: ["DNS Server setup", "DHCP, NAT, and iptables labs", "DVWA lab practice", "Windows administration coursework", "Configuration documentation"]
  },
  automate: {
    title: "Automate",
    icon: "code-2",
    description: "I use automation and documentation to make technical work repeatable and easier to validate.",
    items: ["Ansible network automation project", "Lab reports and final project documentation", "Configuration validation notes", "Repository-based learning artifacts", "Clear separation of lab work and production claims"]
  }
};

const projectData = {
  network: {
    title: "NetworkTechnology",
    summary: "A public repository documenting my network learning path, class assignments, university CCNA training, and network automation work.",
    metrics: [["CCNA", "Training foundation"], ["Ansible", "Automation project"], ["Coursework", "Labs and assignments"]],
    detail: "The strongest portfolio artifact in this repository is the Ansible network automation project, supported by a final report. The wider repository records networking coursework and the CCNA training course delivered by my university's Network Security Center."
  },
  security: {
    title: "SecurityOperation",
    summary: "A practical security operations repository covering defensive labs, OSSEC HIDS, and a final MITRE ATT&CK project implemented with Caldera.",
    metrics: [["MITRE ATT&CK", "Adversary framework"], ["OSSEC", "Host-based IDS lab"], ["Active Directory", "Kerberos research"]],
    detail: "The repository includes packet sniffing and traffic analysis, OSSEC host-based intrusion detection, VPN setup, vulnerability scanning, firewall and proxy configuration, DHCP starvation/spoofing labs, and final-project scenarios. My Active Directory notes explain DNS dependencies, LDAP, Kerberos, pre-authentication, and AS-REP Roasting risk. Any malware simulation code is treated strictly as controlled coursework."
  },
  server: {
    title: "Server-System",
    summary: "A public repository of hands-on server-system labs across Linux services, web security practice, and Windows administration.",
    metrics: [["DNS / DHCP", "Core services"], ["DVWA", "Web security lab"], ["iptables / NAT", "Network services"]],
    detail: "The repository contains documented labs for DVWA, DNS Server setup, DHCP/NAT/iptables, plus Windows administration presentation material. Together they demonstrate installation, configuration, validation, and documentation practice."
  }
};

const noteData = {
  traffic: {
    title: "Packet sniffing and traffic analysis",
    summary: "SecurityOperation includes labs for observing traffic and turning packet captures into practical security understanding.",
    metrics: [["Capture", "Network evidence"], ["Protocol", "Behavior analysis"], ["Finding", "Traffic interpretation"]],
    detail: "This note frames packet sniffing as evidence collection: identify the conversation, inspect protocols, separate normal traffic from suspicious behavior, and document what each observation proves."
  },
  scanning: {
    title: "Information gathering and vulnerability scanning",
    summary: "The security labs include reconnaissance and scanning practice, which is most useful when scope and validation are clear.",
    metrics: [["Scope", "Defined target"], ["Scan", "Observed exposure"], ["Validate", "Confirmed finding"]],
    detail: "The important portfolio story is not just running a scanner. It is defining the target, collecting service and version evidence, validating likely weaknesses, and writing findings in a way that supports remediation."
  },
  controls: {
    title: "VPN, firewall, and proxy configuration",
    summary: "SecurityOperation includes labs around secure access and traffic-control fundamentals.",
    metrics: [["VPN", "Secure access"], ["Firewall", "Policy control"], ["Proxy", "Traffic mediation"]],
    detail: "These labs show the network-control side of security operations: configure access paths, understand allowed and denied flows, and document how traffic is shaped or inspected."
  },
  dhcp: {
    title: "DHCP starvation and spoofing lab",
    summary: "The repository includes controlled coursework on DHCP starvation and spoofing behavior.",
    metrics: [["DHCP", "Layer 2 behavior"], ["Attack", "Controlled lab"], ["Defense", "Risk understanding"]],
    detail: "This work is best presented as defensive learning: understand how DHCP abuse works in a lab, why it disrupts address assignment or redirects clients, and what controls can reduce risk in real networks."
  },
  ossec: {
    title: "OSSEC host-based intrusion detection lab",
    summary: "A hands-on HIDS lab focused on collecting host activity, reviewing alerts, and understanding endpoint-level detection.",
    metrics: [["OSSEC", "HIDS platform"], ["Host events", "Detection source"], ["Alerts", "Security review"]],
    detail: "The lab demonstrates how host-based intrusion detection complements network controls. OSSEC provides visibility into host events and rule-based alerts, creating a practical foundation for understanding Wazuh and broader EDR, SIEM, and security-monitoring workflows."
  }
};

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  setIcon(menuToggle, open ? "x" : "menu");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    setIcon(menuToggle, "menu");
  });
});

const navLinks = [...document.querySelectorAll(".nav-link")];
const observedSections = [...document.querySelectorAll(".section-anchor")];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });
observedSections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const capabilityContent = document.querySelector("#capability-content");
document.querySelectorAll(".capability-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const data = capabilities[tab.dataset.capability];
    document.querySelectorAll(".capability-tab").forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    setIcon(capabilityContent.querySelector(".large-icon"), data.icon);
    capabilityContent.querySelector("h2").textContent = data.title;
    capabilityContent.querySelector(".capability-copy p").textContent = data.description;
    capabilityContent.querySelector("ul").innerHTML = data.items.map((item) => `<li>${item}</li>`).join("");
  });
});

const cards = [...document.querySelectorAll(".project-card")];
const dots = [...document.querySelectorAll(".carousel-dots button")];
let activeProject = 1;

function selectProject(index) {
  activeProject = (index + cards.length) % cards.length;
  cards.forEach((card, cardIndex) => card.classList.toggle("active", cardIndex === activeProject));
  dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === activeProject));
}

document.querySelector(".previous").addEventListener("click", () => selectProject(activeProject - 1));
document.querySelector(".next").addEventListener("click", () => selectProject(activeProject + 1));
dots.forEach((dot) => dot.addEventListener("click", () => selectProject(Number(dot.dataset.index))));
cards.forEach((card, index) => card.addEventListener("mouseenter", () => {
  if (window.innerWidth > 900) selectProject(index);
}));

const modal = document.querySelector("#detail-modal");
const modalTitle = document.querySelector("#modal-title");
const modalSummary = document.querySelector("#modal-summary");
const modalMetrics = document.querySelector("#modal-metrics");
const modalDetail = document.querySelector("#modal-detail");

function openProject(projectId) {
  const project = projectData[projectId];
  document.querySelector("#modal-label").textContent = "Project case study";
  modalTitle.textContent = project.title;
  modalSummary.textContent = project.summary;
  modalMetrics.innerHTML = project.metrics.map(([value, label]) => `<span><strong>${value}</strong><small>${label}</small></span>`).join("");
  modalDetail.textContent = project.detail;
  modal.showModal();
  document.body.classList.add("modal-open");
}

document.querySelectorAll(".card-link").forEach((button) => {
  button.addEventListener("click", () => openProject(button.closest(".project-card").dataset.project));
});
document.querySelector(".show-all-projects").addEventListener("click", () => openProject(cards[activeProject].dataset.project));

document.querySelectorAll(".note-link").forEach((button) => {
  button.addEventListener("click", () => {
    const note = noteData[button.dataset.note];
    document.querySelector("#modal-label").textContent = "Technical note";
    modalTitle.textContent = note.title;
    modalSummary.textContent = note.summary;
    modalMetrics.innerHTML = note.metrics.map(([value, label]) => `<span><strong>${value}</strong><small>${label}</small></span>`).join("");
    modalDetail.textContent = note.detail;
    modal.showModal();
    document.body.classList.add("modal-open");
  });
});

function closeModal() {
  modal.close();
  document.body.classList.remove("modal-open");
}
document.querySelector(".modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.querySelector("#resume-download").addEventListener("click", () => {
  const resume = `TRẦN NGỌC BÁ DUY
Cybersecurity / Network / Systems Administrator

SUMMARY
Security-minded infrastructure learner focused on cybersecurity operations, network technology, and server-system administration.

CORE SKILLS
Firewall, EDR and NDR concepts, IDS/IPS, SIEM and SOAR concepts, OSSEC HIDS lab, Wazuh, Elastic Stack, Suricata, MITRE ATT&CK, Caldera, Active Directory, Kerberos, packet analysis, VPN and proxy configuration, vulnerability scanning, DHCP attack labs, and Ansible network automation.

CONTACT
yuu703t@gmail.com
GitHub: https://github.com/Yuuu703
`;
  const url = URL.createObjectURL(new Blob([resume], { type: "text/plain" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "your-name-resume.txt";
  link.click();
  URL.revokeObjectURL(url);
});

const form = document.querySelector(".contact-form");
const fieldMessages = {
  name: "Please enter your name.",
  email: "Please enter a valid email address.",
  subject: "Please add a subject.",
  message: "Please write at least 20 characters."
};

function validateField(field) {
  const valid = field.checkValidity();
  field.classList.toggle("invalid", !valid);
  field.closest("label").querySelector(".error").textContent = valid ? "" : fieldMessages[field.name];
  return valid;
}

form.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("blur", () => validateField(field));
  field.addEventListener("input", () => {
    if (field.classList.contains("invalid")) validateField(field);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = [...form.querySelectorAll("input, textarea")];
  const valid = fields.map(validateField).every(Boolean);
  const status = form.querySelector(".form-status");
  if (!valid) {
    status.textContent = "";
    form.querySelector(".invalid")?.focus();
    return;
  }
  const button = form.querySelector(".submit-button");
  button.disabled = true;
  button.innerHTML = 'Sending <i data-lucide="loader-circle" aria-hidden="true"></i>';
  renderIcons(button);
  button.querySelector("svg").animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 900, iterations: Infinity }
  );
  window.setTimeout(() => {
    form.reset();
    button.disabled = false;
    button.innerHTML = 'Send message <i data-lucide="send" aria-hidden="true"></i>';
    renderIcons(button);
    status.textContent = "Message ready. Connect this form to your email service before publishing.";
  }, 750);
});

document.querySelector("#year").textContent = new Date().getFullYear();
