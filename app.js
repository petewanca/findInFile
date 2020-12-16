const fs = require('fs');

fs.readdir('./dest', 'utf-8', (error, data) => {
    if (error) console.log(error);

    data.forEach(file => {
        fs.readFile(`./dest/${file}`, 'utf-8', (error, data) => {
            if (error) console.log(error);

            if (data.includes(process.argv[2])) console.log(file);
        });
    });
});
