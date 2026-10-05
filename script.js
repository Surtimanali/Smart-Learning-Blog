// Scroll to blogs
function scrollToBlogs() {
    document.getElementById("blogs").scrollIntoView({
        behavior: "smooth"
    });
}


// Blog content
const blogs = {
    1: {
        title: "Study Smart, Not Hard: 7 Effective Study Techniques",
        content:
            "Effective studying is not only about spending long hours with books. " +
            "Students can improve their learning by using active recall, spaced repetition, " +
            "the Pomodoro technique, note-making, practice questions, teaching others, " +
            "and taking short breaks. These techniques can make study sessions more focused and productive."
    },

    2: {
        title: "How to Create a Study Timetable That Works",
        content:
            "A good study timetable should be realistic and flexible. " +
            "First, list all subjects and topics that need to be completed. " +
            "Give more time to difficult subjects and include short breaks. " +
            "Students should also keep time for revision and practice. " +
            "Following a consistent timetable can make studying more organized."
    },

    3: {
        title: "5 Ways to Prepare for Exams Effectively",
        content:
            "Students can prepare effectively by understanding the syllabus, " +
            "creating a revision plan, practicing previous questions, " +
            "making short notes and managing exam time. " +
            "Regular revision and sufficient sleep can also help students remain focused during examinations."
    },

    4: {
        title: "How AI Can Help Students in Their Studies",
        content:
            "Artificial Intelligence can be used as a learning support tool. " +
            "Students can use AI to get explanations of difficult concepts, " +
            "generate practice questions, summarize information and receive programming help. " +
            "However, students should verify information and use AI to support learning rather than replace their own understanding."
    }
};


// Display blog
function showBlog(number) {

    document.getElementById("modalTitle").innerText =
        blogs[number].title;

    document.getElementById("modalContent").innerText =
        blogs[number].content;

    document.getElementById("blogModal").style.display = "block";
}


// Close blog
function closeBlog() {
    document.getElementById("blogModal").style.display = "none";
}


// Close modal when clicking outside it
window.onclick = function(event) {

    const modal = document.getElementById("blogModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
};


// Contact form
function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("formMessage").innerText =
        "Thank you, " + name + "! Your message has been submitted.";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}