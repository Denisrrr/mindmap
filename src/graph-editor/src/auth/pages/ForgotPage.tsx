import React, {Component} from "react";
import { FC } from "react";
import PromoGraph from "graph/PromoGraph";
import styles from "graph/pages/MainPage.module.scss";
import { useNavigate } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";
import CenteredContainer from "components/CentredContainer";
import FormInput from "../../components/forms/FormInput";
import { RegisterUser, userService } from "../authApi";


const ForgotPassword = yup.object({
    email: yup.string().email("Not a valid email").required("Empty email"),
});

const ForgotPage: FC = React.memo(() => {
    const navigate = useNavigate();


    const formik = useFormik<RegisterUser>({
        initialValues: {
            userName: "",
            email: "",
            password: "",
        },

        validationSchema: ForgotPassword,
        onSubmit: async (data, {
            setSubmitting,
            setFieldError,
            setStatus
        }) => {
            userService.register(data).then((value) => {
                navigate('../login')
            }).catch((reason) => {
                setFieldError('userName', 'Error ' + reason);
            });
        }
    });

    return (
        <CenteredContainer>
            <PromoGraph />
            <main className={styles.main}>
                <h1>Забыли пароль?</h1>
                <div className={styles.forms}>
                    <FormikProvider value={formik}>
                        <Form noValidate onSubmit={formik.handleSubmit}>
                            <FormInput field="email" placeholder="Email"/>
                            <Button
                                type="submit"
                                variant="light"
                                className="w-100 mt-3"
                            >
                                <> Отправить</>
                            </Button>
                        </Form>
                    </FormikProvider>
                </div>
            </main>
        </CenteredContainer>
    );
});
ForgotPage.displayName = "RegisterPage";
export default ForgotPage;