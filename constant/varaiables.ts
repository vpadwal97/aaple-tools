export const AllTools = [
  {
    id: 1,
    name: "JSON Formatter",
    path: "/tools/json-formatter",
    description: "Format and validate JSON data easily.",
  },
  {
    id: 2,
    name: "Word Counter",
    path: "/tools/word-counter",
    description: "Count words, characters and sentences instantly.",
  },
  {
    id: 3,
    name: "Case Converter",
    path: "/tools/case-converter",
    description: "Convert text to uppercase, lowercase and more.",
  },
  {
    id: 4,
    name: "Text Compare",
    path: "/tools/text-compare",
    description: "Compare two texts and find differences.",
  },
  {
    id: 5,
    name: "Base64 Tool",
    path: "/tools/base64",
    description: "Encode and decode Base64 strings.",
  },
  {
    id: 6,
    name: "URL Encoder / Decoder",
    path: "/tools/url-encoder",
    description: "Encode and decode URLs easily.",
  },

  {
    id: 7,
    name: "JWT Decoder",
    path: "/tools/jwt-decoder",
    description: "Decode JWT tokens and inspect payload.",
  },
  {
    id: 8,
    name: "Timestamp Converter",
    path: "/tools/timestamp",
    description: "Convert timestamps to human-readable dates.",
  },
  {
    id: 9,
    name: "Slug Generator",
    path: "/tools/slug-generator",
    description: "Generate SEO-friendly slugs instantly.",
  },
  {
    id: 10,
    name: "regex-tester",
    path: "/tools/regex-tester",
    description: "Test and debug regular expressions online instantly.",
  },
  {
    id: 11,
    name: "Minifier / Beautifier",
    path: "/tools/minifier",
    description: "Minify and beautify HTML, CSS, and JS code.",
  },
  //
  {
    id: 150,
    name: "Password Generator",
    path: "#",
    description: "Generate secure passwords instantly.",
    comingSoon: true,
  },
  {
    id: 160,
    name: "JSON to CSV Converter",
    path: "#",
    description: "Convert JSON data into CSV format.",
    comingSoon: true,
  },
];



export const someCode = `"use client";
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
          newErrors[field.id] = "{field.label} is required";
          return;
        }
      }

      if (field.regex && value) {
        const regex = new RegExp(field.regex);

        if (!regex.test(String(value))) {
          newErrors[field.id] = "{field.label} is invalid";
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
`