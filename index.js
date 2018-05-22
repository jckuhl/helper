
function find(keyword) {
    fetch('keywords.json')
        .then(data=> {
            return data.json();
        })
        .then(data=> {
            console.log(data);
        })
        .catch(error=> console.log(error));
}

console.log(process.argv);

find(process.argv[1]);