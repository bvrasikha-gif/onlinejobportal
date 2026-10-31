function searchJobs() {
    let jobInput = document.getElementById("jobSearch")
        .value.toLowerCase().trim();

    let locationInput = document.getElementById("locationSearch")
        .value.toLowerCase().trim();

    let jobs = document.querySelectorAll(".job-card");
    let found = 0;

    jobs.forEach(function(job) {
        let jobText = job.innerText.toLowerCase();

        let matchesJob = jobText.includes(jobInput);
        let matchesLocation = jobText.includes(locationInput);

        if (matchesJob && matchesLocation) {
            job.style.display = "block";
            found++;
        } else {
            job.style.display = "none";
        }
    });

    document.getElementById("noResults").style.display =
        found === 0 ? "block" : "none";
}

// Apply Now Button
function applyJob(jobName) {
    document.getElementById("selectedJob").value = jobName;

    document.getElementById("application").scrollIntoView({
        behavior: "smooth"
    });
}

// Application Form Submission
document.getElementById("applicationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("applicantName").value;
    let email = document.getElementById("applicantEmail").value;
    let job = document.getElementById("selectedJob").value;

    document.getElementById("formMessage").innerText =
        "Thank you, " + name +
        "! Your application for " + job +
        " has been submitted successfully.";

    alert("Application submitted successfully!");

    this.reset();
});
