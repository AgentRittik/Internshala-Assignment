const fs = require('fs');

const capitalizeSentences = (text) => {
  return text.replace(/(^|[.!?]\s+)([a-z])/g, (match, separator, group) => {
    return separator + group.toUpperCase();
  });
};

const removeExtraSpaces = (text) => {
  return text.replace(/ +/g, ' ').trim();
};

const processFile = (inputFilePath, outputFilePath) => {
  try {
    // Read the content of the input file
    const fileContent = fs.readFileSync(inputFilePath, 'utf-8');

    // Capitalize the first letter of each sentence
    const capitalizedText = capitalizeSentences(fileContent);

    // Remove extra spaces
    const cleanedText = removeExtraSpaces(capitalizedText);

    // Write the result to the output file
    fs.writeFileSync(outputFilePath, cleanedText);

    console.log('File processing completed successfully.');
  } catch (err) {
    console.error('Error processing the file:', err.message);
  }
};

// Replace 'input.txt' and 'output.txt' with your file paths
const inputFilePath = 'input.txt';
const outputFilePath = `${__dirname}/output.txt`;

console.log(__dirname);
processFile(inputFilePath, outputFilePath);
