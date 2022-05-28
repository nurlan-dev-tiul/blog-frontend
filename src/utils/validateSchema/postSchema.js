import * as yup from "yup";

// ! Здесь мы описываем схему валидации нашей формы
export const CreatePostSchema = yup.object().shape({
    title: yup.string()
        .required('Обязательное поле (Вы не можете оставить поле пустым)')
        .max(100, 'Должно быть не более 100 символов')
        .min(5, 'Должно быть не менее 5 символов'),
    description: yup.string()
    .required('Обязательное поле (Вы не можете оставить поле пустым)')
    .min(50, 'Должно быть не менее 50 символов'),
    category: yup.string().required('Вы не выбрали категорию'),
    // image: yup.mixed().required('Вы не выбрали картинку'),
});

