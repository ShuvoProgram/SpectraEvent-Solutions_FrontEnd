'use client'
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

type InputUpload = {
  label: string;
  name: string;
  loading?: boolean;
  handleChange: (info: any) => void;
  imageUrl: string | null;
  required?: boolean;
  message?: string;
  size?: string;
  placeholder?: string;
};


const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif" || file.type === "image/jpg";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};


const UploadImage = ({ 
  label,
  name,
  required,
  message,
  imageUrl,
  handleChange,
 }: InputUpload) => {
  const [loading, setLoading] = useState(false);
  const { setValue } = useFormContext();
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div style={{margin: "0 4px"}}>
      <Form.Item
       label={label}
       name={name}
       rules={[
         {
           required: required,
           message: message,
         },
       ]}
      >
      <Upload
        name={name}
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="/api/file"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="avatar"
            style={{ width: "100%" }}
            width={100}
            height={100}
          />
        ) : (
          uploadButton
        )}
      </Upload>
      </Form.Item>
      
    </div>
  );
};

export default UploadImage;
