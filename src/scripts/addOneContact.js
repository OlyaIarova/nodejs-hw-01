import { PATH_DB } from '../constants/contacts.js'; // шлях до файлу бази даних контактів
import fs from 'node:fs/promises'; // модуль для роботи з файловою системою
import { createFakeContact } from '../utils/createFakeContact.js'; //створює фейкові контакти

export const addOneContact = async () => {
  try {
    let contacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8'); //читає вміст файлу бази даних контактів
      contacts = JSON.parse(data.toString()); //перетворює JSON-рядок у масив об'єктів contacts
    } catch (readError) { // помилка при читанні файлу
      throw new Error('Error reading contacts: ' + readError.message);
    }
    contacts.push(createFakeContact()); //до масиву contacts додається новий фейковий контакт
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8'); //запис оновленого масиву контактів у файл
    console.log(//успішне додавання контакту
      `Adding is finished. You added contact to ${PATH_DB}`,
    );
  } catch (error) {//виникає помилка запису контакту
    throw new Error('Error with generating contacts: ' + error);
  }
};

await addOneContact(); //додавання одного нового контакту
