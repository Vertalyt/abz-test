


export async function requestPositions() {
    const link = `${import.meta.env.VITE_URL_SERVER}/positions`;
    try {
        const response = await fetch(link)
        if(response.ok) { // Проверяем, успешен ли запрос (статус 200-299)
            const data = await response.json(); // Парсим тело ответа в формате JSON
            return data.positions
        } else {
            // Если ответ сервера не в диапазоне 200-299, бросаем ошибку
            throw new Error('Ошибка при получении данных');
        }
      } 
      catch (error) {
        console.error(error); // Выводим ошибку в консоль
        throw error; // Пробрасываем ошибку дальше, чтобы обработать её в другом месте кода, если нужно
     }
}

export async function requestUsers(link = null) {
    const defaultLink = `${import.meta.env.VITE_URL_SERVER}/users?page=1&count=6`;
    try {
        const response = await fetch(link || defaultLink)
        if(response.ok) { // Проверяем, успешен ли запрос (статус 200-299)
            const data = await response.json(); // Парсим тело ответа в формате JSON
            return data
        } else {
            // Если ответ сервера не в диапазоне 200-299, бросаем ошибку
            throw new Error('Ошибка при получении данных');
        }
      } 
      catch (error) {
        console.error(error); // Выводим ошибку в консоль
        throw error; // Пробрасываем ошибку дальше, чтобы обработать её в другом месте кода, если нужно
     }
}

async function requestToken() {
    const link = `${import.meta.env.VITE_URL_SERVER}/token`;
    try {
        const response = await fetch(link)
        if(response.ok) { // Проверяем, успешен ли запрос (статус 200-299)
            const data = await response.json(); // Парсим тело ответа в формате JSON
            return data.token
        } else {
            // Если ответ сервера не в диапазоне 200-299, бросаем ошибку
            throw new Error('Ошибка при получении данных');
        }
      } 
      catch (error) {
        console.error(error); // Выводим ошибку в консоль
        throw error; // Пробрасываем ошибку дальше, чтобы обработать её в другом месте кода, если нужно
     }
}

function generateFormData(date) {
 const formData = new FormData(); // Создание объекта FormData

 // Добавление других данных к FormData
formData.append('position_id', date.position_id);
formData.append('name', date.name);
formData.append('email', date.email);
formData.append('phone', date.phone);
formData.append('photo', date.avatar);

return formData
}

export async function addUser(date) {
    const link = `${import.meta.env.VITE_URL_SERVER}/users`;

  const formData = generateFormData(date)

    try {
        const token = await requestToken()
        if(token) {
            const response = await fetch(link, { 
                method: 'POST', 
                body: formData, 
                headers: { 'Token': token, }, })
            if(response.ok) {
                const data = await response.json();
                return data
            } else {
                // Если ответ сервера не в диапазоне 200-299, бросаем ошибку
                throw new Error('Ошибка при получении данных');
            }
        }
      } 
      catch (error) {
        console.error(error); // Выводим ошибку в консоль
        throw error; // Пробрасываем ошибку дальше, чтобы обработать её в другом месте кода, если нужно
     }
}


