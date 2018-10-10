const team = [
]

$("#team").ready(buildTeam);

function buildTeam() {
    let team_output = "";
    team.forEach(person => {
        let temp = $("#person-template").html(); // Carica template per persona
        Object.keys(person).filter(k => k != "social").forEach(k => temp = temp.replace(`{${k}}`, person[k])); // Sostituisci i placeholder con i valori reali
        let social = person["social"]; // Prendi lista dei social
        let social_out = "";
        Object.keys(social).filter(k => social[k] != null).forEach(k => { // Filtra social nulli
            let social_temp = $("#social-template").html(); // Carica template
            social_temp = social_temp.replace("{social}", k).replace("{url}", social[k]); // Sostituisci placeholder
            social_out += social_temp; // Aggiungi ad html
        })
        temp = temp.replace("{social-items}", social_out); // Carica lista social
        team_output += temp; // Aggiungi persona ad html finale     
    });
    $("#team").html(team_output);
}