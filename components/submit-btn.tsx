import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {

    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-slate-800 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-100 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-slate-950 hover:text-white active:scale-105 disabled:scale-100 disabled:bg-opacity-75"
            disabled={pending}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ): (
                <>
                    Submit{" "}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />{" "}
                </>
            )}
        </button>
    );
}