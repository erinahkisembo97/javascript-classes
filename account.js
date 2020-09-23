//Create
const username =  document.querySelector("#username");
const usernamelogin =  document.querySelector("#usernamelogin");
const password =  document.querySelector("#password");
const passwordlogin =  document.querySelector("#passwordlogin");
const firstname =  document.querySelector("#firstname");
const lastname =  document.querySelector("#lastname");
const submit_user = document.querySelector("#submit");

function createUserStore(){
    let accountArray = JSON.parse(localStorage.getItem("submit_user"));

    if(accountArray === null){
        localStorage.setItem("submit_user", JSON.stringify([]));
        return accountArray;
    }
    else{
        return accountArray;
    }
}
createUserStore();

//* create Todo
function createUser() {
    let accountArray = createUserStore();
      const username_value = username.value;
      const password_value = password.value;
      const firstname_value = firstname.value;
      const lastname_value = lastname.value;

      //accountArray.push(username1,password1,firstname1,lastname1);
      const useraccount  = {'username1':username_value, 'password1':password_value,'firstname1':firstname_value,'lastname1':lastname_value};
      accountArray.push(useraccount);

      localStorage.setItem("submit_user", JSON.stringify(accountArray));

  }

//loginUser
function loginUser(){
    let accountArray = JSON.parse(localStorage.getItem("submit_user"));
    const loginUsername = usernamelogin.value;
    const loginpassword = passwordlogin.value;
    for (let index = 0; index < accountArray.length; index++){
        const element = accountArray[index];

        if (loginUsername === element['username1'] && loginpassword === element['password1']) {
            alert("Login successful");
            //window.location.replace('E:\Tunga\index.html');
            //location.href ="E:\Tunga\index.html";
            break;
        }
        else{
            alert("Wrong username or password");
            break;
        }
    }
}
