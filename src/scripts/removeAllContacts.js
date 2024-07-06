import { PATH_DB } from '../constants/contacts.js'; //шлях до файлу бази даних контактів
import fs from 'node:fs/promises'; //модуль для роботи з файловою системою

export const removeAllContacts = async () => {
  try {
    let contacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8'); //запис оновленого масиву контактів у файл
  } catch (error) { //виникає помилка
    throw new Error('Error clearing contacts:' + error);
  }
};
await removeAllContacts(); //виконання операції очищення файлу бази даних контактів
