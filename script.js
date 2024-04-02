document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('nav a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const targetId = tab.getAttribute('href').substring(1);
            tabContents.forEach(content => {
                if (content.id === targetId) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
    function submitQuestion() {
        var userQuestion = document.getElementById("userQuestion").value;
        console.log("Enter two teams to predict series outcome:", userQuestion);
        // You can add additional code here to process the user's question as needed.
    }

    const questionInput = document.getElementById("userQuestion");
    const submitButton = document.querySelector('.question-box button');

    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        submitQuestion();
    });
});
