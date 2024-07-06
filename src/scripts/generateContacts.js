import { PATH_DB } from '../constants/contacts.js'; //шлях до файлу бази даних контактів
import fs from 'node:fs/promises'; //модуль для роботи з файловою системою
import { createFakeContact } from '../utils/createFakeContact.js'; //створює фейкові контакти

const generateContacts = async (number) => {
  try {
    let contacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8'); // читає вміст файлу бази даних контактів
      contacts = JSON.parse(data.toString()); //перетворює JSON-рядок у масив об'єктів contacts
    } catch (readError) { // помилка при читанні файлу
      throw new Error('Error reading contacts: ' + readError.message);
    }
    for (let i = 0; i < number; i += 1) { //створює задану кількість нових контактів та додає їх до масиву контактів
      contacts.push(createFakeContact());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8'); //запис оновленого масиву контактів у файл
    console.log( //успішне додавання контактів
      `Adding is finished. You added ${number} contacts to ${PATH_DB}`,
    );
  } catch (error) { //виникає помилка запису контакту
    throw new Error('Error with generating contacts: ' + error);
  }
};

await generateContacts(5); //виклик функції для генерації 5 нових контактів
