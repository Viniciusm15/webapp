import { Formik } from 'formik';

export default function Contact() {
    return (
        <div className="cavani_tm_contact">
            <div className="cavani_tm_title">
                <span>Entrar em contato</span>
            </div>

            <Formik
                initialValues={{ name: '', email: '' }}
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
                                    <form onSubmit={handleSubmit} className="contact_form" id="contact_form">
                                        <div className="first">
                                            <ul>
                                                <li>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder='nome'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.name} />
                                                    {errors.name && touched.name && errors.name}
                                                </li>

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
                                            </ul>
                                        </div>
                                        <div className="last">
                                            <textarea id="message" placeholder="Mensagem"></textarea>
                                        </div>

                                        <div className="cavani_tm_button">
                                            <a id="send_message" href="#" type="submit" disabled={isSubmitting}>Enviar</a>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Map: https://www.embedgooglemap.net */}
                            <div className="right">
                                <div className="map_wrap">
                                    <div class="mapouter">
                                        <div class="gmap_canvas">
                                            <iframe width="600" height="500" id="gmap_canvas"
                                                src="https://maps.google.com/maps?q=Blumenau,%20SC,%20Brasil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                frameborder="0"
                                                marginheight="0"
                                                marginwidth="0" />
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
