var getUserRepos = function() {
    // logs the function call 
    //console.log("function was called");

    fetch("https://api.github.com/users/octocat/repos");

  };
  
  getUserRepos();