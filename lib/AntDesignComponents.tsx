"use client";

import {
  Input,
  ConfigProvider,
  Button,
  Checkbox,
  Radio,
  Steps,
  InputProps,
  ButtonProps,
  CheckboxProps,
  RadioProps,
  RadioGroupProps,
  StepsProps,
} from "antd";
import { TextAreaProps } from "antd/es/input";

export const CustomInput = ({ ...props }: InputProps) => (
  <ConfigProvider
    theme={{
      token: {},
    }}
  >
    <Input {...props} style={{ padding: 8 }} />
  </ConfigProvider>
);

export const CustomTextArea = ({ ...props }: TextAreaProps) => (
  <ConfigProvider>
    <Input.TextArea {...props} />
  </ConfigProvider>
);

export const CustomButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider theme={{ token: { controlHeight: 45 } }}>
    <Button {...props} />
  </ConfigProvider>
);

export const CustomCheckBox = ({ ...props }: CheckboxProps) => (
  <ConfigProvider
    theme={{
      token: {
        borderRadius: 4,
        padding: 24,
      },
    }}
  >
    <Checkbox {...props} />
  </ConfigProvider>
);

export const RadioButton = ({ ...props }: RadioProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#C4C4C4",
      },
      components: {
        Radio: {
          buttonBg: "transparent",
          buttonCheckedBg: "#C4C4C4",
          buttonSolidCheckedColor: "#C4C4C4",
          colorBorder: "#C4C4C4",
          controlHeight: 42,
          padding: 30,
        },
      },
    }}
  >
    {/* <Radio.Group> */}
    <Radio.Button
      style={{
        // ...props.style,
        // margin: "5%",
        borderRadius: 30,
        textAlign: "center",
        color: "#616A6A",
        width: "100%",
      }}
      {...props}
    />
    {/* </Radio.Group> */}
  </ConfigProvider>
);

export const RadioGroup = ({ ...props }: RadioGroupProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#C4C4C4",
      },
      components: {
        Radio: {
          buttonBg: "transparent",
          buttonCheckedBg: "#C4C4C4",
          buttonSolidCheckedColor: "#C4C4C4",
          colorBorder: "#C4C4C4",
          controlHeight: 42,
          // padding: 20,
        },
      },
    }}
  >
    <Radio.Group
      {...props}
      style={{
        // margin: "5%",
        borderRadius: 30,
        textAlign: "center",
        color: "#616A6A",
        // display: "grid",
        // gridTemplateColumns: 7,
      }}
    />
  </ConfigProvider>
);

export const CustomSteps = ({ ...props }: StepsProps) => (
  <ConfigProvider>
    <Steps {...props} />
  </ConfigProvider>
);