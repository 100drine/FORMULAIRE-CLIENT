function jeclick(index){

    var requete = new XMLHttpRequest();
    requete.open("GET", "client.json")
    requete.onload = function () {
        
        console.log(requete.responseText);
        
        var data = JSON.parse(requete.responseText);


        
        console.log(index); 
        console.log(data[index].nom);
        $("#cli").text(data[index].nom + data[index].prenom + data[index].age + data[index].profession + data[index].mail + data[index].tel);
        
        
    }
requete.send();

}











/*$(document).ready(function () {
            $("#submit").click(function {
                nom: $("nom").val(),
            })
        } <
*/
