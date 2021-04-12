const createAllCards = require('./profiles');

const generatePage = manager => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile Generator</title>
  <link rel="stylesheet" href="./style.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
  </head>
<body>
<!-- header -->
    <header class="d-flex bg-dark text-light justify-content-center"><h1>My Team</h1></header>
    <!-- main -->
    <main class = "container justify-content-center">
        <div class="mt-5 row justify-content-around">
            <div class = "card col-3 m-2">
                <div class="bg-dark text-light card-header">
                    <h2 class= "text-light">${manager.name}</h2>
                    <h2 class= "text-light"><i class="fas fa-mug-hot"></i>  ${manager.getRole()}</h2>
                </div>
                <div class="bg-light card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Employee ID: ${manager.getId()} </li>
                        <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a> </li>
                        <li class="list-group-item">Office #: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
           ${createAllCards(manager.teamMembers)}
        </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  
</body>
</html>
`
};

module.exports = generatePage;