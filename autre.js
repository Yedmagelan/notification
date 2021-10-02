const inserCommentaireData = {
    id: listeCommentaire !== 0 ? listeCommentaire[listeCommentaire.length - 1].id+1:1,
    commentaires: commentaire.value,
};
if(commentaire.value !==""){
    listeCommentaire.push(inserCommentaireData);
    count.innerHTML= listeCommentaire.length;
    message();

}else{

    confirm(" Veuillez commenter svp !");
    commentaire.focus();
}

function message(){
    messages.innerHTML = '';
    listeCommentaire.forEach(listeCommentaire => {
        // Je crée ici une new balise qui va stocker mon commentaire
      const NewCommentaire={
          commentaires: document.createElement("p"),
      }; 
      const newDiv = document.createElement("div");
      for(const [key, value] of Object.entries(NewCommentaire)){
          value.setAttribute('id',`${key}comt${listeCommentaire.id}`);
          
          key == "commentaires" && setAttribute('value', listeCommentaire.commentaires);

          newDiv.appendChild(value);
          messages.appendChild(newDiv);
      }
    });
}


for (const valeur in listeCommentaire) {
    const objet=listeCommentaire[valeur];
    messages.innerHTML= objet.commentaires + "<br>";
}