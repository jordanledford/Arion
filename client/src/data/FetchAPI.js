/**
 * Created by j on 1/30/17.
 */
const options = {
    method: 'GET',
    body: 'json',
    headers: {}
};

export function fetchUserDataFromInstagram(username, ACCESS_TOKEN) {
    fetch(`https://api.instagram.com/v1/users/${username}/?access_token=${ACCESS_TOKEN}`, options)
        .then(function (res) {
            if (!res.data.id){
                console.log(`couldn't find that user!!!`)
                searchForInstagramUser(username, ACCESS_TOKEN);
            }
            console.log(res);
            return res.json();
        });

}

export function searchForInstagramUser(username, ACCESS_TOKEN){
    fetch(`https://api.instagram.com/v1/users/search?q=${username}&access_token=${ACCESS_TOKEN}`, options)
        .then( function(res){
            return res.json();
        });
}