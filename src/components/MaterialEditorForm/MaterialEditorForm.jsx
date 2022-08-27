import { Formik, Form, Field } from 'formik';

export const MaterialEditorForm = ({ onSubmit }) => {
    const handleSubmit = (values, actions) => {
        onSubmit(values)
        actions.resetForm();
    }
    return <Formik initialValues={{ title: '', link: '' }}
        onSubmit={handleSubmit}
    >
        <Form>
            <label>
                Description
                <Field name="title" type="text"/>
            </label>
            <br/>
               <label>
                Link
                <Field name="link" type="text"/>
                </label>
                <button type="submit">Add material</button>
        </Form>
    </Formik>
};