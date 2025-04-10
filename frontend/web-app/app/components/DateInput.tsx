import { Label } from "flowbite-react";
import DatePicker, { DatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useController, UseControllerProps } from "react-hook-form";

type Props = {
  label: string;
  type?: string;
  showLabel?: boolean;
} & UseControllerProps &
  DatePickerProps;

export default function DateInput(props: Props) {
  const { fieldState, field } = useController({ ...props, defaultValue: "" });
  return (
    <div className="mb-3">
      {props.showLabel && (
        <div className="mb-2 block">
          <Label htmlFor={field.name}>{props.label}</Label>
        </div>
      )}

      <DatePicker
        className={`
            rounded-lg w-full flex flex-col border border-black p-2
            ${
              fieldState.error
                ? "bg-red-50 border-red-500 text-red-900"
                : !fieldState.invalid && fieldState.isDirty
                ? "bg-green-50 border-green-500 text-green-900"
                : ""
            }
        `}
        {...props}
        {...field}
        placeholderText={props.label}
        selected={field.value}
      />
      {fieldState.error && (
        <div className="text-red-500 text-sm">{fieldState.error?.message}</div>
      )}
    </div>
  );
}
