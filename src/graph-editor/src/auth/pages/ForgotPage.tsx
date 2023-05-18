import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";
import CenteredContainer from "components/CentredContainer";
import FormInput from "../../components/forms/FormInput";
import { userService } from "../authApi";
import ResetPassword from "./ResetPage"; // Импортируем компонент с функцией сброса пароля

const ForgotPasswordSchema = yup.object({
  email: yup.string().email("Not a valid email").required("Empty email"),
});

const ForgotPage: FC = React.memo(() => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: async (values, { setSubmitting, setFieldError, setStatus }) => {
      try {
        // Выполняем логику сброса пароля здесь
        // Например, вызов API-эндпоинта для отправки ссылки на сброс пароля на указанный email
        // userService.sendPasswordResetEmail(values.email)
        //   .then(() => {
        //     // Ссылка на сброс пароля успешно отправлена
        //     navigate('../login');
        //   })
        //   .catch((error) => {
        //     // Обработка ошибок
        //     setFieldError('email', 'Error: ' + error);
        //   });

        // Вместо реальной логики сброса пароля, мы просто переходим на страницу входа
        navigate('../login');
      } catch (error) {
        setFieldError('email', 'Error: ' + error);
      }
    },
  });

  return (
    <CenteredContainer>
      <main>
        <h1>Забыли пароль?</h1>
        <div>
          {/* Форма для ввода email */}
          <FormikProvider value={formik}>
            <Form noValidate onSubmit={formik.handleSubmit}>
              <FormInput field="email" placeholder="Email" />
              <Button type="submit" variant="light" className="w-100 mt-3">
                Отправить
              </Button>
            </Form>
          </FormikProvider>
        </div>
        {/* Компонент с функцией сброса пароля */}
        <ResetPassword initialPassword="password" />
      </main>
    </CenteredContainer>
  );
});

ForgotPage.displayName = "ForgotPage";
export default ForgotPage;