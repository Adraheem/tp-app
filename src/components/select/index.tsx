import ReactSelect from "react-select";
import {ISelectValue} from "../../types";
import {useFormikContext} from "formik";
import {useMemo} from "react";
import isEmpty from "is-empty";
import utils from "../../utils";

interface IProps {
  label: string;
  name: string;
  options?: ISelectValue[];
  placeholder?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
}

function Select({
                  label,
                  name,
                  options,
                  placeholder,
                  isLoading,
                  isDisabled,
                  isSearchable,
                }: IProps) {
  const {values, setFieldValue, errors, touched} = useFormikContext<any>();

  const selectedValue = useMemo(() => {
    return options?.filter((op) => {
      const selected = utils.getNestedValue(values, name);
      if (typeof op.value === "object" && !isEmpty(selected)) {
        return JSON.stringify(op.value) === JSON.stringify(selected);
      } else {
        return op.value === selected;
      }
    })[0];
  }, [name, options, values]);

  return (
    <div>
      {
        !!label && (
          <label className="block font-medium typo-body mb-1">{label}</label>
        )
      }
      <ReactSelect
        options={options}
        value={selectedValue || null}
        onChange={(e: any) => setFieldValue(name, e.value)}
        placeholder={placeholder}
        isLoading={isLoading}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        classNames={{
          singleValue: (state) => "text-zinc-800",
          control: (state) => `bg-white border-[1px] border-black hover:border-black h-[32px] rounded-[0px]`,
          menu: (state) => `bg-white rounded-[0px] border-0 z-[5]`,
          option: (state) => state.isSelected ? `bg-primary-50 text-black` : state.isFocused ? `bg-zinc-200` : `hover:bg-zinc-100`,
          input: () => `text-zinc-800 rounded-[0px]`,
          indicatorSeparator: () => `bg-zinc-200 w-0`,
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#ff9900',
          },
        })}
      />
      {touched[name] && utils.getNestedValue(errors, name) ? (
        <p
          className="pt-1 text-red-500">
          {utils.getNestedValue(errors, name) as string}
        </p>
      ) : null}
    </div>
  );
}

export default Select;