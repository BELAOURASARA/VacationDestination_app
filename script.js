(function(){
    "use strict";
    const dest_detail_form=document.querySelector("#destination_details_form");
    dest_detail_form.addEventListener("submit", handleFormSubmit);
    function handleFormSubmit(event){
        event.preventDefault();

        //get the values of the inputs
        const name=event.target.elements["name"].value;
        const location=event.target.elements["location"].value;
        const photo=event.target.elements["photo"].value;
        const description=event.target.elements["description"].value;
        
        //clear out the form feilds
        for(let i=0; i<dest_detail_form.length;i++){
            dest_detail_form.elements[i].value="";
        }

        //create the new card
        const destCard= createCard(name,location,photo,description);
        
        //check if we have others elements in the wish list
        const wishListContainer= document.querySelector("#destinations_container");
        if(wishListContainer.children.length===0){
            document.querySelector("#title").innerHTML = "My Wish List";
        }

        //add the card to the html document
        document.getElementById("destinations_container").appendChild(destCard);
       
    }



    function createCard(name,location,picURL,description){
        const card= document.createElement("div");
        card.className="card";

        const img=document.createElement("img");
        img.setAttribute("alt",name);
        const constantPhotoURL="images/signpost.jpg";
        if(picURL.length===0){
            img.setAttribute("src",constantPhotoURL);
        }
        else{
            img.setAttribute("src",picURL);
        }
        card.appendChild(img);

        const cardBody= document.createElement("div");
        cardBody.className="card-body";

        const h3=document.createElement("h3");
        h3.innerHTML=name;
        cardBody.appendChild(h3);

        const h4=document.createElement("h4");
        h4.innerHTML=location;
        cardBody.appendChild(h4);

        if (description.length!==0){
            const desc=document.createElement("p");
            desc.className="card-text";
            desc.innerHTML=description;
            cardBody.appendChild(desc);
        }
        
        const btn=document.createElement("button");
        btn.innerHTML="Remove";
        btn.addEventListener("click", removeDestination);
        cardBody.appendChild(btn);

        card.appendChild(cardBody);
        return card;
    }



    function removeDestination(event){
        const card= event.target.parentElement.parentElement;
        card.remove();
    }


})();