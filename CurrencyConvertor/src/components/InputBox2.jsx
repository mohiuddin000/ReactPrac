import React from "react";
import { useId } from "react";
import Select from "react-select";

function InputBox2({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "8px",
      border: state.isFocused ? "1px solid #0056b3" : "1px solid #cbd5e0",
      boxShadow: state.isFocused ? "0 0 0 1px #0056b3" : "none",
      "&:hover": {
        border: "1px solid #0056b3",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#0056b3" : "#fff",
      color: state.isSelected ? "#fff" : "#333",
      "&:hover": {
        backgroundColor: "#0056b3",
        color: "#fff",
      },
    }),
  };

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <Select
          styles={customStyles}
          options={currencyOptions.map((currency) => ({
            value: currency,
            label: currency,
          }))}
          value={{ value: selectCurrency, label: selectCurrency }}
          onChange={(selectedOption) =>
            onCurrencyChange && onCurrencyChange(selectedOption.value)
          }
          isDisabled={currencyDisable}
          isSearchable
        />
      </div>
    </div>
  );
}

export default InputBox2;
