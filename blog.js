// variables
const title = document.querySelector("#title");
const blog = document.querySelector("#blog");
const create = document.querySelector("#create");
const addButton = document.querySelector(".addToDoBtn");


//* createTodoStore
function createBlogStore(){
  let blogstore = JSON.parse(localStorage.getItem("create"));
  if (blogstore === null) {
    localStorage.setItem("create", JSON.stringify([]));
    return blogstore;
  } else {
    return blogstore;
  }
}
createBlogStore();
//* create Todo
function createBlog() {
    let blogstore = createBlogStore();
    const titlevalue = title.value;
    const blogvalue = blog.value;
    const userblog  = {'title':titlevalue, 'blog':blogvalue};
      

      blogstore.push(userblog);
  
      localStorage.setItem("create", JSON.stringify(blogstore));
  
      displayblog();
      deleteBlog();
      updateblog();
    
  }
  

 //Delete Todo
function deleteBlog() {
  const delButtons = document.querySelectorAll(".delBtn");
  let blogstore = createBlogStore();
  console.log(delButtons);
  delButtons.forEach(function (button, index) {
    button.onclick = function () {
      blogstore.splice(index, 1);
      localStorage.setItem("create", JSON.stringify(blogstore));
      console.log(blogstore);
      displayblog();
      location.reload();
    };
  });
}


//updateTodo
function updateblog() {
  const updateButtons = document.querySelectorAll(".updateBtn");
  let blogstore = createBlogStore();

  updateButtons.forEach(function (button, index) {
    button.onclick = function () {
      const blogtitle = this.parentElement.children[0];
      const blogbody = this.parentElement.children[2];
 
      const updatetitle = prompt(`updateTODO :${blogtitle.innerText}`);
      const updatebody = prompt(`updateTODO :${blogbody.innerText}`);
      //blogstore =(updatetitle,updatebody);
      const userblog  = {'title':updatetitle, 'blog':updatebody};
      

     // blogstore.push(userblog);
     blogstore.splice(index, 1, userblog);
      localStorage.setItem("create", JSON.stringify(blogstore));
      console.log(blogstore);
      displayblog();
      location.reload();
    };
  });
}

//* Read Blog
function displayblog() {
  let blogstore = createBlogStore();

  create.innerHTML = "";

  blogstore.forEach(function (blogitem,itemid) {
    const singleTodo = document.createElement("p");
    const delbtn = document.createElement("button");
    const updatebtn = document.createElement("button");
    
    //let blogstore = JSON.parse(localStorage.getItem("create"));
    
    
    delbtn.innerHTML = "delete";
    delbtn.className = "btn btn-danger delBtn";

    updatebtn.innerHTML = "update";
    updatebtn.className = "btn btn-warning updateBtn";

    singleTodo.innerHTML = `<span>${blogitem['title']}</span><br><span>${blogitem['blog']}</span>`;
    //singleTodo.innerHTML = `<span>${blogitem['blog']}</span>`;
    singleTodo.appendChild(delbtn);
    singleTodo.appendChild(updatebtn);

    delbtn.className = `btn btn-danger delBtn ${itemid} `;

    create.appendChild(singleTodo); //inject each todo within the div of class todos.
  

        
       

    });
}
displayblog();
deleteBlog();
updateblog();
//title.onchange = createBlog;
addButton.onclick = createBlog; 