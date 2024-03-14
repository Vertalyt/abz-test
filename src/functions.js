import * as Yup from 'yup'

// правила фильтрации
export const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Минимум 2 символа')
    .max(60, 'Максимум 60 символов')
    .required('Введіть логін'),
  email: Yup.string().email('Введіть емаил').trim().required('Введіть емаил'),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Номер должен начинаться с +380 и состоять из 12 цифр')
    .required('Введите номер'),
  position_id: Yup.string().required('Выберите Профессию'),
  avatar: Yup.mixed()
    .required('Выберите файл') // Поле должно быть обязательным
    .test('fileSize', 'Размер файла должен быть не более 5 MB', (value) => {
        return value && value.size <= 5 * 1024 * 1024;
    })
    .test('fileType', 'Допустимые типы файлов: JPEG', (value) => {
        return value && ['image/jpeg'].includes(value.type);
    })
    .test('minDimensions', 'Минимальный размер изображения должен быть 70x70 пикселей', async (value) => {
        if (!value) return false; // Проверяем, что значение присутствует
        const file = value;
        const image = new Image();
        // Создаем promise, чтобы дождаться загрузки изображения
        const loaded = new Promise((resolve, reject) => {
            image.onload = resolve;
            image.onerror = reject;
        });
        image.src = URL.createObjectURL(file); // Создаем URL для изображения
        // Дожидаемся загрузки изображения
        await loaded;
        // Проверяем размеры изображения
        return image.width >= 70 && image.height >= 70;
    })

})
