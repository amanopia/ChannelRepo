import React from "react";
import APISim from "./APISimulator.js";
import { Button } from "./ui/button.jsx";
import { useState } from "react";

import { useToast } from "./ui/use-toast.js";

const ToastSim = () => {
  const { toast } = useToast();

  const [inputValue, setInputValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    function oneWeekAway() {
      const now = new Date();
      const inOneWeek = now.setDate(now.getDate() + 7);
      return new Date(inOneWeek);
    }

    APISim(inputValue).then(
      (response) => {
        toast({
          title: response,
          description: oneWeekAway().toDateString(),
        });
      },
      (response) => {
        toast({
          variant: "destructive",
          title: response.message,
          // You should use response.message instead of response.toString() because on response object we do get a property named message which contains the error message
        });
      }
    );
  }

  return (
    <form className="flex flex-col items-start gap-4" onSubmit={submitHandler}>
      <label htmlFor="name" className="font-semibold text-5xl">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="border-2 border-black p-2 rounded-md w-64"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Button>Submit</Button>
    </form>
  );
};

export default ToastSim;
