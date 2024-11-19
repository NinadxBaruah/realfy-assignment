const update_form_container = document.querySelector(".update-form-container");
const update_form_submit = document.querySelector(".update-form-submit"); 

document.querySelector(".update-form-close").addEventListener("click" , () =>{
    update_form_container.style.display = "none";
    document.querySelector("#update-name").value = "";
    document.querySelector("#update-email").value = "";
    document.querySelector("#update-age").value = "";
    document.querySelector("#update-weight").value = "";
    document.querySelector("#update-height").value = "";
    document.querySelector("#update-healthGoals").value = "";
})

function editUser(click_user) {

   
    update_form_container.style.display = "block";

    user_id_to_update = click_user.id.toString();
    // Populate form fields or handle user data
    document.querySelector("#update-name").value = click_user.name;
    document.querySelector("#update-email").value = click_user.email;
    document.querySelector("#update-age").value = click_user.age;
    document.querySelector("#update-weight").value = click_user.weight;
    document.querySelector("#update-height").value = click_user.height;
    document.querySelector("#update-healthGoals").value = click_user.healthGoals;

  console.log(click_user);
};



update_form_submit.addEventListener("submit" , async (e) =>{
  e.preventDefault();
  const update_name = document.querySelector("#update-name").value
  const update_email = document.querySelector("#update-email").value
  const update_age = document.querySelector("#update-age").value
  const update_weight = document.querySelector("#update-weight").value
  const update_height = document.querySelector("#update-height").value
  const update_healthGoals = document.querySelector("#update-healthGoals").value
  
  try {
    const response = await fetch(`http://localhost:3000/users/${user_id_to_update}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: update_name,
            email: update_email,
            age: update_age,
            weight: update_weight,
            height: update_height,
            healthGoals: update_healthGoals
            })
    });

    if(response.ok){
        const data = await response.json();
        console.log(data);

        document.querySelector("#update-name").value = "";
        document.querySelector("#update-email").value = "";
        document.querySelector("#update-age").value = "";
        document.querySelector("#update-weight").value = "";
        document.querySelector("#update-height").value = "";
        document.querySelector("#update-healthGoals").value = "";
        update_form_container.style.display = "none";
        document.getElementById("userCards").innerHTML = "";
        createUserCards();
    }
  } catch (error) {
    console.log(error);
  }

})