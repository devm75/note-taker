import React, { useState } from "react";
import { Input } from "../FormElements/Input";
import { Select } from "../FormElements/Select";
import { constants } from "@/src/constants";

export const AddTodoModal = () => {
  const initialState = {
    todoTitle: "",
    todoDescription: "",
    todoStatus: "",
  };

  const [todoState, setTodoState] = useState(initialState);

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed flex  items-center justify-center inset-0 z-10 w-screen overflow-y-auto">
        <div className=" p-4 text-center sm:items-center overflow-auto sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 min-h-480">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex flex-col gap-6  min-w-480">
                  <Input type="text" placeholder="Todo Title" />
                  <Input type="text" placeholder="Todo Description" />
                  <Select
                    placeholder="Todo Status"
                    options={constants.todoStatus}
                    onSelectOption={() => {}}
                  />

                  <div className="mt-2"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex gap-2 h-fit flex-row-reverse sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-fit min-w-100 justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="button"
                className=" inline-flex w-fit min-w-100 justify-center rounded-md bg-light-primary-2 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-600 sm:mt-0 sm:w-auto"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
