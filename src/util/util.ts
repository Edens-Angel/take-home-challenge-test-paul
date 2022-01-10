import { Book, Category, Character, House } from '../service/hero.service';

export const formatName = (item: Category | null) => {
  if (!item) return '';

  if (item.name) return item.name;

  if (item?.hasOwnProperty('aliases')) {
    const charItem = item as Character;
    return charItem.aliases[0];
  }
};

export const getRandomItem = (list: any[]) => {
  return list[Math.floor(Math.random() * list.length)];
};

export const useGetRandomPage = async (url: string): Promise<string> => {
  const categories = ['books', 'characters', 'houses'];
  const randomCategory = getRandomItem(categories);

  const apiUrl = url.concat(`/${randomCategory}`);

  const randomList: any[] = await (await fetch(apiUrl)).json();

  return getRandomItem(randomList).url;
};

export const getType = (item: Category) => {
  if (!item) return item;
  if (item.hasOwnProperty('aliases')) return item as Character;
  if (item.hasOwnProperty('swornMembers')) return item as House;
  if (item.hasOwnProperty('authors')) return item as Book;

  return item;
};
