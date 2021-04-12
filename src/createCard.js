const createCard = employee => {
  if(employee.getRole() ==='Engineer') {
      return `
      <div class = "card col-3 m-2">
          <div class="bg-dark text-light card-header">
              <h2 class= "text-light">${employee.name}</h2>
              <h2 class= "text-light"><i class="fas fa-glasses"></i>  ${employee.getRole()}</h2>
          </div>
          <div class="bg-light card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Employee ID: ${employee.getId()} </li>
                  <li class="list-group-item">Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a> </li>
                  <li class="list-group-item">Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a> </li>
              </ul>
          </div>
      </div>
      `;
  }
  if(employee.getRole() ==='Intern') {
      return `
      <div class = "card col-3 m-2">
          <div class="bg-dark text-light card-header">
              <h2 class= "text-light">${employee.name}</h2>
              <h2 class= "text-light"><i class="fas fa-user-graduate"></i>  ${employee.getRole()}</h2>
          </div>
          <div class="bg-light card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Employee ID: ${employee.getId()} </li>
                  <li class="list-group-item">Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a> </li>
                  <li class="list-group-item">School: ${employee.getSchool()}</li>
              </ul>
          </div>
      </div>
      `;
  }
}


module.exports = createCard;