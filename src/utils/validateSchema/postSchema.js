import * as yup from "yup";

// ! Здесь мы описываем схему валидации нашей редактирования
export const UpdatePostSchema = yup.object().shape({
    title: yup.string()
        .required('Обязательное поле (Вы не можете оставить поле пустым)')
        .max(100, 'Должно быть не более 100 символов')
        .min(5, 'Должно быть не менее 5 символов'),
    description: yup.string()
        .required('Обязательное поле (Вы не можете оставить поле пустым)')
        .min(183, 'Должно быть не менее 50 символов'),
});

// ! Здесь мы описываем схему валидации нашей формы
export const CreatePostSchema = yup.object().shape({
    category: yup.string().required('Вы не выбрали категорию'),
}).concat(UpdatePostSchema);;


