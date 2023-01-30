import { Formik, Field } from 'formik'
import * as Yup from 'yup';

export default function Contact() {

    const contactSchema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório *'),
        email: Yup.string().email('Email inválido *').required('Email obrigatório *'),
        message: Yup.string().required('Mensagem obrigatória *'),
    });

    return (
        <div className="cavani_tm_form_responsive">
            <div className="cavani_tm_title">
                <span>Entrar em contato</span>
            </div>

            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={contactSchema}
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
                            <div className="left">
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
                                                        value={values.name} />
                                                    {errors.name && touched.name && <div className="error">{errors.name}</div>}
                                                </li>

                                                <li>
                                                    <Field
                                                        type="email"
                                                        name="email"
                                                        placeholder='Email'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email} />
                                                    {errors.email && touched.email && <div className="error">{errors.email}</div>}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="last">
                                            <textarea
                                                name="message" placeholder="Mensagem"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.message} />
                                            {errors.message && touched.message && <div className="error">{errors.message}</div>}
                                        </div>

                                        <button className="cavani_tm_button contact" type="submit" disabled={isSubmitting}>Enviar</button>
                                    </form>
                                </div>
                            </div>

                            {/* Map: https://www.embedgooglemap.net */}
                            <div className="right">
                                <div className="map_wrap">
                                    <div className="mapouter">
                                        <div className="gmap_canvas">
                                            <iframe width="600" height="500" id="gmap_canvas"
                                                src="https://maps.google.com/maps?q=Blumenau,%20SC,%20Brasil&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Formik>
        </div>
    )
}
