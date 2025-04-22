const fs = require('fs');

// Path to package.json
const packagePath = './package.json';

// Read package.json
fs.readFile(packagePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading package.json:', err);
        return;
    }

    // Parse the JSON data
    let packageJson = JSON.parse(data);

    // Update the fields
    packageJson.main = packageJson.main.replace('src', 'build');
    packageJson.types = packageJson.types.replace('src', 'build');

    // Write the updated JSON back to package.json
    fs.writeFile(packagePath, JSON.stringify(packageJson, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing package.json:', err);
        } else {
            console.log('package.json has been updated.');
        }
    });
});
