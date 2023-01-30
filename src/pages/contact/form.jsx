import React, { useRef,useState } from "react";
import { Input, Stack, Textarea, Button } from "@chakra-ui/react";
// import * as Yup from yup
import styles from "./contact.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useToast } from "@chakra-ui/react";

import emailjs from "@emailjs/browser";

function Form(props) {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false)

  const toast = useToast();
  const MessageSubmit = () => {
    return Yup.object({
      name: Yup.string().required("Please let us know youer name"),
      email: Yup.string().required("email is required"),
      subject: Yup.string().required("subjec is required"),
      message: Yup.string().required("message is required"),
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: MessageSubmit(),

    onSubmit: (values) => {
      // e.preventDefault();
      setIsLoading(true)

      emailjs
        .sendForm(
          "service_j7wz2wa",
          "template_b5kvcic",
          form.current,
          "-vdSzHTq-8uRJgfl7"
        )
        .then(
          (result) => {
            toast({
              title: "Mail Sent",
              description: "We will get back to you shortly.",
              position: "bottom-left",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            setIsLoading(false)
          },
          (error) => {
            console.log(error.text);
            toast({
              title: "Mail Sent",
              description: "Something went wrong",
              position: "bottom-left",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
            setIsLoading(false)
          }
        );

      // console.log(values);

      formik.handleReset();

    },
  });
  // console.log(formik.values);
  return (
    <div>
      <form ref={form} onSubmit={formik.handleSubmit}>
        <Stack spacing={7}>
          <div>
            <Input
              name="name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={styles.input}
              variant="filled"
              placeholder="Your Name"
              size="lg"
            />

            {formik.touched.name && formik.errors.name && (
              <p className={styles.errorMsg}>{formik.errors.name}</p>
            )}
          </div>

          <div>
            <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              name="email"
              className={styles.input}
              variant="filled"
              placeholder="Your email"
              size="lg"
            />
            {formik.touched.email && formik.errors.email && (
              <p className={styles.errorMsg}>{formik.errors.email}</p>
            )}
          </div>

          <div>
            <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              name="subject"
              className={styles.input}
              variant="filled"
              placeholder="Subject"
              size="lg"
            />
            {formik.touched.subject && formik.errors.subject && (
              <p className={styles.errorMsg}>{formik.errors.subject}</p>
            )}
          </div>

          <div>
            <Textarea
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              name="message"
              className={styles.text_area}
              placeholder="Here is a sample placeholder"
              size="lg"
            />
            {formik.touched.message && formik.errors.message && (
              <p className={styles.errorMsg}>{formik.errors.message}</p>
            )}
          </div>

          <div className={styles.btn} styles={{ width: "100px" }}>
            <Button type="submit" colorScheme="messenger" size="lg" disabled={isLoading}>
              {isLoading?'sending mail': 'Send Message'}
            </Button>
          </div>
        </Stack>
      </form>
    </div>
  );
}

export default Form;
