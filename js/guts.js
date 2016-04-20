function addContacts(){
    var Ross = {location:"New York City, NY", picture:"http://www.neontommy.com/sites/default/files/Screen%20Shot%202015-02-23%20at%208.18.42%20PM.png?1424753341",email:"rossgeller@gmail.com"};
    var Phoebe = {location:"New York City, NY", picture:"http://lovelace-media.imgix.net/uploads/501/eac96b80-b144-0132-466e-0e9062a7590a.jpg?w=684&h=513&fit=crop&crop=faces&auto=format&q=70",email:"feebs@gmail.com"};
    var Rachel = {location:"New York City, NY", picture:"http://www.wearysloth.com/Gallery/ActorsA/tve442-19941020-444.jpg",email:"rachelgreen@gmail.com"};
    var Monica = {location:"New York City, NY", picture:"https://pbs.twimg.com/profile_images/459181888067092480/4UU06Zxj.jpeg",email:"monicageller@gmail.com"};
    var Joey = {location:"New York City, NY", picture:"https://41.media.tumblr.com/01c0ff18cae8504197ab29ca8ea82096/tumblr_mihj8aMYOw1s5o85mo1_250.png",email:"babykangaroo@yahoo.com"};
    var Chandler = {location:"New York City, NY", picture:"https://pbs.twimg.com/profile_images/2083545003/chandler-bing.jpg",email:"chandlerbing@gmail.com"};
    return {
        Ross:Ross,
        Phoebe:Phoebe,
        Rachel:Rachel,
        Monica:Monica,
        Joey:Joey,
        Chandler:Chandler
    };
}

function searchContacts(contacts, query) {
    var results = {};
    for(var contactName in contacts){
        var value = contacts[contactName];
        for(var property in value){
            var y = value[property];
            var includes = y.includes(query)
            var nameMatch = contactName.includes(query)
            if(includes) {
                results[contactName] = value 
            }
            if(nameMatch) {
                results[contactName] = value
            }
        }
    }
    
    return results;
}

console.log(addContacts())