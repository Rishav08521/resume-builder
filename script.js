// Function to generate the resume
function generateResume() {
    // Retrieve form data
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const workExperience = document.getElementById('work_experience').value;
    const academicDetails = document.getElementById('academic_details').value;
    const objective = document.getElementById('objective').value;
    const skills = document.getElementById('skills').value;
    const projects = document.getElementById('projects').value;
    const achievements = document.getElementById('achievements').value;
    const contact = document.getElementById('contact').value;

    // Create resume layout
    const resumeContent = `
        <h2>${name}</h2>
        <h3>${title}</h3>
        <p><strong>Work Experience:</strong></p>
        <p>${workExperience}</p>
        <p><strong>Academic Details:</strong></p>
        <p>${academicDetails}</p>
        <p><strong>Objective:</strong></p>
        <p>${objective}</p>
        <p><strong>Skills:</strong></p>
        <p>${skills}</p>
        <p><strong>Projects:</strong></p>
        <p>${projects}</p>
        <p><strong>Achievements:</strong></p>
        <p>${achievements}</p>
        <p><strong>Contact Information:</strong></p>
        <p>${contact}</p>
    `;

    // Insert the content into the output container
    const outputContainer = document.getElementById('output');
    outputContainer.innerHTML = resumeContent;

    // Show the output container
    outputContainer.style.display = 'block';
}

// Function to download the resume as PDF
function downloadPDF() {
    const element = document.getElementById('output'); // The resume preview element
    const opt = {
        margin:       1,
        filename:     'My_Resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Use html2pdf to generate and download the PDF
    html2pdf().from(element).set(opt).save().then(() => {
        // After downloading, show the modal with resume content
        showModal();
    });
}

// Function to show modal with resume content
function showModal() {
    const modalResumeContent = document.getElementById('modalResumeContent');
    const outputContent = document.getElementById('output').innerHTML; // Get resume content
    modalResumeContent.innerHTML = outputContent; // Set modal content
    const modal = document.getElementById('resumeModal');
    modal.style.display = 'block'; // Show modal
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('resumeModal');
    modal.style.display = 'none'; // Hide modal
}
