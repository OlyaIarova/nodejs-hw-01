import { PATH_DB } from '../constants/contacts.js'; // шлях до файлу бази даних контактів
import fs from 'node:fs/promises'; // модуль для роботи з файловою системою

export const countContacts = async () => {
  try {
    let contacts = [];
    const data = await fs.readFile(PATH_DB, 'utf-8'); // читає вміст файлу бази даних контактів
    contacts = JSON.parse(data.toString()); //перетворює JSON-рядок у масив об'єктів contacts
    const count = contacts.length; //підраховується кількість контактів у масиві contacts і зберігається в змінній count
    return count; //значення count повертається як результат роботи
  } catch (readError) { //виникає помилка при читанні файлу
    throw new Error('Error with generating contacts:  ' + readError.message);
  }
};

console.log(await countContacts()); //(кількість контактів виводиться у консоль.
