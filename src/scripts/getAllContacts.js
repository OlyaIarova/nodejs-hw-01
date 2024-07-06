import { PATH_DB } from '../constants/contacts.js'; // шлях до файлу бази даних контактів
import fs from 'node:fs/promises'; // модуль для роботи з файловою системою

export const getAllContacts = async () => {
  try {
    let contacts = [];
    const data = await fs.readFile(PATH_DB, 'utf-8'); // читає вміст файлу бази даних контактів
    contacts = JSON.parse(data.toString()); //перетворює JSON-рядок у масив об'єктів contacts
    return contacts; //повертається масив контактів як результат роботи
  } catch (readError) {
    throw new Error('Failed to get contacts: ' + readError.message);
  }
};

console.log(await getAllContacts()); //масив контактів виводиться у консоль.
