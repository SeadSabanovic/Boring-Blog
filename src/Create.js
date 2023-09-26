import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log({ title, body });
    navigate("/");
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <Form
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Create;
