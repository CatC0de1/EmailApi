import hbs from 'handlebars';
import fs from 'fs';
import path from 'path';

const renderTemplate = (templateName: string, content: object) => {
  const templatePath = path.join(__dirname, '../templates', `${templateName}.hbs`);
  const source = fs.readFileSync(templatePath, 'utf8');

  const partialsDir = path.join(__dirname, '../templates/partials');
  fs.readdirSync(partialsDir).forEach((filename) => {
    const partialPath = path.join(partialsDir, filename);
    const partialName = path.parse(filename).name;
    const partialContent = fs.readFileSync(partialPath, 'utf8');
    hbs.registerPartial(partialName, partialContent);
  });

  const template = hbs.compile(source);
  return template(content);
}

export default renderTemplate;
