function generateHTML(teamName, empArr) {
    let generatedHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
<header>
    <h1>${teamName}</h1>
</header>
<main class="flex-container">
`;

    empArr.forEach(emp => {
        generatedHTML += `<div class="${emp.getRole().toLowerCase()}">
<h3>${emp.getName()}</h3><br>
<h3>${emp.getRole()}</h3><br>
<p>ID: ${emp.empID}</p><br>
<p>Email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></p><br>\n`;

        switch (emp.getRole()) {
            case 'Manager':
                generatedHTML += `<p>Office: ${emp.getOfficeNum()}</p>`;
                break;
            case 'Engineer':
                generatedHTML += `<p>GitHub: <a href="https://github.com/${emp.getGitHub()}" target="_blank">${emp.getGitHub()}</a></p>`;
                break;
            case 'Intern':
                generatedHTML += `<p>School: ${emp.getSchool()}</p>`;
                break;
        }
        generatedHTML += `</div>\n`;
    });

    generatedHTML += `</main>
</body>
</html>`;


    return generatedHTML;
}

module.exports = generateHTML;