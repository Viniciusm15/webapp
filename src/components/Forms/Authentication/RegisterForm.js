import React from 'react'
import { Formik, Field } from 'formik'
import * as Yup from 'yup';

export default function RegisterForm({ handleState }) {

    const loginSchema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório *'),
        email: Yup.string().email('Email inválido *').required('Email obrigatório *'),
        password: Yup.string().required('Senha obrigatória *'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Senhas não coincidem *')
    });

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={loginSchema}
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
                                                type="text"
                                                name="name"
                                                placeholder='Nome'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                            />
                                            {errors.name && touched.name && <div className="error">{errors.name}</div>}
                                        </li>

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

                                        <li>
                                            <Field
                                                type="password"
                                                name="confirmPassword"
                                                placeholder='Confirmar senha'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.confirmPassword}
                                            />
                                            {errors.confirmPassword && touched.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                                        </li>
                                    </ul>
                                </div>

                                <button className="cavani_tm_button" type="submit" disabled={isSubmitting}>Cadastrar</button>
                                <span>Ou</span><a href="#" onClick={handleState}>Faça login agora!</a>
                            </form>
                        </div>
                    </div>
                );
            }}
        </Formik>
    )
}
