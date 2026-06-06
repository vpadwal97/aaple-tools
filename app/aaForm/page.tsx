"use client";
import React, { useEffect, useState } from "react";
// import axios from "axios";

interface formSchemaInterface {
  id: string;
  label: string;
  fieldType: string;
  regex?: string;
  required?: boolean;
  options?: string[];
  showIf?: {
    field: string;
    value: boolean;
  };
}

const formSchema: formSchemaInterface[] = [
  {
    id: "fullName",
    label: "Full Name",
    fieldType: "text",
    regex: "^[A-Za-z ]{3,30}$",
    required: true,
  },
  {
    id: "email",
    label: "Email",
    fieldType: "email",
    regex: "^\\S+@\\S+\\.\\S+$",
    required: true,
  },
  {
    id: "age",
    label: "Age",
    fieldType: "number",
    regex: "^[0-9]{1,2}$",
    required: true,
  },
  {
    id: "gender",
    label: "Gender",
    fieldType: "select",
    options: ["Male", "Female", "Other"],
    required: true,
  },
  {
    id: "isEmployee",
    label: "Are you an Employee?",
    fieldType: "checkbox",
  },
  {
    id: "employeeId",
    label: "Employee ID",
    fieldType: "text",
    regex: "^[0-9]{4}$",
    required: true,
    showIf: {
      field: "isEmployee",
      value: true,
    },
  },
];

export default function DynamicForm() {
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     const savedData = localStorage.getItem("dynamicForm");

  //     if (savedData) {
  //       setFormData(JSON.parse(savedData));
  //     }
  //   }, []);

  const handleChange = (fieldId: string, value: string | boolean) => {
    const updatedData = {
      ...formData,
      [fieldId]: value,
    };

    setFormData(updatedData);

    localStorage.setItem("dynamicForm", JSON.stringify(updatedData));
  };

  const validateForm = () => {
    const newErrors: any = {};

    formSchema.forEach((field) => {
      const value = formData[field.id];

      if (field.showIf && formData[field.showIf.field] !== field.showIf.value) {
        return;
      }

      if (field.required) {
        if (value === undefined || value === null || value === "") {
          newErrors[field.id] = `${field.label} is required`;
          return;
        }
      }

      if (field.regex && value) {
        const regex = new RegExp(field.regex);

        if (!regex.test(String(value))) {
          newErrors[field.id] = `${field.label} is invalid`;
        }
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    try {
      setLoading(true);

      const response = {
        data: "somedata",
      };
      //   const response = await axios.post(
      //     "https://jsonplaceholder.typicode.com/posts",
      //     formData
      //   );

      console.log("API Response:", response.data);

      alert("Form submitted successfully");

      localStorage.removeItem("dynamicForm");

      setFormData({});
      setErrors({});
    } catch (error) {
      console.error(error);

      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field : formSchemaInterface) => {
    if (field.showIf && formData[field.showIf.field] !== field.showIf.value) {
      return null;
    }

    switch (field.fieldType) {
      case "text":
      case "email":
      case "number":
        return (
          <input
            type={field.fieldType}
            value={formData[field.id] || ""}
            onChange={(e) => handleChange(field.id, e.target.value)}
          />
        );

      case "checkbox":
        return (
          <input
            type="checkbox"
            checked={formData[field.id] || false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(field.id, e.target.checked)}
          />
        );

      case "select":
        return (
          <select
            value={formData[field.id] || ""}
            onChange={(e) => handleChange(field.id, e.target.value)}
          >
            <option value="">Select Option</option>

            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
      }}
    >
      <h2>Dynamic Form</h2>

      <form onSubmit={handleSubmit}>
        {formSchema.map((field) => (
          <div
            key={field.id}
            style={{
              marginBottom: "16px",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "6px",
              }}
            >
              {field.label}
            </label>

            {renderField(field)}

            {errors[field.id] && (
              <p
                style={{
                  color: "red",
                  margin: "4px 0",
                }}
              >
                {errors[field.id]}
              </p>
            )}
          </div>
        ))}

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      <hr />

      <h3>Current Form Data</h3>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}
