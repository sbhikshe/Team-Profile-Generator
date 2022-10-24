const fs = require('fs');

let markup_begin = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
  <title>Our Team</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid bg-danger">
  <h1 class="text-light">My Team</h1>
  </div>

  <div class="container-fluid row justify-content-around" id="employees">
`;

/* Card added in the middle for every employee */
/* in generateMarkup() - from the team[] */

let markup_end = `
</div>
</body>
<script src="https://kit.fontawesome.com/c9ec3b90de.js" crossorigin="anonymous"></script>
</html>
`;

let markup = "";

function generateMarkup(team) {
  if(team) {
    console.log("Generating HTML ...");
    markup += markup_begin;
    for (member of team) {
      /* add the html with the template literals */
      let specificMarkup = "";
      let specificIcon = "";
      switch (member.getRole()) {
        case "Manager": specificMarkup += `<p class="card-text"><b>Ph:</b> ${member.getNumber()}</p>`;
                        specificIcon = `<i class="fa-solid fa-mug-hot"></i>`;
                        break;
        case "Engineer": let username = member.getGithub();
                        specificMarkup += `<p class="card-text"><b>Github:</b><a href="https://github.com/${username}">${username}</a></p>`;
                        specificIcon = `<i class="fa-solid fa-glasses"></i>`;
                        break;
        case "Intern":  specificMarkup += `<p class="card-text"><b>School:</b> ${member.getSchool()}</p>`;
                        specificIcon = `<i class="fa-solid fa-graduation-cap"></i>`;
                        break;
        default: /* do nothing */
      };

      markup +=  `
      <div id="employee" class="card mb-3" style="max-width: 18rem;">
        <div class="card-header bg-primary text-white">
        <h5>${member.employee.getName()}</h5>
        <div class="container row">
          ${specificIcon}
          <h6 class="card-title">${member.getRole()}</h6>
        </div>
        </div>
        <div class="card-body bg-light text-primary">
          <p class="card-text"><b>ID:</b> ${member.employee.getId()}</p>
          <p class="card-text"><b>Email:</b><a href="mailto:${member.employee.getEmail()}">${member.employee.getEmail()}</a></p>
          ${specificMarkup}
        </div>
      </div>           
      `;
    }
    markup += markup_end;
    writeToFile();
  }
}

function writeToFile() {
  fs.writeFile("./dist/index.html", markup, function(err){
    if(err) {
      console.log("error writing to index.html" + err);
    } else {
      console.log("generated index.html!");
    }
  })
}

module.exports = {
  generateMarkup
}