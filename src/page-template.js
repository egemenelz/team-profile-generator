/**
 * Every role has unique definitaions,
 * this is how we can choose what to do add when we choose different kind role
 * @param {data is generate in index.js} data 
 * @returns 
 */
const roleGenerate = data => {
    if(data.getRole() === "Manager"){
        return `Office No: ${data.getOfficeNumber()}`
    }else if (data.getRole() === "Engineer"){
        return `GitHub: <a href="https://github.com/${data.getGithub()}"
        target="_blank">${data.getGithub()}</a>`
    }else if (data.getRole() === "Intern"){
        return `School: ${data.getSchool()}`
    }
}

/**
 * This is generates the card box
 * if there is no data it will return empty string
 * otherwise, will add data specified locations
 * @param {data is generated in index.js} data 
 * @returns 
 */
const generateCard = data => {

    if(!data){
        return ' ';
    }
    return `
    <div class="con1 bg-light box">
            <div class="header-box">
                <h3>${data.getName()}</h3>
                <h4>${data.getRole()}</h4>
            </div>
            <div class="con2 m-3">
                <div class="small-box">
                    <p>ID: ${data.getId()}</p>
                </div>
                <div class="small-box">
                    <p>Email : <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></p>
                </div>
                <div class="small-box">
                    ${roleGenerate(data)}
                </div>
            </div>
        </div>
        `
}
/**
 * This is help us to generate HTML file, 
 * We will have array as data from index.js and we have to run thru and generate a card how many we need
 * @param {data is generated in index.js} templateData 
 * @returns 
 */
module.exports = templateData => {
    
    var newCard = '';
    for (let i = 0; i < templateData.length; i++) {
        newCard += generateCard(templateData[i]);
        
    }
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
    <header>
        <div class="py-3">
            <h1 class="page-title text-light py-2 px-3">Scrum Team</h1>
        </div>
    </header>
    <main class="container my-5 flex-row justify-space-between "> 
      ${newCard}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Egemen Eliz</h3>
      </footer>
    </body>
    </html>
    `;
};