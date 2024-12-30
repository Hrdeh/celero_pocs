const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
const fs = require('fs-extra');
const path = require('path');

async function generatePDF() {
  // Load the JSON data
  const data = await fs.readJson(path.join(__dirname, 'data/statement_data.json'));

  // Load the HTML template
  const templateHtml = await fs.readFile(path.join(__dirname, 'template.html'), 'utf8');

  // Compile the template with Handlebars
  const template = handlebars.compile(templateHtml);
  const finalHtml = template(data);

  // Launch Puppeteer and generate the PDF
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(finalHtml);
  await page.pdf({ path: 'output/output.pdf', format: 'A4' });

  await browser.close();
  console.log('PDF generated successfully!');
}

generatePDF().catch(console.error);