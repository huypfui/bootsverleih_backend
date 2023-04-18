import fs from "fs"

const DB_PATH = "./db.json" // da wir DB_PATH als konfigurations Parameter nutzen und nciht mehr verändern schreiben wir in auch in Uppercase = konvention und hat keinerlei Funktion

export function save(item) {
	return new Promise((resolve, reject) => {
		load().then((data) => {
			data.push(item)
			fs.writeFile(DB_PATH, JSON.stringify(data), (err) => {
				if (err) reject(err)
				else {
					resolve(data)
				}
			})
		})
	})
}

// The function takes an item as an argument that needs to be added to the JSON file.

// It returns a Promise that will resolve with the updated data if the operation is successful, or reject with an error if it fails.

// The function first calls the load() function to load the existing data from the JSON file.

// The load() function returns a Promise that resolves with the parsed data array from the JSON file.

// Once the data is loaded, the function appends the new item to the existing data by pushing it onto the data array.

// The updated data array is then written back to the JSON file using the fs.writeFile() method. This method takes three arguments:

// The path of the file to write to (DB_PATH in this case)
// The data to write, which needs to be a string. The JSON.stringify() method is used to convert the data array to a JSON string.
// A callback function that will be called after the write operation completes. If the operation is successful, the callback will be called with a null error object and no other parameters. If there is an error, the callback will be called with the error object.
// If there is an error during the write operation, the Promise will be rejected with the error object.

// If the write operation is successful, the Promise will be resolved with the updated data array.

// Overall, this save() function loads the existing data from the JSON file, appends a new item to it, writes the updated data back to the file, and returns a Promise with the updated data or an error if the write operation fails.

export function load() {
	return new Promise((resolve, reject) => {
		fs.readFile(DB_PATH, "utf8", (err, data) => {
			if (err) reject(err)
			else {
				resolve(JSON.parse(data))
			}
		})
	})
}

// The load() function reads the data from the JSON file located at DB_PATH file path, and returns it as a Promise.

// Here's how it works:

// The function returns a Promise that will resolve with the parsed data if the read operation is successful, or reject with an error if it fails.

// The function uses the fs.readFile() method to read the contents of the JSON file asynchronously. This method takes three arguments:

// The path of the file to read (DB_PATH in this case)
// The encoding to use ('utf8' in this case, to read the file as a text string instead of a binary buffer)
// A callback function that will be called after the read operation completes. If the operation is successful, the callback will be called with null as the first parameter, and the file contents as the second parameter. If there is an error, the callback will be called with the error object.
// If there is an error during the read operation, the Promise will be rejected with the error object.

// If the read operation is successful, the Promise will be resolved with the parsed data array, which is obtained by calling JSON.parse() on the file contents string.

// Overall, this load() function reads the contents of the JSON file located at DB_PATH file path, parses it into a data array, and returns a Promise with the data array or an error if the read operation fails.
