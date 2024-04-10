window._config = {
    cognito: {
        userPoolId: 'us-east-2_kDcVFpn9S', // e.g. us-east-2_uXboG5pAb
        userPoolClientId: '41ltsq7q2ncijdl2gei3kpgfe4', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: 'us-east-2' // e.g. us-east-2
    },
    api: {
        invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};

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
