document.querySelector('.terminal-window').addEventListener('click', function () {
    const inputField = document.getElementById('terminal-input');
    inputField.focus(); // Focus input only when the terminal is clicked
});

// Handle Enter key event to process commands
document.getElementById('terminal-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const input = event.target.value.trim(); // Trim whitespace
        if (input) {
            handleCommand(input); // Process input
        }
        event.target.value = ''; // Clear the input field
    }
});

function handleCommand(input) {
    const terminalOutput = document.getElementById('terminal-output');
    const response = getTerminalResponse(input);
    terminalOutput.innerHTML += `> ${input}\n${response}\n`; // Append input and response to the terminal output
    terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to the bottom to always show the latest output
}

function getTerminalResponse(input) {
    if (input === 'sourav') {
        return 'Available commands:\n1. sourav - Show available commands\n2. about - About this portfolio\n3. projects - View projects\n4. Relating To - About Sourav\n5. education - View education and certificates';
    } else if (input === 'about') {
        return `About My Portfolio

Welcome to my dynamic digital portfolio, a showcase of my skills, projects, and expertise in the world of development and design. This platform reflects my journey as a developer, from building sleek mobile apps to exploring the depths of cybersecurity and ethical hacking. Every project here represents a step forward in my commitment to combining cutting-edge technology with user-centric design.

I believe in crafting intuitive and impactful user experiences that not only solve problems but also inspire innovation. Through this portfolio, I aim to demonstrate my proficiency in app development, reverse engineering, and software engineering, along with my dedication to enhancing digital security.

Feel free to explore, interact, and dive deep into the projects I’ve worked on. Whether you're here to learn, collaborate, or just explore, you’ll get a sense of my passion for development and design.

Credits:
- Design inspiration and UI framework from Craftsmen.tech
- Developed with love and attention by Sourav Kaushik
- Special thanks to dot Studios for their continuous support.`;
    } else if (input === 'projects') {
        return `1. **EDOT (Exploration and Dissection of Technology)** 
   - EDOT is a personal project focused on reverse engineering and security analysis. It aims to uncover software vulnerabilities, dissect applications, and analyze security systems to improve them. Through EDOT, I apply advanced cybersecurity techniques and reverse engineering skills to understand software in-depth and contribute to a more secure digital landscape.

2. 10-bit (Malware Analysis Project)
   - 10-bit is a malware analysis project that aims to study and reverse-engineer malicious software to understand its behavior, vulnerabilities, and impact on systems. This project involves the analysis of malware samples, their network interactions, and how they exploit security flaws. The goal is to learn from these malicious programs to enhance security measures and prevent similar attacks.

3. DotStudios
   - DotStudios is a tech studio founded by me, Sourav Kaushik, focusing on creating innovative solutions, mobile apps, and digital products. Our mission is to push the boundaries of technology while delivering high-quality solutions that meet users' needs. DotStudios is a place where creativity meets technology to produce impactful digital experiences.

    } else if (input === 'relating to') {
        return `Relating to Sourav

I am Sourav Kaushik, a passionate developer with a deep interest in mobile app development, cybersecurity, and ethical hacking. I specialize in learning new technologies day by day, and currently focusing on mastering C programming. I am constantly exploring fresh ideas and looking for ways to innovate in the tech field.

In addition to my technical skills, I am the founder of DotStudios, where we aim to deliver high-quality solutions and products that push the boundaries of technology. Every day, I challenge myself to think of new ideas, solve complex problems, and build things that matter.

My journey is one of continuous learning, and I believe that technology is a powerful tool for change. Whether I am working on a project, experimenting with new technologies, or exploring cybersecurity, my goal is to keep evolving and creating impactful work.

Feel free to connect with me to collaborate, share ideas, or explore new possibilities in tech.`;
    } else if (input === 'education') {
        return `Education and Certifications

1. Bachelor of Computer Applications (BCA)
   - Institution: Amity University (Online)
   - Duration: 2023 - 2026
   - Description: A program focused on providing foundational knowledge in computer science, programming, and technology, with a special emphasis on software development and cybersecurity.

2. Certified Ethical Hacker (CEH)
   - Certification Body: EC-Council
   - Year: 2023
   - Description: A certification that demonstrates my expertise in identifying and addressing security vulnerabilities in systems, networks, and applications.
   
Feel free to ask if you need further details on any specific certification or course!`;
    } else {
        return `Unknown command: "${input}". Type "sourav" for available commands.`;
    }
}
