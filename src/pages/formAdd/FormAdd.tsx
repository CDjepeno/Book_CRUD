import React from 'react';
import { Button } from '../../components/button/Button';
import { Field } from '../../components/forms/field';
import { withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { Title } from '../../components/title/Title';

// type Field = {
//     value?: any;
//     error?: string;
// }
interface Props {
    books: Object
    handleAddBook: any
}

interface OtherProps {
    handleAddBook: any
}

interface FormValues {
    title: string;
    author: string;
    nb: number | string;
}

interface MyFormProps {
    initialTitle?: string;
    initialAuthor?: string;
    initialNb?: number;
    handleAddBook: any
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        handleAddBook
    } = props;

    const handleFormValidation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleAddBook(values.title, values.author, values.nb);
        
    }
    

    return (
    <>
        <Title title="Ajouter un livre"/>
        <form onSubmit={handleSubmit}>
            <Field
                label="Titre du livre"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.title}
            />
            <Field
                label="Auteur"
                name="author"
                value={values.author}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.author}
            
            />
            <Field
                label="Nombre de pages"
                name="nb"
                value={values.nb}
                onChange={handleChange}
                onBlur={handleBlur}
                type= "number"
                error={errors.nb}
            />

            <Button 
                text="valider" 
                btnCss="btn btn-info mb-3" 
                clic={handleFormValidation} 
                disabled={
                    isSubmitting ||
                    !!(errors.title && touched.title) || 
                    !!(errors.author && touched.author) || 
                    !!(errors.nb && touched.nb)  
                }
            />
        </form>
    </>
    );
};

const FormAdd = withFormik<MyFormProps, FormValues, Props>({
    mapPropsToValues: props => ({
        title: props.initialTitle || "",
        author: props.initialAuthor || "",
        nb: props.initialNb || ""
    }),

    validationSchema: Yup.object().shape({
        title: Yup.string()
            .min(3,"votre titre doit comporter au moins 3 caractères")
            .max(15,"votre titre doit avoir moins de 15 caractères")
            .required("Le titre est obligatoire"),
        author: Yup.string()
            .min(3,"l'auteur doit comporter au moins 3 caractères")
            .required("L'auteur est obligatoire"),
        nb: Yup.number()
            .moreThan(50,"Votre livre doit comporter au moins 50 pages")
            .lessThan(500,"Votre livre doit comporter au maximum 500 pages")
            .required("Le nombre de page est obligatoire")
    }),

    handleSubmit({ title, author, nb }: FormValues , { props, setSubmitting, setErrors }) {
        console.log(title, author, nb);

        // handleAddBook()
    }
})(InnerForm);

export default FormAdd;
