# POC of Global Statement Generation

## Overview

This application proves that JSON data can be converted to a PDF file. The PDF will be styled using a 
This application generates a PDF document from an HTML template and JSON data using Puppeteer and Handlebars. The application reads data from a JSON file, compiles it with an HTML template using Handlebars, and then uses Puppeteer to render the HTML and generate a PDF.

## Features

- Reads data from a JSON file.
- Uses Handlebars to compile an HTML template with the JSON data.
- Generates a PDF from the compiled HTML using Puppeteer.
- Outputs the generated PDF to a specified directory.

## Why Puppeteer and Handlebars Were Chosen

### Puppeteer

Puppeteer is a Node library that provides a high-level API to control Chrome or Chromium over the DevTools Protocol. It is used for various purposes, including web scraping, automated testing, and generating PDFs from HTML content. Puppeteer was chosen for this application because:

- **Rendering Accuracy**: Puppeteer uses a real browser to render the HTML, ensuring that the generated PDF looks exactly like it would in a browser.
- **Flexibility**: Puppeteer provides extensive control over the rendering process, allowing for customization of the PDF output.
- **Ease of Use**: Puppeteer has a straightforward API that makes it easy to set up and use for generating PDFs.

### Handlebars

Handlebars is a popular templating engine that allows for dynamic content generation by combining templates with data. It was chosen for this application because:

- **Simplicity**: Handlebars provides a simple and intuitive syntax for defining templates and inserting data.
- **Separation of Concerns**: Handlebars allows for a clear separation between the HTML structure (template) and the data, making the code more maintainable.
- **Flexibility**: Handlebars supports various features like loops and conditionals, making it suitable for generating complex HTML content.

