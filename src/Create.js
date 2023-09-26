import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const Create = () => {
  const [form] = Form.useForm();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleAddPost = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            title: title,
            body: body,
            userId: 1,
          }),
        }
      );
      setTimeout(() => {
        if (response.status === 201) {
          setResponse("New post added successfully.");
          console.log("New post added successfully.");
        } else {
          setResponse("Failed to add a new post.");
          console.error("Failed to add a new post.");
        }
        setIsLoading(false);
        form.resetFields();
      }, 1000);
    } catch (error) {
      setResponse("An error occurred:", error);
      setIsLoading(false);
      console.error("An error occurred:", error);
    }
  };

  const handleSubmit = () => {
    handleAddPost();
  };

  return (
    <div className="create">
      <h2>{response ? response + " Try a new one?" : "Add a new Blog"}</h2>
      <Form
        form={form}
        size="large"
        layout="vertical"
        className="create__form"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Input Title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Body"
          name="body"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea
            onChange={(e) => setBody(e.target.value)}
            rows={3}
            placeholder="Input Body..."
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Create;
