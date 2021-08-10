const { TextArea } = Input;
import "antd/lib/form/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import { ThemeContext } from "../../layouts";

import React, { useEffect } from 'react';
import { Form, Button, Input } from 'antd';

const ContactForm = () => {
	const [form] = Form.useForm();

	// Use form inside UseEffect
	useEffect(() => {
		form.setFieldsValue({
			username: '',
		});
	}, [form]);

	// Case: Submit button out of Form
  function sendMessage(values) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values })
    })
      .then(() => {
        console.log("Form submission success");
        navigate("/success");
      })
      .catch(error => {
        console.error("Form submission error:", error);
        this.handleNetworkError();
      });
  }

	return (
		<>
			<Form form={form} data-netlify-honeypot="bot-field" data-netlify="true">
				<Form.Item label="Name" name="username" rules={[{ required: true }]}>
					<Input name="name"/>
				</Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
					<Input name="email"/>
				</Form.Item><Form.Item label="Message" name="message" rules={[{ required: true,  message: "Please input your message!", whitespace: true}]}>
        <TextArea name="message" placeholder="" autoSize={{ minRows: 4, maxRows: 10 }} />
				</Form.Item>
			</Form>
			<Button onSubmit={sendMessage}>Submit</Button>
		</>
	);
};

export default ContactForm;
