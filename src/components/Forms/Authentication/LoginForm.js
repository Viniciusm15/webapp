import React from 'react'
import { Formik, Field } from 'formik'
import * as Yup from 'yup';

export default function LoginForm({ handleState }) {

    const signupSchema = Yup.object().shape({
        email: Yup.string().email('Email inválido *').required('Email obrigatório *'),
        password: Yup.string().required('Senha obrigatória *')
    });

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={signupSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}>
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => {
                return (
                    <div className="form">
                        <div className="fields">
                            <form onSubmit={handleSubmit}>
                                <div className="first">
                                    <ul>
                                        <li>
                                            <Field
                                                type="email"
                                                name="email"
                                                placeholder='Email'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            {errors.email && touched.email && <div className="error">{errors.email}</div>}
                                        </li>

                                        <li>
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder='Senha'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                            />
                                            {errors.password && touched.password && <div className="error">{errors.password}</div>}
                                        </li>
                                    </ul>
                                </div>

                                <button className="cavani_tm_button" type="submit" disabled={isSubmitting}>Entrar </button>
                                <span>Ou</span><a href="#" onClick={handleState}>Cadastre-se agora!</a>
                            </form>
                        </div>
                    </div>
                );
            }}
        </Formik>
    )
}
