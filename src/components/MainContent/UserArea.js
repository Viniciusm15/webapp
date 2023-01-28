import { Formik } from 'formik';

export default function UserArea() {
    return (
        <div className="cavani_tm_user_area">
            <div className="cavani_tm_title">
                <span>Área do cliente</span>
            </div>

            <Formik
                initialValues={{ email: '', password: '' }}
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
                    isSubmitting,
                }) => {
                    return (
                        <div className="form">
                            <div className="fields">
                                <form onSubmit={handleSubmit} className="contact_form" id="contact_form">
                                    <div className="first">
                                        <ul>
                                            <li>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder='email'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email} />
                                                {errors.email && touched.email && errors.email}
                                            </li>

                                            <li>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    placeholder='senha'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password} />
                                                {errors.password && touched.password && errors.password}
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="cavani_tm_button">
                                        <a id="send_message" href="#" type="submit" disabled={isSubmitting}>Entrar</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Formik>
        </div>
    )
}
