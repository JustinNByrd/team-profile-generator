function generateHTML(teamName, empArr) {
    let generatedHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>
<body>
<header>
    <h1>${teamName}</h1>
</header>
<main>
`;

    empArr.forEach(emp => {
        generatedHTML += `<div class="${emp.constructor.name.toLowerCase()}">
<h3>${emp.name}</h3>
<h4>${emp.constructor.name}</h4>
<p>ID: ${emp.empID}</p>
<p>Email: <a href="mailto:${emp.email}">${emp.email}</a></p>\n`;

        switch (emp.constructor.name) {
            case 'Manager':
                generatedHTML += `<p>Office: ${emp.officeNum}</p>`;
                break;
            case 'Engineer':
                generatedHTML += `<p>GitHub: <a href="https://github.com/${emp.gitHubUsername}" target="_blank">${emp.gitHubUsername}</a></p>`;
                break;
            case 'Intern':
                generatedHTML += `<p>School: ${emp.school}</p>`;
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