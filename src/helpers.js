

export const safeAjax = async (url,settings) =>  {
   return await fetch(url,settings || null).then(response => response.json())
};
export const sortForObj  = (obj,increase,property) => {
   const sortedObj = obj.sort((a,b) => {
      if (increase) {
         if (a[property] > b[property]) //сортируем строки по возрастанию
            return -1
         if (a[property] < b[property])
            return 1
         return 0 // Никакой сортировки
      } else {
         if (a[property] < b[property]) //сортируем строки по возрастанию
            return -1
         if (a[property] > b[property])
            return 1
         return 0 // Никакой сортировки
      }
   });
   return sortedObj
};
