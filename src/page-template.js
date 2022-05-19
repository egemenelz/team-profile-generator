const generateManagerInfo = managerInfo =>{
    return `
    <div class="con1 bg-light box">
            <div class="header-box">
                <p>Employee Name</p>
                <p>Employee Role</p>
            </div>
            <div class="con2 m-3">
                <div class="small-box">
                    <p>ID: Egemen Eliz</p>
                </div>
                <div class="small-box">
                    <p>Email : egemenelz@gmail.com</p>
                </div>
                <div class="small-box">
                    <p>Office Number: 1</p>
                </div>
            </div>
        </div>
        `
}

module.exports = templateData => {
    console.log(templateData);
    // this will create three variables based on data in templateData
    const { projects, about, ...header } = templateData;
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
      <main class="container my-5 test">
      ${generateAbout(about)}
      ${generateProjects(projects)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
      </footer>
    </body>
    </html>
    `;
};