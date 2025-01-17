// Automatically focus on the input field when the terminal window is clicked
document.querySelector('.terminal-window').addEventListener('click', function () {
    const inputField = document.getElementById('terminal-input');
    inputField.focus(); // Focus the input field to make the cursor appear
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
        return 'Available commands:\n1. sourav - Show available commands\n2. about - About this portfolio\n3. projects - View projects\n4. Relating To - About Sourav';
    } else if (input === 'about') {
        return 'About My Portfolio...';
    } else if (input === 'projects') {
        return '1. E-dot\n2. 10-bit\n2. dotstudios\nUse the command "open <project_name>" to view details.';
    } else if (input === 'Relating to') {
        return 'Relating to Sourav...';
    } else {
        return `Unknown command: "${input}". Type "help" for available commands.`;
    }
}
