document.getElementById("submission-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const courseName = document.getElementById("course-name").value;
    const assignmentTitle = document.getElementById("assignment-title").value;
    const fileUpload = document.getElementById("file-upload").files[0];

    // Here you can add logic to send data to your server
    console.log("Course Name:", courseName);
    console.log("Assignment Title:", assignmentTitle);
    console.log("File:", fileUpload);

    // Reset the form
    this.reset();

    // Optionally, show a success message
    alert("Assignment submitted successfully!");
});
