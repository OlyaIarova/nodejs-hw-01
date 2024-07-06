import { PATH_DB } from '../constants/contacts.js'; //шлях до файлу бази даних контактів
import fs from 'node:fs/promises'; //модуль для роботи з файловою системою

export const removeLastContact = async () => {
  try {
    let contacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8'); // читає вміст файлу бази даних контактів
      contacts = JSON.parse(data.toString()); //перетворює JSON-рядок у масив об'єктів contacts
    } catch (readError) { // помилка при читанні файлу
      throw new Error('Error reading contacts: ' + readError.message);
    }
    const updatedContacts = contacts.pop(); // Видаляє останній контакт
    console.log(updatedContacts);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8'); //запис оновленого масиву контактів у файл
  } catch (error) {  //виникає помилка
    throw new Error('Error removing the last contact:' + error);
  }
};

removeLastContact(); //виклик функції для видалення  останнього контакту у списку
