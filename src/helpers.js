export const safeAjax = async (url,settings) =>  {
   return await fetch(url,settings || null).then(response => response.json())
};
